"""Health calculations and input validation (moved from the JavaScript frontend)."""

# Activity factor: free-time activity x work activity
ACTIVITY_FACTORS = {
    "not-free-active":   {"not-work-active": 1.3, "bit-work-active": 1.5, "hc-work-active": 1.7},
    "bit-free-active":   {"not-work-active": 1.5, "bit-work-active": 1.7, "hc-work-active": 1.9},
    "daily-free-active": {"not-work-active": 1.7, "bit-work-active": 1.9, "hc-work-active": 2.1},
    "hc-free-active":    {"not-work-active": 2.0, "bit-work-active": 2.2, "hc-work-active": 2.4},
}

# Basal energy need: kcal = slope * weight + constant
BASE_ENERGY = {
    "male":   {"young": (15.3, 679), "middleage": (11.6, 879), "old": (13.5, 487)},
    "female": {"young": (14.7, 496), "middleage": (8.7, 829), "old": (10.5, 596)},
}

# (upper limit, category id); the ids match the table row ids in index.html
BMI_CATEGORIES = [
    (15, "sick-underweight"),
    (18, "significant-underweight"),
    (19, "slight-underweight"),
    (25, "normal-weight"),
    (30, "slight-overweight"),
    (35, "significant-overweight"),
    (40, "bad-overweight"),
]

# (slight health hazard from, significant health hazard from), in cm
WAIST_LIMITS = {"male": (94, 102), "female": (80, 88)}

NUMBER_LIMITS = {"height_cm": (100, 250), "weight_kg": (30, 300), "waist_cm": (40, 200)}

CHOICES = {
    "gender": set(BASE_ENERGY),
    "age_group": {"young", "middleage", "old"},
    "free_activity": set(ACTIVITY_FACTORS),
    "work_activity": {"not-work-active", "bit-work-active", "hc-work-active"},
}


def validate_input(payload):
    """Return (clean_data, errors). Errors is empty when the input is valid."""
    clean, errors = {}, {}

    for field, (low, high) in NUMBER_LIMITS.items():
        try:
            value = float(payload.get(field))
        except (TypeError, ValueError):
            errors[field] = "Pakollinen numero"
            continue
        if not low <= value <= high:
            errors[field] = f"Arvon pitää olla välillä {low}–{high}"
        else:
            clean[field] = value

    for field, options in CHOICES.items():
        value = payload.get(field)
        if value not in options:
            errors[field] = "Virheellinen valinta"
        else:
            clean[field] = value

    return clean, errors


def calculate_bmi(height_cm, weight_kg):
    height_m = height_cm / 100
    return round(1.3 * weight_kg / height_m ** 2.5, 2)


def bmi_category(bmi):
    for limit, category in BMI_CATEGORIES:
        if bmi < limit:
            return category
    return "sick-overweight"


def waist_category(waist_cm, gender):
    slight, significant = WAIST_LIMITS[gender]
    if waist_cm < slight:
        return "normal-waist"
    if waist_cm < significant:
        return "slight-health-hazar"
    return "significant-health-hazar"


def daily_energy_kcal(weight_kg, gender, age_group, free_activity, work_activity):
    slope, constant = BASE_ENERGY[gender][age_group]
    factor = ACTIVITY_FACTORS[free_activity][work_activity]
    return round((slope * weight_kg + constant) * factor)


def assess(data):
    """Build the full health assessment from validated input."""
    bmi = calculate_bmi(data["height_cm"], data["weight_kg"])
    kcal = daily_energy_kcal(
        data["weight_kg"], data["gender"], data["age_group"],
        data["free_activity"], data["work_activity"],
    )
    return {
        "bmi": bmi,
        "bmi_category": bmi_category(bmi),
        "waist_category": waist_category(data["waist_cm"], data["gender"]),
        "kcal": kcal,
        "kj": round(kcal * 4.2),
        "carbs_g": round(kcal * 0.40 / 4),
        "protein_min_g": round(kcal * 0.20 / 4),
        "protein_max_g": round(kcal * 0.40 / 4),
        "fat_g": round(kcal * 0.20 / 9),
    }