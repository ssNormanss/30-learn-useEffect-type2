import { useState } from "react";
import "./styles.css";
import Content from "./Content";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show || <Content />}
    </div>
  );
}
