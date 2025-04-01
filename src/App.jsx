import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Esercitazione React 1</h1>
      <ButtonComponent text="Avanti" />
      <ImageComponent
        link="https://img.freepik.com/vettori-gratuito/giraffa-carina-con-gli-occhiali-caricaturistici-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-13785.jpg"
        description="Giraffa"
      />
    </>
  );
}

export default App;
