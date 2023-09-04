# app.py

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.username}')"

@app.route('/')
def home():
    return jsonify({"message": "Welcome to my portfolio!"})

if __name__ == '__main__':
    app.run(debug=True)
