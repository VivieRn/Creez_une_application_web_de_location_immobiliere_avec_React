import "../style/About.scss";
import { MdKeyboardArrowUp } from "react-icons/md";
import React, { useState } from "react";

function About() {
  const [descriptions, setDescriptions] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const titles = {
    1: "Fiabilité",
    2: "Respect",
    3: "Service",
    4: "Sécurité",
  };

  const texts = {
    1: "Texte pour Fiabilité...  Lorem ipsum dolor sit amet. Quo consequatur odit et voluptas saepe qui laborum dolorem? Est culpa doloribus a galisum dolore ab soluta maiores qui laudantium dicta. Sed illo nihil vel dolores quas id porro consequuntur. Et voluptatem quisquam est eius iusto non galisum voluptatum ut porro eveniet et nesciunt possimus non quidem tempora.",
    2: "Texte pour Respect...Lorem ipsum dolor sit amet. Quo consequatur odit et voluptas saepe qui laborum dolorem? Est culpa doloribus a galisum dolore ab soluta maiores qui laudantium dicta. Sed illo nihil vel dolores quas id porro consequuntur. Et voluptatem quisquam est eius iusto non galisum voluptatum ut porro eveniet et nesciunt possimus non quidem tempora. Ex placeat provident ut doloremque error et mollitia laudantium. Cum quidem debitis ut facilis molestiae est ducimus ipsum et nobis laborum. dolores quas id porro consequuntur. Et voluptatem quisquam est eius iusto non galisum voluptatum ut porro eveniet et nesciunt possimus non quidem tempora.",
    3: "Texte pour Service...Est nihil aspernatur et dolorum ducimus At adipisci beatae eum asperiores dolores aut vitae provident sit amet laborum ea necessitatibus unde. Qui rerum nobis et odio rerum ea aliquid quia qui vitae facere nam harum exercitationem. Ex placeat provident ut doloremque error et mollitia laudantium. Cum quidem debitis ut facilis molestiae est ducimus ipsum et nobis laborum. ",
    4: "Texte pour Sécurité... Est nihil aspernatur et dolorum ducimus At adipisci beatae eum asperiores dolores aut vitae provident sit amet laborum ea necessitatibus unde. Qui rerum nobis et odio rerum ea aliquid quia qui vitae facere nam harum exercitationem. ",
  };

  return (
    <div className="container-aPropos">
      {Object.keys(titles).map((key) => (
        <div
          key={key}
          onClick={() =>
            setDescriptions((prev) => ({ ...prev, [key]: !prev[key] }))
          }
          className="btn-aPropos"
        >
          <div className="Title">
            <h1>{titles[key]}</h1>
            <MdKeyboardArrowUp
              className="Arrow"
              style={{
                transform: descriptions[key] ? "rotate(180deg)" : "none",
              }}
            />
          </div>
          <div className={`text-aPropos ${descriptions[key] ? "open" : ""}`}>
            {descriptions[key] && <p>{texts[key]}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
