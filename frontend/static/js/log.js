document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const emailInput = form.querySelector('input[type="email"]');
    const inputs = form.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]');

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.endsWith(".com");
    }

    form.addEventListener("input", function() {
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.classList.remove("valid");
                input.style.borderColor = "red";
            } else {
                input.classList.add("valid");
                input.style.borderColor = "green";
            }
        });

        if (validateEmail(emailInput.value)) {
            emailInput.style.borderColor = "green";
        } else {
            emailInput.style.borderColor = "red";
        }
    });
});