import logo2 from "../assets/LOGO2.svg";
import "../style/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={logo2} alt="Kasa - Location appartements" />
      <p>© 2023 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
