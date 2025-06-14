import React, { useState } from "react";
const TarotCard = (props) => {
  const [flipped, setFlipped] = useState(false);
  const card = props.card;

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-face flashcard-front">
          <h3>{card.title}</h3>
        </div>
        <div className="flashcard-face flashcard-back">
          <h2>{card.title}</h2>
          <p>
            <strong>Upright:</strong> {card.description_upright}
          </p>
          <p>
            <strong>Arcana:</strong>{" "}
            {card.is_major_arcana ? "Major Arcana" : "Minor Arcana"}
          </p>
          <p>
            <strong>Themes:</strong>
          </p>
          <ul>
            {card.theme.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;
