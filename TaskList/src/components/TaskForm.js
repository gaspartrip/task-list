import React, { Component } from 'react';

export default class TaskForm extends Component {

  state = {
    title: "",
    description: ""
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: ""
    });
  }

  changeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="taskForm" action="" method="get">

        <h4 className="m-3 text-white font-italic font-weight-bold">Add new task</h4>
        <input
          onChange={this.changeForm}
          type="text"
          name="title"
          value={this.state.title}
          className="m-3"
          placeholder="Title"
        />
        <input
          onChange={this.changeForm}
          type="text"
          name="description"
          value={this.state.description}
          placeholder="Description"
        />
        <button type="submit" className="btn btn-lg btn-outline-info m-3">Add task</button>

      </form>
    )
  }

}