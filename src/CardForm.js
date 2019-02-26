import React, {Component} from 'react';
import './App.css';


var CardForm = ((cardShow,value,addFormClick,handleChange) => { return (
   cardShow === true &&
   <div className="form">
   <button className="close"  > <i class="far fa-window-close fa-2x"></i> </button>
     <form onSubmit={addFormClick} >
     Enter Name:
       <input className="textInput" type="text" value={value} onChange={handleChange}>
       </input>
       <br/> <br/>
       <input className="formSubmit" type="submit" value="Submit">
       </input>
     </form>
   </div>
 )
 }
)
export default CardForm;
