import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SidebarClass1 } from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SidebarClass1></SidebarClass1>
    </>
  )
}

export default App
