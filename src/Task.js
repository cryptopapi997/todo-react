import React, { Component } from 'react'
import "./App.css"
export class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
          done: false,
        };
    }

    checkoff = () => {
        this.setState({done: true})
    }
    

    render() {
        return (
            <div className="Task">
            {!this.state.done && <h2 className="TaskText">{this.props.taskName}</h2>}
            {!this.state.done && <button className="TaskButton" onClick={this.checkoff}>Check!</button>}              
            </div>
        )
    }
}

export default Task
