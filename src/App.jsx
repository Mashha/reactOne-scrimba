import logo from "./assets/react.svg";
import "./App.css";

export function App() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <nav className="nav">
          <img src={logo} alt="logo" />
          <ul className="ul-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
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
