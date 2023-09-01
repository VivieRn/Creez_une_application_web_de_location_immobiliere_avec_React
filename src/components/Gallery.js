import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import goToNextPicture from "./GoToNextPicture";
import goToPreviousPicture from "./GoToPreviousPicture";

function Gallery({ pictures, title }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  return (
    <div className="imgContainer">
      {pictures.length > !0 && (
        <MdKeyboardArrowLeft
          onClick={() =>
            setCurrentPictureIndex(
              goToPreviousPicture(currentPictureIndex, pictures.length)
            )
          }
          className="arrowNav arrowNavLeft"
        />
      )}
      <img
        src={pictures[currentPictureIndex]}
        alt={title}
        className="flatImg"
      />
      {pictures.length > 1 && (
        <div className="imageCounter">
          {currentPictureIndex + 1} / {pictures.length}
        </div>
      )}
      {pictures.length > !0 && (
        <MdKeyboardArrowRight
          onClick={() =>
            setCurrentPictureIndex(
              goToNextPicture(currentPictureIndex, pictures.length)
            )
          }
          className="arrowNav arrowNavRight"
        />
      )}
    </div>
  );
}

export default Gallery;
