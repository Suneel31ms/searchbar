import List from "./Components/List";

import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <List inputprops={inputText} />
    </div>
  );
}

export default App;
