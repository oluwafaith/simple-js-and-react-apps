import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";
function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
     
  
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked', email, password);
        
    }
    return (
      <div className="container">
        <h1>Create An Account</h1>
        <p>
          Create an account to enjoy all the services
          <br /> without any ads for free!
        </p>
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="email address"
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="password"
        />
        <button type="submit" onClick={handleSubmit}>
          Create Account
        </button>
        <p>
          Already Have An Account?
          <Link to="./login" >
            Login
          </Link>
        </p>
      </div>
    );
}

export default Signup;
