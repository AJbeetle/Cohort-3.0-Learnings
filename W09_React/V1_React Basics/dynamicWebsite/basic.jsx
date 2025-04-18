

function Button(props){
    function onButtonClick(){
        props.setCount(count+1);
    }

    /* return React.createElement(
        'button',
        {onClick : onButtonClick},
        `Counter ${props.count}`
    ); */


    //above syntax is same as what I will write below but consise version

    return <button onClick={onButtonClick}>Counter {props.count}</button>  //this converts to above code eventually


    //here we have no trigerring-re render function that react takes care of , we will see soon how

    //jsx is cleaner way to write components  : so above code is pure JS [a function that returns something from another function call] but the second way is JSX . So this is XML , function returning some xml to you, this is something that React DOM renderer understands [we do smae thing in react native too]

    //moving on to new File to write whole code for counter app -> go to folder ./dynamicWebsite/reactApp

}