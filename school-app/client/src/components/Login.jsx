import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="container">
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
        <Link to="./signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
