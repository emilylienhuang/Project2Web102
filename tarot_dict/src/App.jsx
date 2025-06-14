import { useState } from "react";
import "./App.css";
import TarotCard from "./components/TarotCard";
import {
  majorArcana,
  cups,
  pentacles,
  swords,
  wands,
} from "./data/tarot_cards_full_deck";

const App = () => {
  const cards = [...majorArcana, ...cups, ...pentacles, ...swords, ...wands];
  const [idx, setIdx] = useState(0);

  const moveNext = () => {
    setIdx((prev) => (prev + 1) % cards.length);
  };

  const movePrev = () => {
    setIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };
  return (
    <div className="App">
      <h1>tarot dictionary</h1>
      <p>learn the major and minor arcana</p>
      <TarotCard card={cards[idx]} />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={movePrev} style={{ marginRight: "1rem" }}>
          Previous
        </button>
        <button onClick={moveNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
