import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import NewToDo from "./ToDoForm/NewToDo";
import ToDoList from "./ToDolist/ToDoList";

const DummyData = [
  {
    id: "e1",
    title: "Mathematics",
    description:
      "Complete the revision of Trignometry, Permutation& Combination, Binomial theorem, Integral And Differential Calculas by 25th January.",
  },
  {
    id: "e2",
    title: "Physics",
    description:
      "Complete the revision of Electrostatics,Magnetism,ElectroMagnetic Iduction and optics and also attempt Previous Questions of Modern Physics ",
  },
  {
    id: "e3",
    title: "Chemistry",
    description:
      "Complete the revision of Organic and Inorganic chapters of syllabus and also attempt question of previous Year JEE Questions",
  },
  {
    id: "e4",
    title: "English",
    description:
      "Confirm the syllabus of English, complete the grammatical syllabus by 25th Jan and complete the first reading of Flamingo and Vistas",
  },
];

const Home = (props) => {
  const [taskData, setTaskData] = useState(DummyData);

  const addTaskHandler = (taskData) => {
    setTaskData((prevTaskData) => {
      return [taskData, ...prevTaskData];
    });
  };

  const user = `Welcome ${props.name} !`;
  return (
    <>
      <Card className={classes.home}>
        <h1>{user}</h1>

        <NewToDo onAddTask={addTaskHandler} />
      </Card>
      <div className={classes.shadow}>
        <ToDoList toDoData={taskData} />
      </div>
    </>
  );
};

export default Home;
