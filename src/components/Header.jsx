import logo from "../assets/react.svg";

export default function Header(props) {
  return (
    <>
      <header className={props.darkMode ? "dark" : ""}>
        <nav className="nav">
          <div className="left">
            <img src={logo} alt="logo" />
            <h1>ReactFacts</h1>
          </div>
          <div className="right toggler">
            <p className="toggler-light">light</p>
            <div className="toggler-slider" onClick={props.toggleDarkMode}>
              <div className="toggler-circle"></div>
            </div>
            <p className="toggler-dark">dark</p>
          </div>
        </nav>
      </header>
    </>
  );
}
