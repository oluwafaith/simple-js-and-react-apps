import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import Axios from "axios"
import Header from "../../components/header/index"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
     Axios.post("https://schoolserverapp.herokuapp.com/users/login", {
       email: email,
       password: password,
     }).then((response) => {
       if (response.data.message) {
         setLoginStatus(response.data.message);
          window.location.replace("/dashboard");
       }
     });

  };
  return (
    <>
      <Header />
      <div className="containerLogin">
        <h1>Login to your account</h1>

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
          Login
        </button>

        <p>
          Don't Have An Account? 
          <Link to="./signup" style={{color: "black"}}>  Sign up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
