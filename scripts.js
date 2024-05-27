function validateName() {
    const nameInput = document.getElementById('nameInput').value;
    const fullName = "Pippo";

    if (nameInput === fullName) {
        window.location.href = "letter.html";
    } else {
        alert("Sorry, Incorrect Hiya");
    }
}
