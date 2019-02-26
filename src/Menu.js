import React, {Component  } from 'react';
import './App.css';


class Menu extends Component  {
  render ()   { return (
  this.props.menuShow === true &&
  <div className="menu">
    <ul className="menuList" onClick={this.props.menuClick}>
        <li className="menuItem" id="0"> <i class="fas fa-home"></i> Home</li>
        <li className="menuItem" id="1"> <i class = "fas fa-plus"/> Add Task</li>
      </ul>
    </div>
   )
 }
}
export default Menu;
