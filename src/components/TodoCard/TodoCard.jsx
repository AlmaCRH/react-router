import "./TodoCard.css";

const TodoCard = ({ title, userId }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{userId}</p>
    </div>
  );
};

export default TodoCard;
