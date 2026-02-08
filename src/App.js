import React, { useState } from "react";

function App() {
  const [reporte, setReporte] = useState("");
  const [listaReportes, setListaReportes] = useState([]);

  const agregarReporte = () => {
    if (reporte === "") return;
    setListaReportes([...listaReportes, reporte]);
    setReporte("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Sistema Vecinal</h1>
      <h3>Registro de incidencias</h3>

      <input
        type="text"
        placeholder="Describe el problema..."
        value={reporte}
        onChange={(e) => setReporte(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <button onClick={agregarReporte} style={{ marginLeft: "10px", padding: "10px" }}>
        Reportar
      </button>

      <h3>Reportes registrados</h3>

      <ul>
        {listaReportes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
