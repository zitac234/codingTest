import { Fragment } from "react";
// import Card from '@material-ui/core/Card'
// import CardContent from '@material-ui/core/CardContent';
import { Checkbox } from "./Checkbox";
// import { makeStyles } from '@material-ui/core/styles';
import "./List.css";
// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
// })
export function List(props) {
  return (
    <div className="list">
      {props.items.map((item) => (
        <Fragment key={item}>
          <div className='state'>
          {item} <Checkbox/><br />
          {/* You also have <Checkbox selected={false} /> */}
          </div>
          </Fragment>
      ))}
    </div>
  );
}
