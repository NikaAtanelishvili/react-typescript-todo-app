import NewTodo from "./components/newTodo";
import Todos from "./components/todos";
import TodosContexProvider from "./context/todos-contex";

function App() {
  return (
    <TodosContexProvider>
      <NewTodo />
      <Todos />
    </TodosContexProvider>
  );
}

export default App;
