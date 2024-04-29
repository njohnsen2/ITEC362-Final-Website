document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-section");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        const errors = [];

        if (nameInput.value.length < 3) {
            errors.push("Username must be at least 3 characters long.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            errors.push("Please enter a valid email address.")
        }

        if (messageInput.value.length < 10) {
            errors.push("Message must be at least 10 characters long.")
        }

        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n"));
        }
    })
})