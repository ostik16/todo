import React , {useState, useEffect} from "react";
import Input from "./components/Input";
import ToDos from "./components/ToDos";
import './App.css';

function App() {
  const [heading, setHeading] = useState("");
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  function checkAlarm(){
    todos.map(item => {
      let time = new Date().getTime();
      // console.log(time);
      // console.log(Date(item.notificationTime) + " " + Date(time));
      if(item.notificationTime <= time){
        if(item.notificationTime !== 0){
          alert(item.text);
          item.notificationTime = 0;
          setTodos(todos);
          localStorage.setItem('notes', JSON.stringify(todos));
        }
      }
    })
  }

  function positions(){
    setTodos(todos.map(item => {
        return{
            ...item, position: todos.indexOf(item)
        }
    }))
  }

  useEffect(() => {
    const interval = setInterval(() => {
        checkAlarm();
        // positions();
        // console.log("checking");
    }, 1000);
    return () => clearInterval(interval);
    }, []);

  return (
    <div className="App">
      <Input input={input} setInput={setInput} todos={todos} setTodos={setTodos} heading={heading} setHeading={setHeading} />
      <ToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
