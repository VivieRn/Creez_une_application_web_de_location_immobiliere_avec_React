import { useParams, useNavigate } from "react-router-dom";
import { flatList } from "../data/logements.js";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import Rating from "./Rating";
import CollapsibleBox from "./CollapsibleBox";

import "../style/FlatDetails.scss";

function FlatDetails() {
  let { id } = useParams();
  let navigate = useNavigate();
  const flat = flatList.find((flat) => flat.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipment, setShowEquipment] = useState(false);

  useEffect(() => {
    if (!flat) {
      navigate("/not-found", { replace: true });
    }
  }, [flat, navigate]);

  if (!flat) return null;

  return (
    <div className="flatDetails">
      <Gallery pictures={flat.pictures} title={flat.title} />
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
            <h2>{flat.host.name}</h2>
            <img src={flat.host.picture} alt={flat.host.name} />
          </div>
          <div className="stars">
            <Rating value={flat.rating} />
          </div>
        </div>
      </div>
      <div className="boxDetails3">
        <CollapsibleBox
          title={<h3 className="Title">Description</h3>}
          content={
            <div className={`text ${showDescription ? "open" : ""}`}>
              <p>{flat.description}</p>
            </div>
          }
          isOpen={showDescription}
          toggleOpen={() => setShowDescription(!showDescription)}
          className="button"
        />
        <CollapsibleBox
          title={<h3 className="Title">Equipment</h3>}
          content={flat.equipments.map((equipment, index) => (
            <React.Fragment key={index}>
              <p>{equipment}</p>
            </React.Fragment>
          ))}
          isOpen={showEquipment}
          toggleOpen={() => setShowEquipment(!showEquipment)}
          className="button"
          contentClassName={`equipements ${showEquipment ? "open" : ""}`}
        />
      </div>
    </div>
  );
}

export { FlatDetails };
