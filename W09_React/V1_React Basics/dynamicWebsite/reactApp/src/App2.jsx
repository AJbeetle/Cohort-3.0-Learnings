import {useState} from "react";
import "./App.css"

function AppTwo(){

    // const [todos, setTodos] = useState([]);  // empty Array initially

    const [todos, setTodos] = useState([
        {
            title : "go to gym",
            description : "hit the gym regularly",
            done : false
        }
    ])

    function addTodo(){
        alert("Hi there");

        // Easier way to do is after the commented part
        /* let newArray = [];
        for(let i=0; i<todos.length;i++){
            newArray.push(todos[i]); 
        } */

        let newArray = [...todos];
        newArray.push({
            title : document.getElementById("title").value,
            description : document.getElementById("description"),
            done : false
        });

        //setTodos(0)  //if you call setTodos with 0 the todos will become 0

        //setTodos([]) //if you call setTodos with empty array the todos will become an empty array'

        setTodos(newArray); //here you cann setTodos with newArray so todos becomes the updated array

        // setTodos(todos + 1) // cannot be done because todos are not just a simple variable
    }

    return (
        <div>
            <input id="title" type="text" placeholder="TITLE"></input>
            <input id="description" type="text" placeholder="DESCRIPTION"></input>
            <br/>

            {/* This is how you can do forms , best for performance but as dom manipulation manually is not a good approach we have other hooks in react to use like : useRef, react-hook-forms or use stateVariables */}
            <button onClick={addTodo}>Add a todo</button>
            {/* ugly way of rendering todo */}
            {JSON.stringify(todos)}

            {/* Rendering todo in some good fashion, so defining a component todo */}

            {/* using the todo Component */}

            {/* <todoComponent title={"Aayushi"} description={"This is my todo"} done={false}></todoComponent> */}

            {/* <todoComponent title={todos[0].title} description={todos[0].description} done={todos[0].done}></todoComponent> */}

            {todos.map(todo => {
                <todoComponent title={todo.title} description={todo.description} done={todo.done}></todoComponent>
            })}
        </div>
    );
}

function todoComponent(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        {/* <h3>{props.done}</h3>  since booleans are not rendered so use following way */}
        <h3>{props.done ? "Task is done" : "Task is not done"}</h3>  
    </div>
}



export default AppTwo