import selected from "./Checkbox-Filled.svg";
import unselected from "./Checkbox-Empty.svg";

export function Checkbox(props) {
  return (
    <img
      width={20}
      height={20}
      src={props.selected ? selected : unselected}
      alt={`Checkbox ${selected ? "selected" : "unselected"}`}
    />
  );
}
