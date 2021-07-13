import React from 'react'
import Axios from "axios"

function Dashboard() {

    const checkdeezar = (e) => {
        e.preventDefault()
        console.log("clicked");
        Axios.get("genre").then((response) => {
          console.log(response);
        });
    }
    return (
      <div>
        <button onClick={checkdeezar}>you are welcome</button>
      </div>
    );
}

export default Dashboard
