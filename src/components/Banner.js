import cover from "../assets/COVER.jpg";
import "../style/Banner.css";

//Banniere de la page d'accueil
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
