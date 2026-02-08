import React, { useState } from "react";

function App() {
  const [reporte, setReporte] = useState("");
  const [reportes, setReportes] = useState([]);

  const agregarReporte = () => {
    if (reporte === "") return;
    setReportes([...reportes, reporte]);
    setReporte("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Plataforma de Administración Comunal</h1>

      <p>Registro de incidencas vecinales</p>

      <input
        type="text"
        placeholder="Escribir problema"
        value={reporte}
        onChange={(e) => setReporte(e.target.value)}
      />

      <button onClick={agregarReporte}>Registrar</button>

      <h2>Lista de reportes</h2>

      <ul>
        {reportes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;