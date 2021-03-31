import { Fragment } from "react";
import Card from '@material-ui/core/Card'

import { Checkbox } from "./Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import "./List.css";

export function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <Fragment key={item}>
          {item} <Checkbox/><br />
          {/* You also have <Checkbox selected={false} /> */}
        </Fragment>
      ))}
    </div>
  );
}
