from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/api/user-stats/<username>', methods=['GET'])
def get_user_stats(username):
    response = requests.get(f'https://www.codewars.com/api/v1/users/{username}')
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
