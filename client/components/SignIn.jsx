import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import PropTypes from 'prop-types'
import { useState } from "react";
import axios from 'axios'

const SignIn = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };

        try {
            const response = await axios.post('http://localhost:3000/api/users/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
  return (
    <>
     <form className="container__signin" onSubmit={handleSubmit}>
        <h4>Sign in</h4>
        <div className="container__signin--links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <span>or use your account</span>
        <input type="email" name="email" id="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" name="password" id="password" placeholder='Password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
        <a href="#" id='forgot'>Forgot your password?</a>
        <button type='submit'>SIGN IN</button>
      </form> 
    </>
  )
}
SignIn.propTypes = {
  onLogin: PropTypes.func.isRequired, // Ensure onLogin is a function and required
};

export default SignIn
