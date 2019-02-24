import React, {Component  } from 'react';
import './App.css';


var Form = ((addShow,showAddClick,boardItems,value,handleSubmit,handleChange,selectValue,handleSelect) => { return (
   addShow === true &&
   <div className="form">
   <button className="close" onClick={showAddClick} > X </button>
     <form onSubmit={handleSubmit} >
     <select className="boardItemsOptions" value={selectValue} onChange={handleSelect}>
     {boardItems.map(item => <option id={item.id}> {item.name} </option> )}
    </select>
       <input type="text" value={value} onChange={handleChange}>
       </input>
       <input type="submit" value="Submit">

       </input>
     </form>
   </div>
 )
 }
)
export default Form;
