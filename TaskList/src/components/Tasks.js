import React, { Component } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {

  render() {
    return (
      <div style={tasksModule}>
        {this.props.tasks.map(
          (e) => {
            return (
              <Task key={e.id} task={e} deleteTask={this.props.deleteTask} updateDone={this.props.updateDone} />
            );
          }
        )}
      </div>
    )
  }

}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

const tasksModule = {
  textAlign: "center",
  marginBottom: "70px"
}

export default Tasks;