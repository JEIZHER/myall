import React from "react";
import { Todoicon } from "./Todoicon";

function CompleteIcon({completed ,onComplete}) {
  return <Todoicon
  type = 'check'
  color = {completed ? 'green' : 'grey' }
  onClick = {onComplete}
  />;
}

export { CompleteIcon };
