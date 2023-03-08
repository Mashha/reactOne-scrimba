import { useState } from "react";
import logo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default App;
