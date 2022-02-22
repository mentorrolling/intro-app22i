import React, { useState } from "react";
import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  const handLeChange = (e) => {
    setInputValue(e.target.value);
  };

  const handLeSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, inputValue]);
    setInputValue("");
  };

  const borrarTarea = (index) => {
    const tareasPendientes = [...tareas];
    tareasPendientes.splice(index, 1);
    setTareas(tareasPendientes);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3 text-center">
          <h3>Lista de tarea</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <TodoForm
            handLeSubmit={handLeSubmit}
            handLeChange={handLeChange}
            inputValue={inputValue}
          />
        </div>
        <div className="col-12 col-md-6 offset-md-3 my-3">
          {tareas.map((tarea, index) => (
              <TodoCard key={index} tarea={tarea} borrarTarea={borrarTarea} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
