import { Fragment } from "react";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import { Checkbox } from "./Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import "./List.css";
import classes from "*.module.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
})
export function List(props) {
  const classes = useStyles();
  return (
    <div className="list">
      {props.items.map((item) => (
        <Fragment key={item}>
          <Card className={classes.root}>
            <CardContent>
              {item} <Checkbox/><br />
            </CardContent>
            {/* You also have <Checkbox selected={false} /> */}
          </Card>
          </Fragment>
      ))}
    </div>
  );
}
