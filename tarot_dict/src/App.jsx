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
  const [filter, setFilter] = useState("all");

  const filteredDeck = cards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "major") return card.is_major_arcana;
    return card.suit === filter || card.suit + "s" === filter;
  });

  return (
    <div className="App">
      <h1>tarot dictionary</h1>
      <p>learn the major and minor arcana</p>
      <div className="filter-buttons">
        <button
          onClick={() => {
            setFilter("all");
            setIdx(0);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("major");
            setIdx(0);
          }}
        >
          Major Arcana
        </button>
        <button
          onClick={() => {
            setFilter("cup");
            setIdx(0);
          }}
        >
          Cups
        </button>
        <button
          onClick={() => {
            setFilter("swords");
            setIdx(0);
          }}
        >
          Swords
        </button>
        <button
          onClick={() => {
            setFilter("pentacles");
            setIdx(0);
          }}
        >
          Pentacles
        </button>
        <button
          onClick={() => {
            setFilter("wands");
            setIdx(0);
          }}
        >
          Wands
        </button>
      </div>
      <p>Deck Length: {filteredDeck.length}</p>
      {filteredDeck.length > 0 ? (
        <TarotCard card={filteredDeck[idx]} />
      ) : (
        <p>No cards found.</p>
      )}
      <div className="nav-buttons">
        <button
          onClick={() =>
            setIdx((i) => (i - 1 + filteredDeck.length) % filteredDeck.length)
          }
        >
          Previous
        </button>

        <button onClick={() => setIdx((i) => (i + 1) % filteredDeck.length)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
