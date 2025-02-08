import streamlit as st
import google.generativeai as genai
import plotly.graph_objects as go
import json
import re

# Page Config
st.set_page_config(page_title="Room Scanner & Floor Plan Generator", layout="wide")

def initialize_gemini(api_key):
    genai.configure(api_key=api_key)
    return genai.GenerativeModel('gemini-1.5-flash')

def extract_json_from_response(text):
    json_match = re.search(r'\{.*\}', text, re.DOTALL)
    if json_match:
        try:
            return json.loads(json_match.group())
        except:
            return None
    return None

def analyze_room_images(model, images):
    prompt = "Analyze these images and return JSON with room dimensions and features."
    response = model.generate_content([prompt] + images)
    return extract_json_from_response(response.text) or {}

st.title("Room Scanner & Floor Plan Generator")

api_key = st.text_input("Enter your Google Gemini API Key:", type="password")

if "uploaded_images" in st.session_state and st.session_state.uploaded_images:
    st.header("Uploaded Images")
    for img in st.session_state.uploaded_images:
        st.image(img, use_column_width=True)

    if st.button("Generate Floor Plan"):
        model = initialize_gemini(api_key)
        floor_plan_data = analyze_room_images(model, st.session_state.uploaded_images)
        st.session_state.floor_plan_data = floor_plan_data

if "floor_plan_data" in st.session_state and st.session_state.floor_plan_data:
    st.header("Generated Floor Plan")
    st.json(st.session_state.floor_plan_data)

    fig = go.Figure()
    for wall in st.session_state.floor_plan_data.get("walls", []):
        fig.add_trace(go.Scatter(
            x=[wall["start"]["x"], wall["end"]["x"]],
            y=[wall["start"]["y"], wall["end"]["y"]],
            mode="lines",
            line=dict(color="black", width=2),
        ))

    st.plotly_chart(fig)
