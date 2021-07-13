import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./styles.css";

function NavDropDown() {
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
      <div className="profile " onClick={(e) => setOpen(!open)}>
        <p>Me</p>
        <RiArrowDropDownLine style={{ cursor: "pointer", fontSize: "30px" }} />
      </div>

      {open && (
        <ul className="listContainer">
          <li
            className="listItem"
            onClick={() => history.push("/updateHairProfile")}
          >
            Update my profile
          </li>
          <li
            className="listItem"
            onClick={() => history.push("/createprofile")}
          >
            Orders
          </li>
          <li
            className="listItem"
            onClick={() => history.push("/createaccount")}
          >
            Account Settings
          </li>
          <li className="listItem" onClick={handleSignOut}>
            Sign out
          </li>
        </ul>
      )}
    </div>
  );
}

export default NavDropDown;
