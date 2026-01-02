const express = require("express");
const multer = require("multer");
const cors = require("cors");
const medicalRules = require("./medicalRules");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let chatHistory = [];

const upload = multer({ dest: "uploads/" });

app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();

    if (!userMessage.match(/pain|fever|report|medicine|health|symptom|doctor/)) {
        return res.json({ reply: "I am designed only for medical assistance." });
    }

    const reply = `
🩺 Based on general medical guidance:
${userMessage.includes("fever") ?
            "Maintain hydration, rest well, and monitor temperature. Seek medical care if fever persists beyond 2 days." :
            "Please share more symptoms for better guidance."}

⚠️ This advice is aligned with standard medical practices but does not replace a doctor consultation.
`;

    chatHistory.push({ user: userMessage, bot: reply });
    res.json({ reply });
});

app.post("/upload", upload.single("report"), (req, res) => {
    res.json({
        summary:
            "📄 Report uploaded successfully. This appears to be a routine medical report. Please consult your doctor for final interpretation."
    });
});

app.get("/history", (req, res) => {
    res.json(chatHistory);
});

app.listen(3000, () => {
    console.log("Healthcare chatbot running on http://localhost:3000");
});
