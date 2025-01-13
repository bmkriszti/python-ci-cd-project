# app.py
from flask import Flask, jsonify, request
import requests

# Create Flask app
app = Flask(__name__)

# Simple route
@app.route('/')
def home():
    return "Hello, World!"

@app.route('/api/user-stats/<username>', methods=['GET'])
def get_user_stats(username):
    response = requests.get(f'https://www.codewars.com/api/v1/users/{username}')
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


