import React, { useState } from "react";
const TarotCard = (props) => {
  const [flipped, setFlipped] = useState(false);
  const card = props.card;

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div
          className={`flashcard-face flashcard-front front ${props.card.suit}`}
        >
          <h1>{card.title}</h1>
        </div>
        <div className="flashcard-face flashcard-back">
          <div className="card-line title">{props.card.title}</div>
          <div className="card-line">
            <p>
              <strong>Upright:</strong> {props.card.description_upright}
            </p>
          </div>
          <div className="card-line">
            <p>
              <strong>Reversed:</strong> {props.card.description_reversed}
            </p>
          </div>
          <div className="card-line">
            <p>
              <strong>Arcana:</strong>{" "}
              {props.card.is_major_arcana ? "Major Arcana" : "Minor Arcana"}{" "}
            </p>
          </div>
          <div className="card-line">
            <p>
              <strong>Themes:</strong> {props.card.theme.join(", ")}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
