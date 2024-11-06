import React, { useState } from 'react';

function ContentGenerator() {
  const [content, setContent] = useState("");

  const generateContent = () => {
    fetch("http://localhost:8000/api/content/generate")
      .then(response => response.json())
      .then(data => setContent(data.content))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div>
      <h2>Generate Game Content</h2>
      <button onClick={generateContent}>Generate Item</button>
      <p>Generated Content: {content}</p>
    </div>
  );
}

export default ContentGenerator;
