import { useState } from 'react'
import './App.css'
import Fetch from './components/Fetch.jsx'
import RandomDogPicture from './components/RandomDogPicture.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomDogPicture />
    </>
  )
}

export default App
