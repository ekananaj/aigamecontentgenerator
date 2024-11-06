import React, { useState } from 'react';

function DialogueGenerator() {
  const [prompt, setPrompt] = useState("");
  const [dialogue, setDialogue] = useState("");

  const generateDialogue = () => {
    fetch("http://localhost:8000/api/dialogue/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    })
    .then(response => response.json())
    .then(data => setDialogue(data.dialogue))
    .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Generate Character Dialogue</h2>
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button onClick={generateDialogue}>Generate Dialogue</button>
      <p>Generated Dialogue: {dialogue}</p>
    </div>
  );
}

export default DialogueGenerator;
