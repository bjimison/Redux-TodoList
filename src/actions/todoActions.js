import uuid from "uuid";

export const addTodo = task => {
  return {
    //   only type is required, rest is optional data
    type: "ADD_TODO",
    todo: {
      id: uuid(),
      task,
      completed: false
    }
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id: id
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id: id
  };
};

export const updateTodo = (id, task) => {
  return {
    type: "UPDATE_TODO",
    todo: {
      id: id,
      task: task,
      completed: false
    }
  };
};
