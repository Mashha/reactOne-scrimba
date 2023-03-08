import logo from "../assets/react.svg";

export default function Header() {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="left">
          <img src={logo} alt="logo" />
          <h1>ReactFacts</h1>
          </div>
          <div className="right">
            <h3>React Course - Project 1</h3>
          </div>
        </nav>
      </header>
    </>
  );
}
