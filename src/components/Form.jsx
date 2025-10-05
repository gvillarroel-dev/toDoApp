import { useState } from "react";
import styles from "./todo.module.css";

const Form = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    name: "",
    done: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]); // conserva los valores agregados antes y agrega el nuevo valor al mismo array
    setTask({ name: "", done: false });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        onChange={(e) => setTask({ name: e.target.value, done: false })}
        value={task.name}
        placeholder="Let's start..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Form;
