import React, { useState } from "react";
import "./App.css";

import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";

const renderer = createRenderer();

//* Fela components
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <RendererProvider renderer={renderer}>
      <div className="App">
        <header className="App-header">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </header>
      </div>
    </RendererProvider>
  );
}

export default App;
