import React from "react";

const Input = ({input, setInput, todos, setTodos, heading, setHeading}) => {
    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const headingChange = (e) => {
        setHeading(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        if(input === ""){
            alert("Text for a note should not be empty.");
            return
        }
        var d = new Date();
        // console.log(input);
        setTodos([
            ...todos,
            {
                name:heading,
                text:input,
                created: d.getTime(), //unique
                notificationTime: 0,
                position: todos.length
            }
        ]);
        setInput("");
        setHeading("");
    }

    React.useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(todos));
      }, [todos]);
    
    return(
        <form className="input">
            <h3>note app</h3>
            <input tabIndex="0" onChange={headingChange} type="text" name="heading" className="heading" value={heading} placeholder="NOTE NAME (OPTIONAL)" autoComplete="off" />
            <input tabIndex="0" onChange={inputChange} type="text" name="text" className="text" value={input} placeholder="NOTE TEXT" autoComplete="off" />
            {/* <input onChange={alertChange} type="datetime-local" name="time" className="time" value={time} /> */}
            <input onClick={submit} type="submit" value="create" className="submit" />
        </form>
    );
}

export default Input;