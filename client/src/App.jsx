import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const App = () => {
  return (
    <div className='container'>
      <form className="container__signin">
        <h4>Sign in</h4>
        <div className="container__signin--links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <span>or use your account</span>
        <input type="email" name="email" id="email" placeholder='Email'/>
        <input type="password" name="password" id="password" placeholder='Password'/>
        <a href="#" id='forgot'>Forgot your password?</a>
        <button type='submit'>SIGN IN</button>
      </form>
      <form className='container__signup'>
        <h4>Sign up</h4>
        <div className="container__signup--links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGooglePlusG /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" name="name" id="name" placeholder='Name'/>
        <input type="email" name="email" id="email" placeholder='Email'/>
        <input type="password" name="password" id="password" placeholder='Password'/>
        <button type='submit'>SIGN UP</button>
      </form>
      <div className="container__hello">
        <h1>Hello, Friend</h1>
        <p>Enter your personal details and start your journey with us</p>
        <button>SIGN UP</button>
      </div>
      <div className="container__welcome">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button>SIGN IN</button>
      </div>
    </div>
  )
}

export default App
