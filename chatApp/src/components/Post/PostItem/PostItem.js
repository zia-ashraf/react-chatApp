import { Fragment } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    minWidth: 270,
    paddingLeft: 15,
  },
});
const PostItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" m={5}>
      <div>
        <h1>{props.title}</h1>
        <p>
          {props.by}
          <br />
          {props.date.toString()}
        </p>
      </div>
      <div>{props.content}</div>
    </Card>
  );
};

export default PostItem;
