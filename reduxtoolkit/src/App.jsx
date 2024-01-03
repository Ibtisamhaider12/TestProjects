import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './conponents/addTodo'
import Todos from './conponents/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Redux ToolKit</h1>
    <AddTodo/>
    <Todos/>
   </>
  )
}

export default App
