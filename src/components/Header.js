import logo from "../assets/LOGO.svg";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa - Location appartements" />
      <nav>
        <ul className="nav-links">
          <li className="links">
            <a href="/">Accueil</a>
          </li>
          <li className="links">
            <a href="/a_propos">A propos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
