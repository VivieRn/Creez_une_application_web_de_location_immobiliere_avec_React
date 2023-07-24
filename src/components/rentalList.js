import React from "react";
import { Link } from "react-router-dom";
import { flatList } from "../data/logements.js";

import "../style/rentalList.css";

function RentalList() {
  return (
    <div className="RentalList">
      <ul className="flat-list">
        {flatList.map((flat) => (
          <Link to={`/flat/${flat.id}`} key={flat.id}>
            <li className="flat-item">
              <img src={flat.cover} alt={flat.title} />
              <h2>{flat.title}</h2>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export { RentalList };
