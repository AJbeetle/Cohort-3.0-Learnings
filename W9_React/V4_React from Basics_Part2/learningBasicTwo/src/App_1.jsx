import {useState, useEffect} from 'react'

function App(){

  return (
    <div style={{background:"grey", padding:20}}>
      {/* <Card innerElem={<div>React</div>}></Card> */}
      {/* <Card innerElem={<div><ol>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        </ol>
        </div>}></Card> */}
      {/* <Card innerElem={<div>
        Write your name : &nbsp;
        <input type="text" placeholder="FIRST NAME"></input>
      </div>}></Card> */}

      <Card_two>
      <div>React</div>
      </Card_two>

       {/* you can also pass children as props REACT WON"T STOP YOU : BUT IT IS NOT CLEANER WAY*/}
      {/* <Card_two children={<div>React</div>}>     
      </Card_two> */}

      <Card_two>
        <div>
          <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ol>
        </div>
      </Card_two>
      <Card_two>
      <div>
        Write your name : &nbsp;
        <input type="text" placeholder="FIRST NAME"></input>
      </div>
      </Card_two>


    </div>
  )

}


// generic wrapper component : with simple react element as their argument : so for components like these where you know you want to wrap some inside some outer div some inner react component there you can use children prop, rather than naming it anything name it children everywhere and rather than giving the html like you give here just give it inside card :  so it will mean whatever children content Card component has will be taken and put to the generic component : see the next component Card_two
function Card({innerElem}){
  return (
    <div>
    <div style={{background:"black",borderRadius:10,color:"white", padding:10, margin:10, width:"fit-content"}}>
      {innerElem}
    </div>

    </div>
  )
}

// generic wrapper component with children prop : 
function Card_two({children}){
  return (
    <div style={{background:"black",borderRadius:10,color:"white",margin:10, padding:20, width:"fit-content"}}>
      Upper Top Bar :)
      {children}
      Lower Bottom Footer :(
    </div>
  )
}

//move to another app.jsx

export default App;
