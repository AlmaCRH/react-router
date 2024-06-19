import api from "./config";

const getTodos = async () => {
  try {
    const { data } = await api.get("todos");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getOneTodo = async (id) => {
  try {
    const { data } = await api.get(`todos/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getTodos, getOneTodo };
