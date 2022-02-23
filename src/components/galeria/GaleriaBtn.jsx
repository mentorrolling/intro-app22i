import React from "react";

const GaleriaBtn = (props) => {
  const { indice, prevPage, nextPage, galeria } = props;
  return (
    <>
      <button
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
      </button>
    </>
  );
};

export default GaleriaBtn;
