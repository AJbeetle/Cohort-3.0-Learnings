import React, { Component } from 'react';

function App(){
    return (
        <div>
            <ClassCounter></ClassCounter>
        </div>
    )
}

class ClassCounter extends Component {
    // state = { count: 0 , todos :[ ], newStateVariabl : false };  //this is how stateVariables are stored


    state = { count: 0};

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


export default App