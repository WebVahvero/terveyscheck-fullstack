const BMI_COMMENTS = {
    "sick-underweight": "sairaalloisen alipainoinen",
    "significant-underweight": "merkittävästi alipainoinen",
    "slight-underweight": "lievästi alipainoinen",
    "normal-weight": "normaalipainoinen",
    "slight-overweight": "lievästi ylipainoinen",
    "significant-overweight": "merkittävästi ylipainoinen",
    "bad-overweight": "vaikeasti ylipainoinen",
    "sick-overweight": "sairaalloisen ylipainoinen",
};

const WAIST_COMMENTS = {
    "normal-waist": "on tavoitearvossa",
    "slight-health-hazar": "aiheuttaa lievää terveyshaittaa",
    "significant-health-hazar": "aiheuttaa huomattavaa terveyshaittaa",
};

const HIGHLIGHT = "rgba(34, 209, 238, .5)";

async function calculateForm() {
    const name = document.getElementById("name").value.trim();
    const text = document.getElementById("text");

    const payload = {
        height_cm: document.getElementById("height").value,
        weight_kg: document.getElementById("weight").value,
        waist_cm: document.getElementById("waist").value,
        gender: document.getElementById("gender").value,
        age_group: document.getElementById("age").value,
        free_activity: document.getElementById("free-activity").value,
        work_activity: document.getElementById("work-activity").value,
    };

    let response;
    try {
        response = await fetch("/api/assessments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
    } catch (error) {
        text.textContent = "Palvelimeen ei saatu yhteyttä. Yritä myöhemmin uudelleen.";
        return;
    }

    const result = await response.json();
    if (!response.ok) {
        text.textContent = "Tarkista arvot: " + Object.values(result.errors).join(", ");
        return;
    }

    // Clear old highlights before setting new ones (fixes the known bug in the README)
    document.querySelectorAll("tr, th, td").forEach((el) => (el.style.backgroundColor = ""));
    document.getElementById(result.bmi_category).style.backgroundColor = HIGHLIGHT;
    document.getElementById(result.waist_category).style.backgroundColor = HIGHLIGHT;

    // textContent (not innerHTML) so user input can never run as HTML or script
    const greeting = name ? name + ", sinun" : "Sinun";
    text.textContent =
        `${greeting} painoindeksisi on ${result.bmi} ja olet ${BMI_COMMENTS[result.bmi_category]}. ` +
        `Vyötärönympäryksesi ${WAIST_COMMENTS[result.waist_category]}.`;

    document.getElementById("carbohydrates").textContent = `${result.carbs_g} grammaa per päivä`;
    document.getElementById("protein").textContent = `${result.protein_min_g}–${result.protein_max_g} grammaa per päivä`;
    document.getElementById("fat").textContent = `${result.fat_g} grammaa per päivä`;
    document.getElementById("kcal").textContent = `${result.kcal} kcal`;
    document.getElementById("kj").textContent = `${result.kj} kJ`;

    showVitamins(payload.gender);
}

function showVitamins(gender) {
    const male = gender === "male";
    const values = {
        "a-vitamin": male ? "900 µg" : "700 µg",
        "b1-vitamin": male ? "1,4 mg" : "1,1 mg",
        "b2-vitamin": male ? "1,7 mg" : "1,1 mg",
        "b3-vitamin": male ? "19 mg" : "15 mg",
        "b6-vitamin": male ? "1,6 mg" : "1,2 mg",
        "folaatti": "300 µg",
        "b12-vitamin": "2 µg",
        "b5-vitamin": "4–7 mg",
        "h-vitamin": "30–100 µg",
        "c-vitamin": "75 mg",
        "d-vitamin": "10 µg",
        "e-vitamin": male ? "10 mg" : "8 mg",
        "k-vitamin": "Muodostuu elimistössä",
    };
    for (const [id, value] of Object.entries(values)) {
        document.getElementById(id).textContent = value;
    }
}