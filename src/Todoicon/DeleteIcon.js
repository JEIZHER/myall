import React from "react";
import { Todoicon } from ".";

function DeleteIcon({onDelete}) {
  return <Todoicon type="delete" color="gray" onClick={onDelete} />;
}

export { DeleteIcon };
