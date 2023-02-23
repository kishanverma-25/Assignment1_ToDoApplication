import React, { useState } from "react";
import classes from "./ToDoForm.module.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const ToDoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
    };
    console.log(taskData);
    props.onSaveTaskData(taskData);
    setEnteredDescription("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.formControls}>
        <Input
          id="title"
          label="Title of Task"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          id="description"
          label="Description"
          type="text"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div className={classes.actions}>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
};

export default ToDoForm;
