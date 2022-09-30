import Task from "../Task/Task";
import "./Tasklist.css";

const List = () => {
    return(
        <article className="tasklist">
            <h1>Ik ben een list</h1>
            <ul className="tasklist__list">
                <Task />
            </ul>
        </article>
    )
};

export default List;