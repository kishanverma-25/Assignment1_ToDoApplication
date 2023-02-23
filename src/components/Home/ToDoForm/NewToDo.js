import React, { useState } from "react";
import classes from "./NewToDo.module.css";
import ToDoForm from "./ToDoForm";

const NewToDo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveDataHandler = (newTaskData) => {
    const toDoData = {
      ...newTaskData,
      id: Math.random().toString(),
    };
    console.log(toDoData);
    props.onAddTask(toDoData);
    setIsEditing(false);
  };

  const StartEditingHandler = () => {
    setIsEditing(true);
  };

  const StopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className={classes["newToDo"]}>
      {!isEditing && (
        <button onClick={StartEditingHandler}>Add New Task</button>
      )}
      {isEditing && (
        <ToDoForm
          onSaveTaskData={saveDataHandler}
          onCancel={StopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewToDo;
