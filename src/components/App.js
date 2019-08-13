import React from "react";
import Header from "./Header";
import Formulario from "./Formulario";

import CategoriasProvider from "../context/CategoriaContext";
import EventosProvider from "../context/EventosContext";
import ListaEventos from "./ListaEventos";

//This data is only develop
// API key
// HMW7SSGNV2ZZV23CLP
// Client secret
// 4LUZ4RGZFUJI6ZJIJOYONEEM3GON7AOU5TFWSAYEH5YHYR6JE5
// Private token
// JA63LBZQ5SDYW3EZ2BFY
// Public token
// VGBSV5WC2BEPSJIPHVY3

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
          <ListaEventos />
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
