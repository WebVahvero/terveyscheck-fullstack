import os
from datetime import datetime, timezone

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

from health import assess, validate_input

db = SQLAlchemy()


class Assessment(db.Model):
    # Only anonymous measurements are stored: no name or other identifying data
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime(timezone=True), default=lambda: datetime.now(timezone.utc))
    height_cm = db.Column(db.Float, nullable=False)
    weight_kg = db.Column(db.Float, nullable=False)
    waist_cm = db.Column(db.Float, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    age_group = db.Column(db.String(20), nullable=False)
    free_activity = db.Column(db.String(30), nullable=False)
    work_activity = db.Column(db.String(30), nullable=False)
    bmi = db.Column(db.Float, nullable=False)
    bmi_category = db.Column(db.String(30), nullable=False)
    kcal = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "created_at": self.created_at.isoformat(),
            "bmi": self.bmi,
            "bmi_category": self.bmi_category,
            "kcal": self.kcal,
        }


def create_app(database_url=None):
    # static_url_path="" serves index.html, index.js and style.css from the site root
    app = Flask(__name__, static_folder="static", static_url_path="")
    app.config["SQLALCHEMY_DATABASE_URI"] = (
        database_url or os.environ.get("DATABASE_URL", "sqlite:///dev.db")
    )
    db.init_app(app)

    with app.app_context():
        db.create_all()

    @app.get("/")
    def index():
        return app.send_static_file("index.html")

    @app.get("/api/health")
    def health_check():
        return {"status": "ok"}

    @app.post("/api/assessments")
    def create_assessment():
        payload = request.get_json(silent=True) or {}
        data, errors = validate_input(payload)
        if errors:
            return jsonify({"errors": errors}), 400

        result = assess(data)
        db.session.add(Assessment(
            **data,
            bmi=result["bmi"],
            bmi_category=result["bmi_category"],
            kcal=result["kcal"],
        ))
        db.session.commit()
        return jsonify(result), 201

    @app.get("/api/assessments")
    def list_assessments():
        query = db.select(Assessment).order_by(Assessment.id.desc()).limit(20)
        rows = db.session.execute(query).scalars()
        return jsonify([row.to_dict() for row in rows])

    return app