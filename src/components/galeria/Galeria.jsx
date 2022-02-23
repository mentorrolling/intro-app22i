import React, { useState } from "react";
import { esculturasList } from "../../datos/galeria";
import GaleriaBtn from "./GaleriaBtn";

const Galeria = () => {
  const [indice, setIndice] = useState(0);
  const [show, setShow] = useState(false);
  const galeria = esculturasList;

  const nextPage = () => {
    if (indice + 1 < galeria.length) {
      setIndice(indice + 1);
    }
  };

  const prevPage = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <h1>Galería de arte</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <GaleriaBtn
            indice={indice}
            prevPage={prevPage}
            nextPage={nextPage}
            galeria={galeria}
          />
          {/* <button
            className="btn btn-primary me-2"
            onClick={prevPage}
            disabled={indice === 0 ? true : false}
          >
            Anterior
          </button>
          <button
            className="btn btn-primary"
            onClick={nextPage}
            disabled={indice + 1 === galeria.length ? true : false}
          >
            Siguiente
          </button> */}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          {/* <GaleriaInfo /> */}
          <h3>{galeria[indice].name}</h3>
          <p>by {galeria[indice].artist}</p>
          <div className="mt-3">
            <img
              src={galeria[indice].url}
              alt={galeria[indice].alt}
              className="w-100"
            />
          </div>
          <div>
            <button className="btn btn-success my-2" onClick={handleShow}>
              {show ? "Ocultar" : "Ver más"}
            </button>
            {show && <h4>{galeria[indice].description}</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
