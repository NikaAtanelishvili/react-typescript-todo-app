import React, { useRef, useContext } from "react";

import styles from "../style/NewTodo.module.css";

import { TodosContex } from "../context/todos-contex";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodosContex);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const formSubmitHander = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTodoText = todoTextInputRef.current!.value;

    if (enteredTodoText?.trim().length === 0) return;

    todoCtx.addTodo(enteredTodoText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={formSubmitHander} className={styles.form}>
      <label htmlFor="newTodo">Todo Text</label>
      <input ref={todoTextInputRef} id="newTodo" type="text" />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
