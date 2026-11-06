from health import bmi_category, calculate_bmi, validate_input, waist_category


def test_bmi_normal_weight():
    assert bmi_category(calculate_bmi(180, 75)) == "normal-weight"


def test_bmi_category_limits():
    assert bmi_category(14.99) == "sick-underweight"
    assert bmi_category(25.0) == "slight-overweight"
    assert bmi_category(40.0) == "sick-overweight"


def test_waist_limits_depend_on_gender():
    assert waist_category(90, "male") == "normal-waist"
    assert waist_category(90, "female") == "significant-health-hazar"


def test_missing_values_give_errors():
    _, errors = validate_input({})
    assert "height_cm" in errors
    assert "gender" in errors