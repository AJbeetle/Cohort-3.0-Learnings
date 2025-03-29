import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom"   //HashRouter : used for creating extensions in browser

// so there are different routers that you can use , since we need simple navigation so we are using browser router

function App() {
  return (
    <div>

      {/* one way of doing navigation button is making it links to redirecting to pages | DUMB WAY TO DO NAVIGATIONS : it is because this way we get a loader while navigations : bad way of doing navigation : it takes away the advantage of SPAs*/}

      {/* It is because when we click on these links we are asking for whole frontend again i.e. refetching index.html everytime */}

      {/* so your react-router-dom library needs to import one MORE SUCH THING when you use that it makes navigation more cleaner : two ways to do this : link and navigate */}
      {/* <div>
        <a href="/">ALLEN</a> <br/>
        <a href="/neet/online-coaching-11">CLASS11</a> <br/>
        <a href="/neet/online-coaching-12">CLASS12</a>
      </div> */}


      {/* Here it does not work : so you cannot use Link outside BrowserRouter we will understand this more when we learn browser API */}
      {/* <div>
        <Link to="/">ALLEN</Link> <br/>
        <Link to="/neet/online-coaching-11">CLASS11</Link> <br/>
        <Link to="/neet/online-coaching-12">CLASS12</Link>
      </div> */}


      {/* ALLEN  |   CLASS11  | Class12 */}
      <BrowserRouter>
      <div>
        <Link to="/">ALLEN</Link> <br/>
        <Link to="/neet/online-coaching-11">CLASS11</Link> <br/>
        <Link to="/neet/online-coaching-12">CLASS12</Link>
      </div>
      {/* Another way to do this navigation better was using useNavigate hook */}
      {/* There can be two cases that person is navigating here and there in the website : 
          -> either they click to navigate through pages  : use Link function
          -> or assume that when user is in some payments page if they are inactive take them back to home page : so this kind of navigations : use useNavigate hook , it returns a function
      */}
      <Routes>
        {/* all routes will be defined here */}
        <Route path="/neet/online-coaching-11" element={<Class11ProgramNeet/>}></Route>
        <Route path="/neet/online-coaching-12" element={<Class12ProgramNeet/>}></Route>
        {/* ugly way to do landing page */}
        <Route path="/" element={<LandingPage></LandingPage>}/>
        <Route path="*" element={<ErrorPage></ErrorPage>}/>
      </Routes>
      <div>
        <footer> He there this is footer</footer>
      </div>
      </BrowserRouter>
    </div>
  )
}

function Class11ProgramNeet(){
  return (
    <>
      <h1>NEET PROGRAMS FOR CLASS 11th</h1>
    </>
  )
}
function Class12ProgramNeet(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/");
  }
  return (
    <>
      <h1>NEET PROGRAMS FOR CLASS 12th</h1>
      <button onClick={redirectUser}>GO TO HOME</button>
    </>
  )
}
function LandingPage(){
  return (
    <>
      <h1>LANDING PAGE GUYS</h1>
      <p>Wecome to Allen Website</p>
    </>
  )
}
function ErrorPage(){
  return (<div>
    404 NOT FOUND
  </div>)
}
export default App
