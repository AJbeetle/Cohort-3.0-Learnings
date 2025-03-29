import { useState } from "react";


function App(){

    const[count, SetCount] = useState(0);

    function onClickHandle(){
        SetCount(count+1);
    }
    
    return <div>
        <Button count={count}></Button>
    </div>
}

function Button(props){
    return <button onClick={onClickHandle}>Counter {props.count}</button>
}


export default App;
