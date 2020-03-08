//React
import React, { Component } from 'react';

//Style
import './App.css';

//JSON
import tasks from './sample/tasks.json';

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    var newId = 0;
    if (this.state.tasks.length !== 0) {
      const lastPosition = this.state.tasks.length - 1;
      newId = this.state.tasks[lastPosition].id + 1;
    }
    var newTask = {
      id: newId,
      title: title,
      description: description,
      done: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask] //Adding new element to the array
    });
  }

  deleteTask = (id) => {
    var newArray = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: newArray });
  }

  updateDone = (id) => {
    var newArray = this.state.tasks.map(

      (task) => {

        if (task.id === id)
          task.done = !(task.done);

        return task;

      }

    );
    this.setState({ tasks: newArray });
  }

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} updateDone={this.updateDone} />
      </div>
    )
  }

}

export default App;