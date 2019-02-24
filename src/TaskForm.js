import React, {Component  } from 'react';
import './App.css';


class Form extends Component {
render () { return (
this.props.formshow === true &&
   <div className="form">
   <button className="close" onClick={this.props.showClick}> X </button>
     <form>
     <select>
      <option> Sean </option>
      <option> Ethan </option>
    </select>
       <input type="text">
       </input>
     </form>
   </div>
 )
 }
}
export default Form;
