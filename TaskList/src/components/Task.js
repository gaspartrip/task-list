import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

  //Dynamic style
  styleCompleted() {
    return {
      color: "grey",
      textDecoration: this.props.task.done ? "line-through" : "none"
    };
  }

  clickButton = () => {
    this.props.deleteTask(this.props.task.id);
  }

  checkbox = () => {
    this.props.updateDone(this.props.task.id);
  }

  render() {
    const t = this.props.task;
    return (
      <div className="card task">
        <img className="card-img-top imgCard" src="https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg" alt="Task"></img>
        <div className="card-body" style={this.styleCompleted()}>
          <h5 className="card-title"> {t.id + 1}. {t.title} </h5>
          <p className="card-text"> {t.description} </p>
        </div>
        <div style={checkboxButton}>
          <label><input type="checkbox" onChange={this.checkbox} name="checkbox" className="big-checkbox" value="value" />Completed</label>
          <button onClick={this.clickButton} className="btn btn-danger btn-sm mt-2 mb-2">Delete</button>
        </div>
      </div>
    )
  }

}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

const checkboxButton = {
  margin: "10px 10px 10px 10px",
  display: "grid"
}

export default Task;