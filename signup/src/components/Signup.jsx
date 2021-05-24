import {useState}  from "react";
import "./signup.css";
function Signup() {
    const [data, setData] = useState("")
    
    const handleValue = (e) => {
        e.target.value();
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked');
        
    }
    return (
      <div className="container">
        <h1>Create An Account</h1>
        <p>
          Create an account to enjoy all the services
          <br /> without any ads for free!
        </p>
        <input type="text" onChange={handleValue} placeholder="email address" />
        <input type="text" onChange={handleValue} placeholder="password" />
        <button type="submit" onClick={handleSubmit}>Create Account</button>
        <p>Already Have An Account? Sign In</p>
      </div>
    );
}

export default Signup;
