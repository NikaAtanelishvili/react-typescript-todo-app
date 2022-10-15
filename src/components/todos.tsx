// components
import TodoItem from "./todoItem";
// style
import styles from "../style/NewTodo.module.css";
// hooks
import { useContext } from "react";
import { TodosContex } from "../context/todos-contex";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContex);

  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
          text={item.text}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Todos;
