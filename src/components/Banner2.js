import cover from "../assets/COVER2.jpg";
import "../style/Banner.css";

function Banner2() {
  return (
    <div className="container">
      <div className="banner">
        <img src={cover} alt="Kasa - Location appartements" />
      </div>
    </div>
  );
}

export default Banner2;
