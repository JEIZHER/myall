import { ReactComponent as CheckSvg } from "./check.svg";
import { ReactComponent as DeleteSvg } from "./delete.svg";
import "./TodoIcons.css";

const iconTypes = {
  "check": (color) => <CheckSvg className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteSvg className="Icon-svg" fill={color} />,
};

function Todoicon({ type, color ,onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick = {onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { Todoicon };
