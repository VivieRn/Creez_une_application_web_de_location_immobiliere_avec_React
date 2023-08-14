import "../style/NotFound.scss";
import { Link } from "react-router-dom";

//Affiche une page d'erreur si l'URL renseigné est inexistant
function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner vers la page d'accueil.</Link>
    </div>
  );
}

export default NotFound;
