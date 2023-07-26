import { useParams, useNavigate } from "react-router-dom";
import { flatList } from "../data/logements.js";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import React, { useState } from "react";

import "../style/FlatDetails.css";

function FlatDetails() {
  let { id } = useParams();
  let navigate = useNavigate();
  const flat = flatList.find((flat) => flat.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipment, setShowEquipment] = useState(false);

  if (!flat) {
    navigate("/not-found", { replace: true });
    return null;
  }

  const goToNextFlat = () => {
    let nextFlatIndex =
      (flatList.findIndex((flat) => flat.id === id) + 1) % flatList.length;
    navigate("/flat/" + flatList[nextFlatIndex].id);
  };

  const goToPreviousFlat = () => {
    let prevFlatIndex =
      (flatList.findIndex((flat) => flat.id === id) - 1 + flatList.length) %
      flatList.length;
    navigate("/flat/" + flatList[prevFlatIndex].id);
  };

  return (
    <div className="flatDetails">
      <div className="imgContainer">
        <MdKeyboardArrowLeft
          onClick={goToPreviousFlat}
          className="arrowNav arrowNavLeft"
        />
        <img src={flat.cover} alt={flat.title} className="flatImg" />

        <MdKeyboardArrowRight
          onClick={goToNextFlat}
          className="arrowNav arrowNavRight"
        />
      </div>
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
          <div className="text">
            {showDescription && <p>{flat.description}</p>}
          </div>
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
          <div className="text">
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
