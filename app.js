async function send() {
    const input = document.getElementById("input");
    const chat = document.getElementById("chat");

    chat.innerHTML += `<p><b>You:</b> ${input.value}</p>`;

    const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input.value })
    });

    const data = await res.json();
    chat.innerHTML += `<p><b>Medi:</b> ${data.reply}</p>`;
    input.value = "";
}

function voice() {
    const recognition = new webkitSpeechRecognition();
    recognition.onresult = e => {
        document.getElementById("input").value = e.results[0][0].transcript;
    };
    recognition.start();
}

async function upload(fileInput) {
    const formData = new FormData();
    formData.append("report", fileInput.files[0]);

    const res = await fetch("/upload", {
        method: "POST",
        body: formData
    });

    const data = await res.json();
    document.getElementById("chat").innerHTML += `<p><b>Medi:</b> ${data.summary}</p>`;
}

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("uploads/public"));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
