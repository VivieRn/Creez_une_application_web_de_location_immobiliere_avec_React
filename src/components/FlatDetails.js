import { useParams } from "react-router-dom";
import { flatList } from "../data/logements.js";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";

import "../style/FlatDetails.css";

function FlatDetails() {
  let { id } = useParams();
  const flat = flatList.find((flat) => flat.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipment, setShowEquipment] = useState(false);

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
        <div
          onClick={() => setShowDescription(!showDescription)}
          className="button"
        >
          <div className="Title">
            <h3> Description</h3>
            <MdKeyboardArrowUp
              className="Arrow"
              style={{ transform: showDescription ? "rotate(180deg)" : "none" }}
            />
          </div>
          {showDescription && <p>{flat.description}</p>}
        </div>
        <div
          onClick={() => setShowEquipment(!showEquipment)}
          className="button"
        >
          <div className="Title">
            <h3> Equipment</h3>
            <MdKeyboardArrowUp
              className="Arrow"
              style={{ transform: showEquipment ? "rotate(180deg)" : "none" }}
            />
          </div>
          {showEquipment && (
            <ul>
              {flat.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
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
