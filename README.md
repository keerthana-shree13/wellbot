🩺 WellBot – Medical Assistance Chatbot

WellBot is a medical-only AI chatbot built to provide safe, conservative, and doctor-aligned healthcare guidance through a modern web interface.
It helps users understand common symptoms, upload medical reports, and receive general medical advice while clearly encouraging professional consultation.

🚀 Key Features

🩺 Medical-only responses (non-medical queries are restricted)

💬 Real-time chat interface

📁 Upload images, reports, and videos (stored per session)

🧠 Rule-based medical guidance (medicalRules.js)

🔐 Login system (email & password validation)

🧾 Chat history support (prototype)

🚫 Does NOT replace certified doctors

🛠️ Tech Stack
Frontend

HTML

CSS

JavaScript (Vanilla)

Backend

Node.js

Express.js

Multer (file uploads)

SQLite (local database)

Deployment

GitHub

Vercel (frontend-ready)

Local Node server (backend)

📂 Project Structure
wellbot/
│
├── dataconnect/
│   ├── schema/
│   └── dataconnect.yaml
│
├── public/
│   ├── app.js
│   ├── firebase.js
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   ├── medicalRules.js
│   ├── docbot.png
│   └── profile.jpeg
│
├── uploads/
│   ├── files/
│   ├── images/
│   └── videos/
│
├── database.db
├── server.js
├── package.json
├── package-lock.json
├── vercel.json
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/keerthana-shree13/wellbot.git
cd wellbot

2️⃣ Install dependencies
npm install

3️⃣ Run the backend server
npm start


App will be available at:



🔐 Login Rules

Only valid Gmail format allowed:

username@gmail.com


Password must be minimum 6 characters

Invalid credentials will show an alert message.

🧠 Medical Safety Rules

Only healthcare-related questions are allowed

Non-medical queries return:

“I am designed only for medical assistance.”

All advice is general guidance only

Users are always encouraged to consult a licensed doctor

⚠️ Medical Disclaimer

WellBot does not diagnose diseases and does not replace doctors.
It is intended for educational and informational purposes only.

🎯 Project Motivation

Many people rely on unreliable online medical information.
WellBot aims to:

Reduce medical misinformation

Improve access to basic healthcare guidance

Encourage timely professional consultation

🔮 Future Enhancements

🔊 Voice output

🌐 Multi-language support 

🧾 Medical report analysis

📊 Doctor dashboard
