import React, {Component  } from 'react';
import './App.css';


const Form = ( (formshow) => {
 return ( formshow === true &&
   <div className="form">
     <form>
       <input type="text">
       </input>
     </form>
   </div>
  )
 }
)

export default Form;
