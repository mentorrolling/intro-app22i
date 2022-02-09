import React from "react";

const Heroes = (props) => {
  const { heroes } = props;
  //   console.log(heroes);

  return (
    <div>
      <h3>Lista de Héroes</h3>
      <ul>
        {heroes.map((heroe) => (
          <li>
            {heroe.nombre} - {heroe.owner}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
