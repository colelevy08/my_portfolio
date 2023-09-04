# app.py
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)

    def __repr__(self):
        return f"User('{self.username}')"

@app.route('/')
def home():
    return jsonify({"message": "Welcome to my portfolio ~ Cole Levy"})

@app.route('/info')
def info():
    personal_info = {
        "skills": [
            "Communication", "Media Literacy", "Foreign Languages",
            "Guest Relations Management", "Hospitality Service Expertise",
            "Dining Customer Service", "Point-of-sale (POS) Software",
            "Process Payments", "Cash Handling", "Suggestive Selling",
            "Guest and Employee Relations and Rapport", "Quality Control",
            "Adaptable and Flexible", "Critical Thinking"
        ],
        "software": [
            "Python", "Flask", "SQL", "JavaScript", "React",
            "Node.js", "HTML", "CSS", "Github", "VSCode",
            "Full Stack Development", "Macintosh Applications, Software, and CLI",
            "Google Applications and Software", "Microsoft Office"
        ],
        "spoken_languages": ["English", "Spanish", "French", "Mandarin"],
        "accomplishments": [
            "Rowing National Champion (4x)", "6th place in Head of the Charles (2x)",
            "Adirondack 46er"
        ],
        "timeline": [
            {"event": "15 Week Program - Software Engineering: Full Stack Development", "place": "Flatiron School", "time": "2023.02 - 2023.07"},
            {"event": "Study Abroad - French Language, History, And Culture", "place": "LA Sorbonne", "time": "2022.09 - 2022.12"},
            # ... (add all timeline events)
        ],
        "education": [
            {"degree": "15 Week Program - Software Engineering: Full Stack Development", "school": "Flatiron School", "time": "2023.02 - 2023.07"},
            {"degree": "Bachelor of Arts - Communication", "school": "SUNY Geneseo", "time": "2019.09 - 2022.12"},
            # ... (add all education)
        ],
        "work_history": [
            {"role": "Server", "company": "The Daily Catch", "time": "2022.06 - 2022.07"},
            {"role": "Server", "company": "Maggiano's", "time": "2022.04 - 2022.07"},
            # ... (add all work history)
        ]
    }
    return jsonify(personal_info)

if __name__ == '__main__':
    app.run(debug=True)
