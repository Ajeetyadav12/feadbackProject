import React, { useState } from "react";
import AudioUpload from "./components/AudioUpload";
import AudioPlayer from "./components/AudioPlayer";
import FeedbackDisplay from "./components/FeedbackDisplay";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleProcess = async () => {
    const formData = new FormData();
    formData.append("audio", file);

    const res = await axios.post(
      "https://feadbackproject.onrender.com/api/analyze-call",
      formData
    );
    setFeedback(res.data);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🎧 AI Feedback Form</h2>
      <AudioUpload onChange={handleFileChange} />
      {preview && <AudioPlayer src={preview} />}
      <button className="btn btn-primary my-3" onClick={handleProcess}>
        Process
      </button>
      {feedback && <FeedbackDisplay feedback={feedback} />}
    </div>
  );
}

export default App;
