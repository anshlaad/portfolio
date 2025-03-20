document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmationMessage").innerText = "Message Sent Successfully!";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let confirmationMessage = document.getElementById("confirmationMessage");

    let isValid = true;

    // Clear previous errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    confirmationMessage.innerText = "";

    // Name Validation
    if (name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
        nameError.style.display = "block";
        isValid = false;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    }

    // Message Validation
    if (message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters.";
        messageError.style.display = "block";
        isValid = false;
    }

    // If valid, show confirmation
    if (isValid) {
        confirmationMessage.innerText = "Message Sent Successfully! 🚀";
        confirmationMessage.style.opacity = "1";

        // Reset form after 2 seconds
        setTimeout(() => {
            document.getElementById("contactForm").reset();
            confirmationMessage.style.opacity = "0";
        }, 2000);
    }
});

// Dynamic Typing Effect for Home Section
const texts = ["Ansh Laad", "a Web Developer", "a Designer", "an Innovator"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("changing-text").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();
