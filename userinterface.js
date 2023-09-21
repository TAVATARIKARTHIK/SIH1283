const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Display user message
    displayMessage(userMessage, "user");

    // Simulate a response from the chatbot (replace with actual logic)
    const botMessage = "I'm sorry, I don't have that information right now.";
    setTimeout(() => {
        displayMessage(botMessage, "bot");
    }, 1000);

    // Clear the user input
    userInput.value = "";
});

function displayMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender === "user" ? "user" : "bot");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
