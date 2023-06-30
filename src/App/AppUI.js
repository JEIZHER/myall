import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContex } from "../TodoContex";

function AppUI() {
  return (
    <React.Fragment>
       
          <TodoCounter/>
   
      

     
          <TodoSearch />
    

      <TodoContex.Consumer>
        {({ loading, error, searchedTodos, completeTodo, deleteTodo }) => (
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmptyTodos />}
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
        )}
      </TodoContex.Consumer>

      <TodoContex.Consumer>
        {({ searchValue, setSearchValue, saveTodos, todos }) => (
          <CreateTodoButton
            todos={todos}
            setTodos={saveTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}
      </TodoContex.Consumer>
      
    </React.Fragment>
  );
}

export { AppUI };
