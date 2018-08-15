import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
} from "../actions/todoActions";
import { timingSafeEqual } from "crypto";

class TodoForm extends Component {
  state = {
    newTodo: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  handleUpdate = event => {
    this.props.updateTodo(this.state.todo);
    this.id = this.props.id;
    this.task = this.props.task;
    this.setState({ id: id, task: task });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.newTodo} />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo, toggleTodo, deleteTodo, updateTodo }
)(TodoForm);
