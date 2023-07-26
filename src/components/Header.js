import { Link } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Kasa - Location appartements" />
      <nav>
        <ul className="nav-links">
          <li className="links">
            <Link to="/">Accueil</Link>
          </li>
          <li className="links">
            <Link to="/a-propos">A propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
