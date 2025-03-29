import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([
    {
      user: "aayushi",
      description: "This is test todo",
      status: false,
    },
  ]);

  function onClickHandle() {
    setCount(count + 1);
  }

  function addTodo(){
    let newArr = [...todos];
    newArr.push({
      user : "NewUser",
      description : "New Todo",
      status : false
    })
    setTodos(newArr);
  }

  return (
    <div>
      {/* <ButtonComp count={count} setCount={setCount}/> */}
      <ButtonComp onClickHandle={onClickHandle} count={count} />
      <br/>
      <br/>
      <br/>
      <AddTodoButtonComp addTodo={addTodo}></AddTodoButtonComp>
      {todos.map((todo) => (
        <TodoComp user={todo.user} description={todo.description} status={todo.status}></TodoComp>
      ))}
    </div>
  );
}

function ButtonComp(props) {
  return <button onClick={props.onClickHandle}>Counter {props.count}</button>;
}

function AddTodoButtonComp(props){
  return <button onClick={props.addTodo}>Add Todo</button>
}

function TodoComp(props) {
  return <div>
      <h1>User : {props.user}</h1>
      <p>Description : {props.description}</p>
      <p> STATUS : {props.status ? "Todo is done" : "Todo is pending.."} </p>
    </div>
  
}
export default App;
