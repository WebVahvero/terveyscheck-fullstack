import pytest

from app import create_app

VALID_INPUT = {
    "height_cm": 180,
    "weight_kg": 75,
    "waist_cm": 85,
    "gender": "male",
    "age_group": "young",
    "free_activity": "bit-free-active",
    "work_activity": "not-work-active",
}


@pytest.fixture
def client():
    app = create_app("sqlite://")  # in-memory database, a fresh one for every test
    app.config["TESTING"] = True
    return app.test_client()


def test_create_assessment(client):
    response = client.post("/api/assessments", json=VALID_INPUT)
    assert response.status_code == 201
    assert response.get_json()["bmi_category"] == "normal-weight"


def test_invalid_input_returns_400(client):
    response = client.post("/api/assessments", json={**VALID_INPUT, "height_cm": 20})
    assert response.status_code == 400
    assert "height_cm" in response.get_json()["errors"]


def test_saved_assessment_is_listed(client):
    client.post("/api/assessments", json=VALID_INPUT)
    response = client.get("/api/assessments")
    assert len(response.get_json()) == 1