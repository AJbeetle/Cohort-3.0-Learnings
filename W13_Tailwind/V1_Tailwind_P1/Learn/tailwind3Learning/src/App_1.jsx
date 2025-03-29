import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // flex in tailwind
   /*  <div className="flex justify-center">
      <div className = "bg-blue-800 ">
        child 1
      </div>
      <div className = "bg-blue-300" >
        child 2
      </div>
      <div className = "bg-blue-600" >
        child 3
      </div>
    </div> */

    //Grid in tailwind

    /* <div className="grid grid-cols-12">
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-blue-300">content 1</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-red-300">content 2</div>
      <div className = "col-span-2 border-2 my-10 border-solid border-red-500 bg-green-300">content 3</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-blue-300">content 4</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-red-300">content 5</div>
      <div className = "col-span-2 border-2 my-10 border-solid border-red-500 bg-green-300">content 6</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-blue-300">content 7</div>
      <div className = "col-span-5  border-2 my-10 border-solid border-red-500 bg-red-300">content 8</div>
    </div> */

    //RESPONSIVENESS

    /* <div className="grid grid-cols-12">
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-blue-300">content 1</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-red-300">content 2</div>
      <div className = "col-span-2 border-2 my-10 border-solid border-red-500 bg-green-300">content 3</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-blue-300">content 4</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-red-300">content 5</div>
      <div className = "col-span-2 border-2 my-10 border-solid border-red-500 bg-green-300">content 6</div>
      <div className = "col-span-5 border-2 my-10 border-solid border-red-500 bg-blue-300">content 7</div>
      <div className = "col-span-5  border-2 my-10 border-solid border-red-500 bg-red-300">content 8</div>
    </div> */

    // <div className="sm:bg-blue-300 bg-red-300">  [it appears like screen will be blue for small screens less than equal 640px and red for larger] but this does not work as expected, it is blue in larger part of screen and gets red for smaller screen sizes
    <div className="md:bg-red-300 bg-blue-300">
      hi there
    </div>

    // MINI  ASSIGNMENT IN CLASS - App_2.jsx

  )
}

export default App
