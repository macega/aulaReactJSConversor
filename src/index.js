import React from "react";
import ReactDOM from "react-dom";
import Conversor from "./componentes/conversor";

import "./styles.css";

function App() {
  return (
    <div className="conversor">
      <Conversor moedaA="USD" moedaB="BRL" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
