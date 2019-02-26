  import React, {Component} from 'react';
  import './App.css';

  const Card = ((name, items, id, deletes) => {
        return (
          <div className = "card"  id = {id}>
             <h2 className = "cardHeader" >   {name} </h2>
             <div className = "innerCard" >
               <button id = "leftButton" className = "cardButton" >
                   <i class = "fas fa-chevron-left" > < /i>
               </button >
            <ul onClick={deletes}> {items.items.map(item => < li className = "cardItemList"  > {item} <button className="cardItemDelete" id={items.id} index={items.items.indexOf(item)} > <i class="fas fa-minus"></i> </button>< /li>)} </ul >
               <button id = "rightButton" className = "cardButton" >
                  <i class = "fas fa-chevron-right" > < /i>
               </button >
            </div>
         </div>
            )
          }
        )


        export default Card;
