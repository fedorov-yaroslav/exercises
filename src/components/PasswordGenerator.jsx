import { useState } from 'react'

function PasswordGenarator(){
  const [password, setPassword ] = useState('')
  const [length, setLength] = useState(14)
  const [includeSymbols, setIncludeSymbols ] = useState(false)

  function generatePassword(){
    let newArray = []
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    if (includeSymbols) {
      chars += '!@#$%^&*()_+<>?:"}{|'
    }

      for ( let i = 0; i < length; i++){
        newArray[i] = chars[Math.floor(Math.random()*chars.length)]
      }

    setPassword(newArray.join(''))
  }

  return (
        <div className = 'container'>
          <h2 className = 'h2'>Генератор паролей</h2>
          <input className = 'input' type="text" disabled value = {password}/>
          <div>
            <label htmlFor="length">Длина пароля:</label>
            <select
                name=""
                id="length"
                className='select'
                value = {length}
                onChange = {(e) => setLength(Number(e.target.value))}>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <label htmlFor="useSymbols">Использовать спецсимволы:</label>
            <input type="checkbox" id='useSymbols' className='checkbox'
                   checked = {includeSymbols}
                   onChange = {(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>

          <button onClick = {generatePassword} className = 'generate-button'>Сгенерировать пароль</button>
        </div>
  )
}

export default PasswordGenarator