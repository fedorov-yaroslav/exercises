import { useState } from 'react'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage ] = useState('')
  const [role, setRole] = useState('')
  const [topic, setTopic] = useState('Bug')
  const [termsAgreement, setTermsAgreement] = useState(false)

  const sendData = () => {
    console.log(name, email, message, role, topic, termsAgreement)


  }

  return (
      <div className = 'form-container'>
        <form onSubmit = {(e) =>{ e.preventDefault(); sendData() }}>
          <input type="text" placeholder='name' value={name}
                 onChange = {(e) => setName(e.target.value)}/>
          <input type="email" placeholder='email' value = {email}
                 onChange = {(e) => setEmail(e.target.value)}/>

          <textarea name="" id="" cols="30" rows="10" placeholder='Message'
                    value = {message} onChange = {(e) => setMessage(e.target.value)}
          ></textarea>

          <div>
            <h3>Role</h3>
            <label htmlFor="User">User
              <input type="radio" value='User' name='role' id='User'
                     checked={role === 'User'}
                     onChange = {(e) => setRole(e.target.value)}/>
            </label>

            <label htmlFor="Developer">Developer
              <input type="radio" value='Developer' name='role' id='Developer'
                     checked={role === 'Developer'}
                     onChange = {(e) => setRole(e.target.value)}
              />
            </label>

            <label htmlFor="Manager">Manager
              <input type="radio" value='Manager' name='role' id='Manager'
                     checked={role === 'Manager'}
                     onChange = {(e) => setRole(e.target.value)}
              />
            </label>
          </div>

          <select name="" id="" value = {topic}
                  onChange = {(e) => setTopic(e.target.value)}>
            <option value="Bug">Bug</option>
            <option value="Feature request">Feature request</option>
            <option value="Question">Question</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="terms-agreement">I agree with terms</label>
          <input type="checkbox" id='terms-agreement'
                 checked={termsAgreement}
                 onChange = {(e) => setTermsAgreement(e.target.checked)}
                 required
          />

          <input type="submit" value = 'Отправить'/>
        </form>

      </div>
  )
}

export default ContactForm