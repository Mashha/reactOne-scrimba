import logo from "../assets/react.svg";

export default function Header() {
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
