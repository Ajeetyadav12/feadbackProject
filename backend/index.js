// server/index.js

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS for frontend (React Vite)
app.use(cors());

// Set up multer for audio uploads
const upload = multer({ dest: 'uploads/' });

app.post('/api/analyze-call', upload.single('audio'), (req, res) => {
  //  File info: req.file
  //  This is where AI tools like Whisper will be used

  // For now, send mock feedback:
  res.json({
    scores: {
      greeting: 5,
      collectionUrgency: 14,
      rebuttalCustomerHandling: 13,
      callEtiquette: 10
    },
    overallFeedback: "Agent was confident and polite.",
    observation: "Customer raised issue, agent handled well.",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
