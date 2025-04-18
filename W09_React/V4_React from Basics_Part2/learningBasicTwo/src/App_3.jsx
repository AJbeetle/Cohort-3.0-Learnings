import {useState, useEffect} from 'react'

function App(){
const todos = [
    {
        title : "go to gym",
        status : false
    },
    {
        title : "eat food",
        status : true
    }
]

const todoComponents = todos.map(todo => <Todo title={todo.title} status={todo.status}></Todo>)

return (
    <div>

        {/* /SO this way when you render this list, in console you will see an error : hook.js:608 
 Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://react.dev/link/warning-keys for more information. Error Component Stack
    at App (<anonymous>) */}


{/* It means you need to give each array item a key - a string or a number that uniquely identifies it amongs other items in that array  */}
{todoComponents}

<br></br>
<br></br>
<br></br>

<p>VISUAL REPRESENTATION OF todoscomponents</p>

{/* so basically your {todosComponent} is getting resolved as follows and each element in the array need to have key , this key will be nothing but the database id of the todo so uniquely identifying it*/}

{/* you can either ignore it, but it might create some performance downsides and rendering issues, just assume the  todoComponent is stateVariable and somehow state changes and the position of TODOS change then it will update DOM accordingly, and if it has no key and these things happen react won't know if to re-render or not */}

{/* also if you donot add key while rendering lists like this you may find inconsistency in frontend where it may be storing something which is not been coded or been deleted */}

            <div>
                {
                    [
                        <Todo key={1} title={todos[0].title} status={todos[0].status}></Todo>,
                        <Todo key={2} title={todos[1].title} status={todos[1].status}></Todo>
                    ]
                } 

            </div>
        
    </div>
)

}



function Todo({title, status}){
    return (<div>
        {title} - {status ? "DONE!" : "NOT DONE"}
    </div>)
}

export default App;
