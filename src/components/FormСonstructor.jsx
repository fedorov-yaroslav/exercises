import { useState } from 'react'

function FormConstructor() {
  const [name, setName] = useState('')
  const [email, setEmail ] = useState('')
  const [age, setAge ] = useState('')
  const [description, setDescription ] = useState('')

  return (
      <div className = 'container'>
        <div className = 'form-container'>
          <input
              type="text"
              value = {name}
              onChange = {(e) => setName(e.target.value)}
          />
          <input
              type="email"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
          />
          <input
              type="number"
              value = {age}
              onChange = {(e) => setAge(e.target.value)}
          />
          <textarea
              value = {description}
              onChange = {(e) => setDescription(e.target.value)}
          />
          <input type="submit" value = 'Отправить данные' className = 'submit-button'/>
        </div>
        <div className = 'form-preview'>
          <p>{name}</p>
          <p>{email}</p>
          <p>{age}</p>
          <p>{description}</p>
        </div>
      </div>
  )
}

export default FormConstructor