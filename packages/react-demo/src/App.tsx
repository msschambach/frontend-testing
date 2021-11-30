import { useState } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState(false);

  return (
    <div className="App">
      <article id="display">
        {displayText && (
          <p className="display-text">Welcome to wonderland!</p>
        )}
      </article>
      <button id="display-action-button" onClick={() => {
        setDisplayText(true);
      }}>Click me!</button>
    </div>
  )
}

export default App
