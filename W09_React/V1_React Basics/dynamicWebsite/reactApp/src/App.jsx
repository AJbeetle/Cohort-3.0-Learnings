import {useState} from "react";
import "./App.css"

export default function App(){
    /* gives error */
    // return {
    //     <main>
    //     React + Vite + Replit
    //     </main>
    // }

    const [count, setCount] = useState(0); //use state hook : we learnt this today. So anything that any function starts from use is hooks in REACT . For now we have used useState() hook only there are more


    // useState(0) is a function that returns array, returns you two things so you can also write it like :


    // const [count, setCount] = useState(0) is set to be const but in function onClickHandler() we update setCount(count+1), how is it possible is useState(0) mutable or not

    // ans to this is : useState(0) is mutable and why are we able to change it even being a const is : even though array is immuatble the internal values of array can be changed 

    /* const stateVariable = useState(0);
    const count = stateVariable[0];
    const setCount = stateVariable[1]; */

    // shorter way is destructuring useState  => const [count, setCount] = useState(0)

    function onClickHandler(){
        //Dumb way of doing updates in DOM
        // so we never DOM manipulation in react only in some special cases should we do updation of DOM ourself, most of the time it is to be done through state management

        /* const button = document.getElementById("domManip");
        const count = button.innerHTML.split(" ")[1];
        const newCount = count+1;
        document.getElementById("domManip").innerHTML = `Counter ${newCount}`; */

        // count = count +1; // not correct it will not trigger re render
        setCount(count+1);

    }


    // return React.createElement('div','hithere')
    
    return <div>
             {/* <h1>Your React App</h1> */}
             {/* <b>Hi There</b> */}
             {/* <button id="domManip" onClick={onClickHandler}>Counter 1</button> */}
             <button id="domManip" onClick={onClickHandler}>Counter ${count}</button>
         </div>

     // OR you can use Button component that you made to be returned

    return <Button onClickHandler={onClickHandler}></Button> 

}

function Button(props){
    return <button onClick={props.onClickHandler}>Counter {props.count} </button>
}


// export default App 