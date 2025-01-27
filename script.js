const chatLog = document.getElementById("chat-log");

const responses = {
    "mistä näen turvallisuuskävelyn?": "Näet turvallisuuskävelyn tästä: <a href='https://www.youtube.com/watch?v=t0n2ug7IU6M' target='_blank'>https://www.youtube.com/watch?v=t0n2ug7IU6M</a>",
    "missä on ensiapupiste?": "Ensiapupiste löytyy pääsisäänkäynnin läheltä, ensimmäisestä kerroksesta.",
    "miten elvytän?": "30 painallusta ja 2 puhallusta vuorotellen. Katso tästä video: <a href='https://www.youtube.com/watch?v=3dsqxuG9lEk' target='_blank'>https://www.youtube.com/watch?v=3dsqxuG9lEk</a>",
    "mistä näen hätäuloskäynnit?": "Hätäuloskäynnit löydät Tuudon karttaosiosta valitsemalla kerroksen!",
};

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.innerHTML = message; // Allow HTML content (for clickable links)
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function handleUserInput(userText) {
    // Normalize the user input
    const sanitizedText = userText.trim().toLowerCase();

    displayMessage(userText, "user");

    setTimeout(() => {
        if (responses[sanitizedText]) {
            displayMessage(responses[sanitizedText], "bot");
        } else {
            displayMessage("Pahoittelen, en osaa vastata tuohon kysymykseen.", "bot");
        }
    }, 1000);
}

document.querySelectorAll(".question-btn").forEach(button => {
    button.addEventListener("click", () => {
        handleUserInput(button.textContent);
    });
});
