import React, { useState } from "react";
import classes from "./ToDoListItem.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const ToDoListItem = (props) => {
  const [isTrue, setIsTrue] = useState(true);

  const clickHandler = () => {
    setIsTrue(false);
  };
  return (
    <Card className={classes["task-item"]}>
      <div className={classes["task-item__title"]}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes["task-item__description"]}>
          <h2>{props.description}</h2>
        </div>
      </div>
      {isTrue && <Button onClick={clickHandler}>Mark as Completed</Button>}
      {!isTrue && <p className={classes.taskStatus}>Task Completed</p>}
    </Card>
  );
};

export default ToDoListItem;
