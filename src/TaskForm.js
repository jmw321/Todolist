import React, {Component} from 'react';
import './App.css';


var Form = ((addShow,showAddClick,boardItems,value,handleSubmit,handleChange,selectValue,handleSelect) => { return (
   addShow === true &&
   <div className="form">
   <button className="close" onClick={showAddClick} > <i class="far fa-window-close fa-2x"></i> </button>
     <form onSubmit={handleSubmit} >
     Select Card:
     <select className="boardItemsOptions" value={selectValue} onChange={handleSelect}>
     {boardItems.map(item => <option id={item.id}> {item.name} </option> )}
    </select> <br/> <br/>
     Enter Task:
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
export default Form;
