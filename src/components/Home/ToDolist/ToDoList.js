import React from "react";
import ToDoListItem from "./ToDoListItem";
import classes from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
    <ul className={classes["task-list"]}>
      {props.toDoData.map((toDoData) => (
        <ToDoListItem
          key={toDoData.id}
          title={toDoData.title}
          description={toDoData.description}
        />
      ))}
    </ul>
  );
};
export default ToDoList;
