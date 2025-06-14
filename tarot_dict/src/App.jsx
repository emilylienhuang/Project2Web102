import { useState } from "react";
import "./App.css";
import TarotCard from "./components/TarotCard";

const App = () => {
  return (
    <div className="App">
      <h1>tarot dictionary</h1>
      <p>learn the major and minor arcana</p>
      <TarotCard />
    </div>
  );
};

export default App;
