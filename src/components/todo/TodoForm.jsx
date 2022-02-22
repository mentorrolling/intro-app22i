import React from 'react'

const TodoForm = (props) => {

    const {handLeSubmit, inputValue, handLeChange } = props
  return (
    <form onSubmit={handLeSubmit}>
            <input
              className="form-control"
              type="text"
              value={inputValue}
              placeholder="Ingresar la tarea"
              onChange={handLeChange}
            />
          </form>
  )
}

export default TodoForm