import './App.css'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';

const App = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () =>{
    setOpen(!open)
  }
  return (
    <div className='container'>
      <SignIn />
      <SignUp />
      <div className={`container__hello  ${open ? 'close' : 'open'}`}>
        <h1>Hello, Friend</h1>
        <p>Enter your personal details and start your journey with us</p>
        <button onClick={handleClick}>SIGN UP</button>
      </div> 
      <div className={`container__welcome ${open ? 'open' : 'close'}`} >
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button onClick={handleClick}>SIGN IN</button>
      </div>
    </div>
  )
}

export default App
