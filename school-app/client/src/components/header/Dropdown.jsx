import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";

function Dropdown() {
    let history = useHistory();

     const handleSignOut = () => {
       localStorage.clear();
       history.push("/");
     };
    
    const node = useRef();
    
    const [open, setOpen] = useState(false);

     const handleClick = (e) => {
       if (node.current.contains(e.target)) {
         return;
       }
       setOpen(false);
     };
    
     useEffect(() => {
       document.addEventListener("mousedown", handleClick);

       return () => {
         document.removeEventListener("mousedown", handleClick);
       };
     }, []);
    
    return (
      <div className="dropdown" ref={node}>
        <div className="profile" onClick={(e) => setOpen(!open)}>
          <p>Student Portal</p>
          <RiArrowDropDownLine
            style={{ cursor: "pointer", fontSize: "30px" }}
          />
        </div>

        {open && (
          <ul className="listContainer">
            <li className="listItem" onClick={() => history.push("/signup")}>
              signup
            </li>
            <li
              className="listItem"
              onClick={() => history.push("/login")}
            >
              login
            </li>
            <li className="listItem">forgotpassword</li>
            <li className="listItem">logout</li>
          </ul>
        )}
      </div>
    );
}

export default Dropdown
