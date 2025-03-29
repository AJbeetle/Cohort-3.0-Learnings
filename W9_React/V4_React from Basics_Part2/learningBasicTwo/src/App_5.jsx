import React, { Component } from 'react';
import {useState} from 'react';

function App(){
    const [isCompShown, setCompShown] = useState(false);

    return (
        <div>
            {/* {isCompShown && <MyComp></MyComp>} */}
            <ErrorBoundary>
                <Card1></Card1>
            </ErrorBoundary>
            <Card2></Card2>
        </div>
    )
}

function Card1(){

    useEffect(function(){
        throw new Error("Error while rendering")
    },[])
    return (
        <div style={{background:"red", borderRadius:20, padding:10, margin:10}}>
            hi There
        </div>
    )
}

function Card2(){
    return (
        <div style={{background:"red", borderRadius:20, padding:10, margin:10}}>
            Hello People
        </div>
    )
}


class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError : false};

    }

    static getDerivedStateFromError(error){
        return {hasError : true};
    }

    componentDidCatch(error, info){
        console.error("Error caught : ",error,info);
    }

    render(){
        if(this.state.hasError){
            return (
                <div style={{background:"red", borderRadius:20, padding:10, margin:10}}>
                        THERE SOME ERROR WHILE RENDERING,
                        <br/>
                        <br/>
                        <br/>
                        SOMETHING WENT WRONG :(
                    </div>
            )
        }
        return this.props.children;
    }
}

export default App