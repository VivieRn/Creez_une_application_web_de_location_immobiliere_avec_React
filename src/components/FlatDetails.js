import { useParams, useNavigate } from "react-router-dom";
import { flatList } from "../data/logements.js";
import React, { useEffect, useState } from "react";
import Gallery from "./Gallery";
import FlatHeader from "./FlatHeader.js";
import HostAndRating from "./HostAndRating.js";
import InformationBox from "./InformationBox.js";

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
        {/* FlatHeader Component */}
        <FlatHeader
          title={flat.title}
          location={flat.location}
          tags={flat.tags}
        />

        {/* HostAndRating Component */}
        <HostAndRating host={flat.host} rating={flat.rating} />
      </div>

      <div className="boxDetails3">
        {/* InformationBox for Description */}
        <InformationBox
          title="Description"
          content={
            <div className={`text ${showDescription ? "open" : ""}`}>
              <p>{flat.description}</p>
            </div>
          }
          isOpen={showDescription}
          toggleOpen={() => setShowDescription(!showDescription)}
        />

        {/* InformationBox for Equipment */}
        <InformationBox
          title="Equipment"
          content={flat.equipments.map((equipment, index) => (
            <React.Fragment key={index}>
              <p>{equipment}</p>
            </React.Fragment>
          ))}
          isOpen={showEquipment}
          toggleOpen={() => setShowEquipment(!showEquipment)}
          contentClassName={`equipements ${showEquipment ? "open" : ""}`}
        />
      </div>
    </div>
  );
}

export { FlatDetails };
