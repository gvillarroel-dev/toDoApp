import { useState } from "react";
import styles from "./todo.module.css";
import Form from "./Form";
import ToDoList from "./ToDoList";

const ToDo = () => {
  // elevación de estado para acceder a las tareas en dos componentes diferentes
  const [tasks, setTasks] = useState([]);
  return (
    <main className={styles.container}>
      <Form tasks={tasks} setTasks={setTasks} />
      <ToDoList tasks={tasks} setTasks={setTasks} />
    </main>
  );
};

export default ToDo;
