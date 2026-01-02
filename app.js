document.addEventListener("DOMContentLoaded", () => {
    const chat = document.getElementById("chat");
    const input = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    function addMessage(text, sender) {
        const msg = document.createElement("p");
        msg.textContent = text;
        msg.className = sender;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
    }

    function botReply(userText) {
        let reply =
            "Hey there! I'm Medic, your virtual health assistant. How can I help you today?";

        if (userText.toLowerCase().includes("fever")) {
            reply =
                "Fever can indicate infection or inflammation. Stay hydrated and consult a doctor if it persists.";
        } else if (userText.toLowerCase().includes("headache")) {
            reply =
                "Headaches may occur due to stress, dehydration, or illness. Rest and medical advice are recommended.";
        }

        setTimeout(() => {
            addMessage(reply, "bot");
        }, 600);
    }

    sendBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, "user");
        input.value = "";
        botReply(text);
    });

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendBtn.click();
    });
});

