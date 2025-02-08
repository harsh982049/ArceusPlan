from flask import Flask, request, jsonify
import streamlit as st
from PIL import Image
import io

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload_images():
    """Receive images from Next.js and store them in Streamlit session state"""
    uploaded_files = request.files
    images = []

    for file_key in uploaded_files:
        image = Image.open(io.BytesIO(uploaded_files[file_key].read()))
        images.append(image)

    st.session_state.uploaded_images = images  # Store images in session
    return jsonify({"status": "success", "message": "Images uploaded successfully"}), 200

if __name__ == "__main__":
    app.run(port=5001, debug=True)
