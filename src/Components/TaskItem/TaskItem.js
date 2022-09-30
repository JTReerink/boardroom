import React from "react";
import "./TaskItem.css";

class TaskItem extends React.Component {
    constructor(props){
        super(props);
        this.className = "Tasklist__item";
        this.state = {name: this.props.name, done: this.props.done}
    }

    render() {
        return(
            <li className={this.className}>{this.state.name}</li>
        )
    }

}

export default TaskItem;