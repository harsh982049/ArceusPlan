from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from io import BytesIO
from fpdf import FPDF
import google.generativeai as genai
import base64
import os

# Flask App Initialization
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# MySQL Database Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/room_planner'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure Gemini API
GENAI_API_KEY = os.getenv("GENAI_API_KEY")
genai.configure(api_key=GENAI_API_KEY)

# Models
class Layout(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(100), nullable=False)  # User identifier
    layout_data = db.Column(db.Text, nullable=False)  # JSON layout data
    pdf_file = db.Column(db.LargeBinary, nullable=True)  # PDF stored as binary

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/upload', methods=['POST'])
def upload_images():
    """Endpoint to upload images and send them to the Gemini API for analysis."""
    if 'file_0' not in request.files:
        return jsonify({'error': 'No images uploaded'}), 400

    # Get uploaded files
    files = request.files.values()
    image_data = []

    for file in files:
        img_bytes = file.read()
        img_base64 = base64.b64encode(img_bytes).decode('utf-8')
        image_data.append(img_base64)

    # Gemini API Call
    prompt = """You are a room analysis AI. Analyze the provided room images and respond with a JSON object strictly in the following format:

    {
        "dimensions": {"width": float, "height": float},
        "doors": [{"x": float, "y": float}],
        "windows": [{"x": float, "y": float}],
        "furniture": [{"type": string, "location": {"x": float, "y": float}}]
    }

    Instructions:
    1. Respond with JSON ONLY. Do not include any additional text or explanations.
    2. All measurements must be in meters.
    3. Use reasonable estimates if exact dimensions cannot be determined from the images.
    4. Include at least the room dimensions, and any visible doors, windows, and furniture.
    """

    try:
        # Generate content using Gemini API
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content([prompt] + image_data)
        layout_data = response.text  # JSON Layout

        return jsonify({'layout': layout_data}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    """Generate a PDF of the 2D room layout and store it in the database."""
    try:
        data = request.json
        user_id = data.get("user_id")
        layout_data = data.get("layout_data")

        if not user_id or not layout_data:
            return jsonify({"error": "Missing user_id or layout_data"}), 400

        # Generate PDF
        pdf = FPDF()
        pdf.add_page()
        pdf.set_font("Arial", size=12)

        pdf.cell(200, 10, txt="2D Room Layout", ln=True, align="C")
        pdf.multi_cell(0, 10, txt=f"User ID: {user_id}")
        pdf.multi_cell(0, 10, txt="Layout Data:")
        pdf.multi_cell(0, 10, txt=layout_data)

        # Save PDF in memory
        pdf_output = BytesIO()
        pdf.output(pdf_output)
        pdf_output.seek(0)

        # Store PDF in the database
        new_layout = Layout(user_id=user_id, layout_data=layout_data, pdf_file=pdf_output.read())
        db.session.add(new_layout)
        db.session.commit()

        return jsonify({"message": "PDF generated and saved successfully!", "layout_id": new_layout.id}), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/download-pdf/<int:layout_id>', methods=['GET'])
def download_pdf(layout_id):
    """Download the PDF for a specific layout."""
    try:
        layout = Layout.query.get(layout_id)
        if not layout or not layout.pdf_file:
            return jsonify({"error": "Layout or PDF not found"}), 404

        return send_file(
            BytesIO(layout.pdf_file),
            mimetype="application/pdf",
            as_attachment=True,
            download_name=f"layout_{layout_id}.pdf",
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)
