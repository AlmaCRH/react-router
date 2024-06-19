import { useState, useEffect } from "react";
import { getTodos } from "../../services/todosServices";
import TodoCard from "../../components/TodoCard/TodoCard";
import { Link } from "react-router-dom";
const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Link key={todo.id} to={`/todos/${todo.id}`}>
            <TodoCard title={todo.title} userId={todo.userId} />
          </Link>
        );
      })}
    </div>
  );
};

export default Todos;
