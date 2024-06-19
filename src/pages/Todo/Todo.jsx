import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneTodo } from "../../services/todosServices";
import TodoCard from "../../components/TodoCard/TodoCard";

const Todo = () => {
  const [todo, setTodo] = useState({});
  const { todoId } = useParams();
  useEffect(() => {
    const getTodo = async () => {
      const data = await getOneTodo(todoId);
      setTodo(data);
    };
    getTodo();
  }, [todoId]);
  return (
    <div>
      <TodoCard title={todo.title} status={todo.completed} />
    </div>
  );
};

export default Todo;
