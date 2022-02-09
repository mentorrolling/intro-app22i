import React from "react";
import Heroes from "./components/Heroes";

import Mensaje from "./components/Mensaje";

import { heroes } from "./datos/datos";

const App = () => {
  //código javascript
  //   console.log(heroes);
  const nombre = "Fabrizio";

  //   console.log(nombre);
  return (
    //renderizar o mostrar en el navegador (JSX)
    <div>
      <h1>Soy un componente!!</h1>
      <Mensaje dato={nombre} />
      <Heroes heroes={heroes} />
    </div>
  );
};

export default App;
