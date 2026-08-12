# This is intended to emulate the real API -- for testing purposes only.

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/destaques")
def hello_world():
    return "Hello, World!"