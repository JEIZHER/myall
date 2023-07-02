import "./CreateTodoButton.css";


function CreateTodoButton({
  // todos,
  // setTodos,
  // searchValue,
  // setSearchValue,
   //  openModal, 
     setOpenModal

}) {
  
  // const nuevoTodo = {
  //   text: searchValue,
  //   completed: false,
  // };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => { 
        setOpenModal(state=>!state);
      //  setOpenModal(!openModal);
       // openModal? setOpenModal(false):setOpenModal(true) ; 
       
        //  searchValue && setTodos(todos.concat(nuevoTodo));   
        //  setSearchValue("");     
      }}
    >
      + 
    </button>
    
  );
 
}

export { CreateTodoButton };
