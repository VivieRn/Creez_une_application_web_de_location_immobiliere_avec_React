import { useParams } from "react-router-dom";
import { flatList } from "../data/logements.js";
import { FaStar, FaRegStar } from "react-icons/fa";

import "../style/FlatDetails.css";

function FlatDetails() {
  let { id } = useParams();
  const flat = flatList.find((flat) => flat.id === id);

  return (
    <div className="flatDetails">
      <img src={flat.cover} alt={flat.title} className="flatImg" />
      <div className="flatContainer">
        <div className="boxDetails">
          <h1>{flat.title}</h1>
          <p>{flat.location}</p>
          <ul className="tagsList">
            {flat.tags.map((tag, index) => (
              <li key={index} className="tags">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="boxDetails2">
          <div className="host">
            <h2> {flat.host.name}</h2>
            <img src={flat.host.picture} alt={flat.host.name} />
          </div>
          <div className="stars">
            <Rating value={flat.rating} />
          </div>
        </div>
      </div>
      <div className="boxDetails3">
        <div>
          <h3>Description :</h3>
          <p>{flat.description}</p>
        </div>
        <div>
          <h3>Equipment :</h3>
          <ul>
            {flat.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Star({ filled }) {
  return filled ? <FaStar /> : <FaRegStar className="greyStar" />;
}

function Rating({ value }) {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  );
}

export { FlatDetails };
