import "./CreateTodoButton.css";

function CreateTodoButton({
  todos,
  setTodos,
  searchValue,
  setSearchValue
}) {
  //let newnew
  const nuevoTodo = {
    text: searchValue,
    completed: false,
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        // solucion mamarracha, si todos ya tiene la informacion adelantada porque no se gusda directamente en el localstorage
        searchValue && setTodos(todos.concat(nuevoTodo));
      //   const dataLS = JSON.parse(localStorage.getItem('TODOS_V1')).concat(nuevoTodo);
      //   newnew = JSON.stringify(dataLS);
      //  localStorage.setItem('TODOS_V1', newnew); 
      
        
        setSearchValue("");
        
      }}
    >
      + 
    </button>
    
  );
 
}

export { CreateTodoButton };
