import React, { useState } from "react";
const TarotCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-face flashcard-front">Front</div>
        <div className="flashcard-face flashcard-back">back</div>
      </div>
    </div>
  );
};

export default TarotCard;
