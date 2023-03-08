import logo from "./assets/react.svg";
import "./App.css";

export function App() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="" />
        </nav>
      </header>
    </div>
  );
}

function MainComponent() {
  return (
    <div className="container">
      <h1>Reasons why i'm excited to learn react</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small> "© 2023 Orel development. All rights reserved."</small>
    </footer>
  );
}
