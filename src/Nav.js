import React, { useState, useEffect }from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrolly > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.remoceEventListener("scroll");
    };

    }, []);
   
    return (
    <div classname={`nav ${show && "nav__black"}`}>
      <img 
      className="nav__logo"
      src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" 
      alt="Netflix Logo"/>

      <img 
      className="nav__avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt="Netflix Logo"/> 
    
      
    </div>
  )
}

export default Nav
