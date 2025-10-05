import styles from "./task.module.css";

const Task = ({ task, tasks, setTasks }) => {
  const handleDelete = (item) => {
    setTasks(tasks.filter((task) => task !== item));
  };

  const handleDone = (itemName) => {
    setTasks(
      tasks.map((item) =>
        item.name === itemName ? { ...item, done: !item.done } : item
      )
    );
  };

  const className = task.done ? styles.taskDone : "";

  return (
    <li className={styles.taskItem}>
      <span className={className} onClick={() => handleDone(task.name)}>
        {task.name}
      </span>
      <div className={styles.btnContainer}>
        <button onClick={() => handleDone(task.name)}>✔</button>
        <button onClick={() => handleDelete(task)}>✘</button>
      </div>
    </li>
  );
};

export default Task;
