import { Fragment } from "react";
import { Checkbox } from "./Checkbox";
import "./List.css";
export function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <Fragment key={item}>
          <div className='state'>
          {item} </div<div className='checkbox'><Checkbox/></div><br />
          {/* You also have <Checkbox selected={false} /> */}
       
          </Fragment>
      ))}
    </div>
  );
}
