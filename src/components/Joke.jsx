import { useState } from 'react'

function Joke() {
  const [ setup, setSetup ] = useState('')
  const [ punchline, setPunchline ] = useState('')
  const [ show, setShow ] = useState (false)

  const loadJoke = async function() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await res.json()
    setShow(false)
    setSetup(data.setup)
    setPunchline(data.punchline)
  }

  return (
      <>
        <button
        type = 'button'
        onClick = {loadJoke}>
          Load a joke
        </button>
        <p>{setup}</p>
        <button onClick = {() => {setShow(!show)}}>{show ? 'Hide' : 'Show'}</button>
        <p>{show && punchline}</p>
      </>
  )
}

export default Joke