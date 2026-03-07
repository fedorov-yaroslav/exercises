import { useState, useRef } from 'react'

function ChangeColorRef() {
  const reference = useRef(null)


  return (
      <>
        <div className = "square" ref={reference}>
        </div>
        <button onClick = {() => {reference.current.style.background = 'red'}}>ChangeColor</button>
      </>
  )
}

export default ChangeColorRef