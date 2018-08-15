import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todoActions";
import { deleteTodo } from "../actions/todoActions";

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              {todo.task}: {todo.completed.toString()}
              <button onClick={() => this.props.toggleTodo(todo.id)}>
                Toggle
              </button>
              <button
                onClick={() => this.props.deleteTodo(todo.id)}
                key={todo.id}
              >
                (X)
              </button>
              <button
                onClick={() => this.props.updateTodo(todo.id, todo.task)}
                key={todo.id}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(Todos);
