// Test connection
console.log("JavaScript connected successfully!");

// =============================
// DARK MODE
// =============================
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// =============================
// SHOW / HIDE SKILLS
// =============================
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsSection");

toggleSkills.addEventListener("click", function () {
    skillsSection.classList.toggle("hidden");
});

// =============================
// FORM VALIDATION
// =============================
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
    }
});
