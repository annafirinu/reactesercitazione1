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
      <h2>Bottoni</h2>
      <ButtonComponent text="Primo" />
      <ButtonComponent text="Secondo" />
      <ButtonComponent text="Terzo" />
      <h2>Immagini</h2>
      <ImageComponent
        link="https://img.freepik.com/vettori-gratuito/giraffa-carina-con-gli-occhiali-caricaturistici-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-13785.jpg"
        description="Giraffa"
      />
      <ImageComponent
        link="https://m.media-amazon.com/images/I/613Il8TkZKL._AC_UF1000,1000_QL80_.jpg"
        description="Panda"
      />
      <ImageComponent
        link="https://www.balloon-party.it/68474-large_default/palloncino-30-super-shape-scimmia-sergio.jpg"
        description="Scimmia"
      />
    </>
  );
}

export default App;
