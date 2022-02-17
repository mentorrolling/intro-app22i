import React from "react";

const Heroes = (props) => {
  const { heroes } = props;
  //   console.log(heroes);

  const handleClick = (id) => {
    alert(
      `Tu héroe seleccionado es ${heroes[id].nombre} y pertenece a la editorial ${heroes[id].owner}`
    );
  };

  return (
    <div>
      <h3>Lista de Héroes</h3>
      <ul>
        {heroes.map((heroe, index) => (
          <li key={index} className="item" onClick={() => handleClick(index)}>
            {heroe.nombre} -
            <span
              style={{
                color: heroe.owner === "DC" ? "blue" : "red",
                fontFamily: "fantasy",
                backgroundColor: "gold",
              }}
            >
              {heroe.owner}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
