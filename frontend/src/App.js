import React from 'react';
import ContentGenerator from './components/ContentGenerator';
import DialogueGenerator from './components/DialogueGenerator';

function App() {
  return (
    <div>
      <h1>AI Game Content Generator</h1>
      <ContentGenerator />
      <DialogueGenerator />
    </div>
  );
}

export default App;
