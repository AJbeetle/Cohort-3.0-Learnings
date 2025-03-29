import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"   //HashRouter : used for creating extensions in browser

// so there are different routers that you can use , since we need simple navigation so we are using browser router

function App() {
    const router = [
        {
            path : "/",
            element : <LandingPage></LandingPage>
        },
        {
            path : "/neet/online-coaching-11",
            element : <Class11ProgramNeet></Class11ProgramNeet>
        },
        {
            path : "/neet/online-coaching-12",
            element : <Class12ProgramNeet></Class12ProgramNeet>
        },
        {
            path : "*",
            element : <ErrorPage></ErrorPage>
        }
    ]
  return (
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Layout/>}>
    //           {/* [ */}
    //           <Route index element={<LandingPage></LandingPage>}/>
    //           <Route path="neet/online-coaching-11" element={<Class11ProgramNeet/>}></Route>
    //           <Route path="neet/online-coaching-12" element={<Class12ProgramNeet/>}></Route>
    //           <Route path="*" element={<ErrorPage></ErrorPage>}/>
    //           {/* ] */}


    //       </Route>
    //     </Routes>
    // </BrowserRouter>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout></Layout>}>
                {router.map((route,index) => {
                   return <Route key={index} path={route.path} element={route.element}/>
                })}
            </Route>
        </Routes>
    </BrowserRouter>
  )
}


function Layout(){
    return(
        <div>
            <div> 
                <Link to="/">ALLEN</Link> <br/>
                <Link to="/neet/online-coaching-11">CLASS11</Link> <br/>
                <Link to="/neet/online-coaching-12">CLASS12</Link>
                <h1>ALLEN WEBSITE</h1>
            </div>
            <Outlet />
            <div>
                <footer>Allen @2024  |  Contact  | Email </footer>
            </div>
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
