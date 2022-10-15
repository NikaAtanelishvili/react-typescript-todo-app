import React from "react";
import styles from "../style/TodoItem.module.css";
// ignore prettier
const TodoItem: React.FC<{
  text: string;

  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={styles.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
