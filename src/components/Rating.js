import React from "react";
import Star from "./Star";

function Rating({ value }) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  );
}

export default Rating;
