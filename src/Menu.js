import React, {Component  } from 'react';
import './App.css';


class Menu extends Component  {
  render ()   { return (
  this.props.menuShow === true &&
  <div className="menu">
    <ul className="menuList" onClick={this.props.menuClick}>
        <li className="menuItem" id="0">Home</li>
        <li className="menuItem" id="1">Add Task</li>
      </ul>
    </div>
   )
 }
}
export default Menu;
