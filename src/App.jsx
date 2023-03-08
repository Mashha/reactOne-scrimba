import logo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="" />
        </nav>
      </header>

      <h1>Reasons why i'm excited to learn react</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>

      <footer>
        <small> "© 2023 Orel development. All rights reserved."</small>
      </footer>
    </div>
  );
}

export default App;
