import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import taskObject from "../data/TaskData";
import "./Tasklist.css";

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }
    }

    componentDidMount() {
        this.setState({ tasks: taskObject.Task})
    }
    
    render(){
        let task = this.state.tasks.map(task => {
            return <TaskItem key={task.id} name={task.name} done={task.done} />
        })
        return(
            <article className="tasklist">
                <h1 className="tasklist__title">Ik ben een list</h1>
                <ul className="tasklist__list">
                    {task}
                </ul>
            </article>
        )

    }
};

export default List;