import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = {name, email, password}
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
      console.log(response.data)
    } catch (error) {
      console.log(`Error ${error}`)
    }
  }
  const handleChange = (e) =>{
    setPassword(e.target.value)
    if (password.length < 7){
      setError('Password must be at least 8 characters')
    }
    else{
      setError('')
    }
  }

  return (
    <>
     <form className='container__signup' onSubmit={handleSubmit}>
        <h4>Sign up</h4>
        <div className="container__signup--links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" name="name" id="name" placeholder='Name' required onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="email" name="email" id="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" name="password" id="password" placeholder='Password' onChange={handleChange} required value={password}/>
        <span id="span">{error}</span>
        <button type='submit'>SIGN UP</button>
      </form> 
    </>
  )
}

export default SignUp
