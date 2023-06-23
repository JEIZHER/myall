import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// const defaultTodos = [
//   { text: "Buscar datos para pagina ", completed: true },
//   { text: "eliminar bugs ", completed: false },
//   { text: "Pagar hosting ", completed: true },
//   { text: "iniciar curso de React.js ", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  let parsedItem;

  const localStorageItem = localStorage.getItem(itemName);

  parsedItem = localStorageItem
    ? JSON.parse(localStorageItem)
    : JSON.stringify(initialValue);
  const [item, setItem] = React.useState(parsedItem);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item , saveItem]
}

function App() {
  //  const localStorageTodo= localStorage.getItem('TODOS_V1');
  // let parsedTodos;
  // if(!localStorageTodo){
  //   localStorage.setItem('TODOS_V1',JSON.stringify([]));
  //   parsedTodos = [];
  // } else{
  //   parsedTodos=JSON.parse(localStorageTodo);
  // }
  //const [todos, setTodos] = React.useState(parsedTodos);

 // const [todos, setTodos] = React
   // .useState

    // localStorageTodo ? JSON.parse(localStorageTodo) : []
   // ();

   const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  // const saveTodos=(newTodos)=>{
  //   localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
  //   setTodos(newTodos);
  // }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton
        todos={todos}
        
        setTodos={saveTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </React.Fragment>
  );
}

export default App;
