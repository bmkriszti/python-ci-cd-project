# app.py
from flask import Flask

# Create Flask app
app = Flask(__name__)

# Simple route
@app.route('/')
def home():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


