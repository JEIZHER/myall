import React from "react";
import { TodoContex } from "../TodoContex";
import "./TodoForm.css";

function TodoForm() {
 
  const { setOpenModal, AddTodo} = React.useContext(TodoContex);
  const [newTodoValue ,setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    AddTodo(newTodoValue.trim());
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };


  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
      placeholder="Hacer lo que este haciendo" 
      value={newTodoValue}
      onChange={onChange}
      required
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
