import React from "react";
import ToDo from "./ToDo";

const ToDos = ({todos, setTodos}) => {
    return(
        <ul className="todos">
            {todos.map(todo => (
                <ToDo text={todo.text} key={todo.created} created={todo.created} todos={todos} setTodos={setTodos} name={todo.name} position={todos.indexOf(todo)} notificationTime={todo.notificationTime} />
            ))}
        </ul>
    );
}

export default ToDos;