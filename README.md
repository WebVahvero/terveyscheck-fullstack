# TerveysCheck

A full stack web app that gives a health assessment from height, weight, waist circumference, age group and activity level: body mass index, waist circumference category, daily energy need and macronutrients.

This is a rebuild of my earlier JavaScript-only version. The calculations now run in a Flask REST API, results are stored in PostgreSQL, and the app runs in Docker containers with automated tests in GitHub Actions.

> The results are indicative and not medical advice.

![Screenshot](screenshot.png)

## Tech stack

- **Back end:** Python, Flask, Flask-SQLAlchemy
- **Database:** PostgreSQL (SQLite for local development and tests)
- **Front end:** HTML5, CSS3, JavaScript (fetch API)
- **DevOps:** Docker, Docker Compose, GitHub Actions (pytest + Docker build)

## Run with Docker

```bash
cp .env.example .env          # then set your own password in .env
docker compose up --build
```

Open http://localhost:5000

## Run locally without Docker

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
flask --app app run --debug
```

Without `DATABASE_URL` the app uses a local SQLite file.

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check |
| POST | `/api/assessments` | Validates the input, calculates the assessment and saves it |
| GET | `/api/assessments` | Lists the 20 latest assessments |

Example request:

```json
POST /api/assessments
{
  "height_cm": 180,
  "weight_kg": 75,
  "waist_cm": 85,
  "gender": "male",
  "age_group": "young",
  "free_activity": "bit-free-active",
  "work_activity": "not-work-active"
}
```

Invalid input returns `400` with an error message per field.

## Tests

```bash
pytest
```

Tests cover the calculations, input validation and the API endpoints. They run automatically on every push.

## Data protection

- Only anonymous measurements are stored. The name is used in the browser for the greeting and is never sent to the server.
- All input is validated on the server.
- User input is shown with `textContent`, not `innerHTML`, so it cannot run as code.
- The database password comes from an environment variable and is not committed to the repository.