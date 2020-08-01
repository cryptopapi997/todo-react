import React, { Component } from 'react'
import Task from "./Task"
import "./App.css"

export class TaskList extends Component {
    

    constructor(props) {
        super(props);
        this.state = {newTask: '', tasks: []};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleChange(event) {
        this.setState({newTask: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.newTask !== ''){
            let tasksOld = this.state.tasks;
            tasksOld.push({name: this.state.newTask});
            this.setState({tasks: tasksOld});
            this.setState({newTask: ''})
            event.preventDefault();
        }
    }

    render() {
        const listItems = this.state.tasks.map((t) => <Task taskName={t.name} />);

        return (
            <div className="TaskList">
                <h1>Today's tasks:</h1>
                {listItems}
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.newTask} onChange={this.handleChange} />
                <input type="submit" value="Add task" />
                </form>
            </div>
            
        )
    }
}

export default TaskList
