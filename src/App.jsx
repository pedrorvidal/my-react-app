import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Card = () => {
  return (
    <div>
      <h2>Card component</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h2>Functional arrow component!</h2>
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default App;
