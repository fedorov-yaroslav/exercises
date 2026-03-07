import { useState, useRef } from 'react'

function Focus() {
  const [value, setValue ] = useState('')

  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const ref = useRef(null)

  return (
      <>
        <input type="text" ref={ref} value = {value} onChange = {handleValue}/>
        <button onClick = {() => ref.current.focus()}>Сфокусироваться на инпуте</button>
        <button onClick = {
          () => {setValue('')
            ref.current.focus()
          }}>Clear</button>
      </>
  )

}

export default Focus