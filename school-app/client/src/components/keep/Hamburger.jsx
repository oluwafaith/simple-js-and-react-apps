import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css"

function Hamburger() {
  let history = useHistory();

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
    <div className="hamburgerContainerOne" ref={node}>
      <div className="hamcontainer">
        <img
          src="/images/hamburgerMenu.png"
          onClick={(e) => setOpen(!open)}
          alt="hamburger"
        />
      </div>
      <div>
        {open && (
          <ul className="hamburgerContainer">
            <li
              onClick={() => history.push("/dashboard")}
              className="hamburgerItem"
            >
              Products
            </li>
            <li
              onClick={() => history.push("/dashboard/journal")}
              className="hamburgerItem"
            >
              Journal
            </li>
            <li
              onClick={() => history.push("/dashboard/community")}
              className="hamburgerItem"
            >
              Community
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Hamburger;
