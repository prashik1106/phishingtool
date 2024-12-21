document.getElementById("phishing-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const warningMessage = document.getElementById("warning-message");
    warningMessage.classList.remove("hidden");
    warningMessage.innerText =
        "Warning: This is a phishing simulation. Do not share your credentials!";
    alert("This is a phishing simulation! Stay cautious.");
});

