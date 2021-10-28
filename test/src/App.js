import logo from "./logo.svg";
import Axios from "axios"
import "./App.css";

function App() {
  const checkdeezar = (e) => {
    e.preventDefault();
    console.log("clicked");
    Axios.get("genre").then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={checkdeezar}> you are welcome </button>{" "}
    </div>
  );
}

export default App;
