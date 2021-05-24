import { useState } from "react";
import "./login.css";
function Login() {
  const [data, setData] = useState("");

  const handleValue = (e) => {
    e.target.value();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="container">
      <h1>Create An Account</h1>
      
      <input type="text" onChange={handleValue} placeholder="email address" />
      <input type="text" onChange={handleValue} placeholder="password" />
      <button type="submit" onClick={handleSubmit}>
         Login
      </button>
      <p>Don't Have An Account? Sign Up</p>
    </div>
  );
}

export default Login;
