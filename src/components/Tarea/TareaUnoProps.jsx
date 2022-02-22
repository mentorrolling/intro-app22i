import React, { useState } from "react";

function TareaUnoProps(props) {
  const [fraceNueva, setFraceNueva] = useState("");

  const { frace } = props;
  let toco = false;

  const preciono = (tocoBoton) => {
    
    
      
    if (tocoBoton) {
        setFraceNueva("(from changed state)");
        toco = tocoBoton

    } else {
        setFraceNueva("");
        toco = tocoBoton
        
    }
  };

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>
          {frace} {fraceNueva}
        </h1>
      </div>
      <div className="text-center mt-3">
        <button
          className="btn btn-danger btn-sm"
          onClick={()=>preciono(!toco)}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default TareaUnoProps;
