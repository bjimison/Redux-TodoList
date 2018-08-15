import reducer from "redux";

const defaultState = [
  {
    id: 0,
    task: "Test this Todo Page",
    completed: false
  },
  {
    id: 1,
    task: "Learn Redux",
    completed: false
  },
  {
    id: 2,
    task: "Learn React",
    completed: true
  }
];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_TODO":
      const newState = state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return newState;
    case "DELETE_TODO":
      const updatedTodos = state.filter(todo => {
        return todo.id != action.id;
      });
      return updatedTodos;
    case "UPDATE_TODO":
      const newTodos = state.map(todo => {
        if (todo.id === action.id) {
          todo.task = this.props.task;
        }
        return todo;
      });
      return newTodos;
    default:
      return state;
  }
};

export default todos;
