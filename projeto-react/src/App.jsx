import React, { useState, useEffect } from "react";
import TabelaImc from "./Componentes/Tabela/Index";
import Perfil from "./Componentes/Perfil/Index";
import Formulario from "./Componentes/Formulario/Index";

function App() {
  return (
    <>
      <div className="divBlock">
        <Perfil />
        <section id="result">
        <Formulario />
          <section id="reference-table">
            <TabelaImc />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;