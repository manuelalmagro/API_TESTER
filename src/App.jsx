import "./App.css";
import { useState } from "react";

import Header from "./assets/components/Header";
import CrearAlumno from "./assets/components/CrearAlumno";
import BuscarAlumnoPorID from "./assets/components/BuscarAlumnoPorID";
import BuscarAlumnoConNotasPorID from "./assets/components/BuscarAlumnoConNotasPorID";
import EliminarAlumnoPorID from "./assets/components/EliminarAlumnoPorID";

function App() {
  const [vista, setVista] = useState("crear");

  return (
    <div className="app">
      <Header vista={vista} setVista={setVista} />

      <div className="grid">
        {vista === "crear" && (
          <div className="panel">
            <CrearAlumno />
          </div>
        )}

        {vista === "buscar" && (
          <div className="panel">
            <BuscarAlumnoPorID />
          </div>
        )}

        {vista === "buscarNotas" && (
          <div className="panel">
            <BuscarAlumnoConNotasPorID />
          </div>
        )}

        {vista === "eliminar" && (
          <div className="panel">
            <EliminarAlumnoPorID />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;