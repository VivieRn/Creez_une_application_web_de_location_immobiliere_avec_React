import cover from "../assets/COVER.jpg";
import "../style/Banner.css";

function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <img src={cover} alt="Kasa - Location appartements" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;
