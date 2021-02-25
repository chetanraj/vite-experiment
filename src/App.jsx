import React, { useState } from "react";
import "./App.css";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

const renderer = createRenderer();

function App() {
  const [count, setCount] = useState(0);

  return (
    <RendererProvider renderer={renderer}>
      <div className="App">
        <header className="App-header">
          <p>
            <button onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </RendererProvider>
  );
}

export default App;
