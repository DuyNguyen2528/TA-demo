import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [info, setinfo] = useState({
    username: "",
    password: "",
  })
  function login_submit () {
    alert(`login_submit function called\n user name is ${info.username} password is ${info.password}`);
  }
  function handleChange(event) {
    const {name, value} = event.target;
      
        setinfo({[name]: value,});
      
      
  
  }
  return (
    <>
      <div className = "login-window">
        <h2 className= "login-text"> LOGIN</h2>        
        <input 
          id ="username"
          name ="username"
          type = "text" 
          placeholder='User Name' 
          value={info.UserName}
          onChange={handleChange}

        >
        </input>    
        <input 
          id = "password"
          name = "password"
          type = "password" 
          placeholder='User Password' 
          value = {info.UserPassword}
          onChange={handleChange}
          >
        </input>   
      </div>
      
      <div className="submit">
        <button className = "login" type='submit' onClick={login_submit}>Login</button>
      </div>
      
      
    </>
  )
}

export default App
