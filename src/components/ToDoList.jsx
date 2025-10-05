import Task from "./Task";
import styles from "./todo.module.css";

const ToDoList = ({ tasks, setTasks }) => {
  const sortedTasks = tasks
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done)); // sort() compara dos elementos y: si resultado es negativo -> a va antes que b; si resultado es positivo -> b va antes que a; si resultado es 0 -> mantiene el orden => esto funciona porque Number(true) es 1 y Number(false) es 0
  return (
    <section className={styles.tasksContainer}>
      <ul>
        {sortedTasks.map((item) => (
          <Task key={item.name} task={item} tasks={tasks} setTasks={setTasks} />
        ))}
      </ul>
    </section>
  );
};

export default ToDoList;
