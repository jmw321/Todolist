import React, {Component  } from 'react';
import './App.css';


const Menu = ((menuShow) => { return (
  menuShow === true &&
  <div className="menu">
    <ul className="menuList">
        <li className="menuItem">Home</li>
        <li className="menuItem">Add Task</li>
      </ul>
    </div>
  )
}
)
export default Menu;
