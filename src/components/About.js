import "../style/aPropos.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";

function APropos() {
  const [showDescription, setShowDescription] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);

  return (
    <div className="container-aPropos">
      <div
        onClick={() => setShowDescription(!showDescription)}
        className="btn-aPropos"
      >
        <div className="Title">
          <h1>Fiabilité</h1>
          <MdKeyboardArrowUp
            className="Arrow"
            style={{ transform: showDescription ? "rotate(180deg)" : "none" }}
          />
        </div>
        <div className="text-aPropos">
          {showDescription && (
            <p>
              Lorem ipsum dolor sit amet. Quo consequatur odit et voluptas saepe
              qui laborum dolorem? Est culpa doloribus a galisum dolore ab
              soluta maiores qui laudantium dicta. Sed illo nihil vel dolores
              quas id porro consequuntur. Et voluptatem quisquam est eius iusto
              non galisum voluptatum ut porro eveniet et nesciunt possimus non
              quidem tempora. Ex placeat provident ut doloremque error et
              mollitia laudantium. Cum quidem debitis ut facilis molestiae est
              ducimus ipsum et nobis laborum. Est nihil aspernatur et dolorum
              ducimus At adipisci beatae eum asperiores dolores aut vitae
              provident sit amet laborum ea necessitatibus unde. Qui rerum nobis
              et odio rerum ea aliquid quia qui vitae facere nam harum
              exercitationem. Eum dolorem quod qui deserunt consequuntur ea
              dolor nihil 33 voluptates consequatur.
            </p>
          )}
        </div>
      </div>
      <div
        onClick={() => setShowDescription2(!showDescription2)}
        className="btn-aPropos"
      >
        <div className="Title">
          <h1>Respect</h1>
          <MdKeyboardArrowUp
            className="Arrow"
            style={{ transform: showDescription2 ? "rotate(180deg)" : "none" }}
          />
        </div>
        <div className="text-aPropos">
          {showDescription2 && (
            <p>
              Lorem ipsum dolor sit amet. Quo consequatur odit et voluptas saepe
              qui laborum dolorem? Est culpa doloribus a galisum dolore ab
              soluta maiores qui laudantium dicta. Sed illo nihil vel dolores
              quas id porro consequuntur. Et voluptatem quisquam est eius iusto
              non galisum voluptatum ut porro eveniet et nesciunt possimus non
              quidem tempora. Ex placeat provident ut doloremque error et
              mollitia laudantium. Cum quidem debitis ut facilis molestiae est
              ducimus ipsum et nobis laborum. Est nihil aspernatur et dolorum
              ducimus At adipisci beatae eum asperiores dolores aut vitae
              provident sit amet laborum ea necessitatibus unde. Qui rerum nobis
              et odio rerum ea aliquid quia qui vitae facere nam harum
              exercitationem. Eum dolorem quod qui deserunt consequuntur ea
              dolor nihil 33 voluptates consequatur.
            </p>
          )}
        </div>
      </div>
      <div
        onClick={() => setShowDescription3(!showDescription3)}
        className="btn-aPropos"
      >
        <div className="Title">
          <h1>Service</h1>
          <MdKeyboardArrowUp
            className="Arrow"
            style={{ transform: showDescription3 ? "rotate(180deg)" : "none" }}
          />
        </div>
        <div className="text-aPropos">
          {showDescription3 && (
            <p>
              Lorem ipsum dolor sit amet. Quo consequatur odit et voluptas saepe
              qui laborum dolorem? Est culpa doloribus a galisum dolore ab
              soluta maiores qui laudantium dicta. Sed illo nihil vel dolores
              quas id porro consequuntur. Et voluptatem quisquam est eius iusto
              non galisum voluptatum ut porro eveniet et nesciunt possimus non
              quidem tempora. Ex placeat provident ut doloremque error et
              mollitia laudantium. Cum quidem debitis ut facilis molestiae est
              ducimus ipsum et nobis laborum. Est nihil aspernatur et dolorum
              ducimus At adipisci beatae eum asperiores dolores aut vitae
              provident sit amet laborum ea necessitatibus unde. Qui rerum nobis
              et odio rerum ea aliquid quia qui vitae facere nam harum
              exercitationem. Eum dolorem quod qui deserunt consequuntur ea
              dolor nihil 33 voluptates consequatur.
            </p>
          )}
        </div>
      </div>
      <div
        onClick={() => setShowDescription4(!showDescription4)}
        className="btn-aPropos"
      >
        <div className="Title">
          <h1>Sécurité</h1>
          <MdKeyboardArrowUp
            className="Arrow"
            style={{ transform: showDescription4 ? "rotate(180deg)" : "none" }}
          />
        </div>
        <div className="text-aPropos">
          {showDescription4 && (
            <p>
              Lorem ipsum dolor sit amet. Quo consequatur odit et voluptas saepe
              qui laborum dolorem? Est culpa doloribus a galisum dolore ab
              soluta maiores qui laudantium dicta. Sed illo nihil vel dolores
              quas id porro consequuntur. Et voluptatem quisquam est eius iusto
              non galisum voluptatum ut porro eveniet et nesciunt possimus non
              quidem tempora. Ex placeat provident ut doloremque error et
              mollitia laudantium. Cum quidem debitis ut facilis molestiae est
              ducimus ipsum et nobis laborum. Est nihil aspernatur et dolorum
              ducimus At adipisci beatae eum asperiores dolores aut vitae
              provident sit amet laborum ea necessitatibus unde. Qui rerum nobis
              et odio rerum ea aliquid quia qui vitae facere nam harum
              exercitationem. Eum dolorem quod qui deserunt consequuntur ea
              dolor nihil 33 voluptates consequatur.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default APropos;
