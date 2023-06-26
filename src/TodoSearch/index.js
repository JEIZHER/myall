//import React, { useState } from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue,setSearchValue}) {


  return (
    <input
      placeholder="Investigar en stackoverflow"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        // console.log(event);
        //console.log(event.target);
        // console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
