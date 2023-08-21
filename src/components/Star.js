import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

function Star({ filled }) {
  return filled ? <FaStar /> : <FaRegStar className="greyStar" />;
}

export default Star;
