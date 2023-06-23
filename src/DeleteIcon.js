import React from "react";
import { Todoicon } from "./Todoicon";

function DeleteIcon({onDelete}) {
  return <Todoicon type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
