import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ filled }) {
  return filled ? <FaStar /> : <FaStar className="greyStar" />;
}

export default Star;
