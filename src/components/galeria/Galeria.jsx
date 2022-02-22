import React from "react";
import { esculturasList } from "../../datos/galeria";

const Galeria = () => {
  console.log(esculturasList);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Galería de arte</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary me-2">Anterior</button>
          <button className="btn btn-primary">Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
