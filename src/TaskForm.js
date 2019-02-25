import React, {Component} from 'react';
import './App.css';


var Form = ((addShow,showAddClick,boardItems,value,handleSubmit,handleChange,selectValue,handleSelect) => { return (
   addShow === true &&
   <div className="form">
   <button className="close" onClick={showAddClick} > X </button>
     <form onSubmit={handleSubmit} >
     Select Card: <br/>
     <select className="boardItemsOptions" value={selectValue} onChange={handleSelect}>
     {boardItems.map(item => <option id={item.id}> {item.name} </option> )}
    </select> <br/>
     Enter Task: <br/>
       <input className="textInput" type="text" value={value} onChange={handleChange}>
       </input>
       <input type="submit" value="Submit">

       </input>
     </form>
   </div>
 )
 }
)
export default Form;
