  import React, {Component} from 'react';
  import './App.css';

  const Card = ((name, items, id, deletes) => {
        return (
          <div className = "card"  id = {id}>
            <h2 className = "cardHeader" >   {name} </h2>
            <div className = "innerCard" >
                  <ul onClick={deletes}>
                    {items.items.map(item =>
                      < li className = "cardItemList"  > {item}
                        <button className="cardItemDelete" id={items.id} index={items.items.indexOf(item)} >
                            <i id={items.id}  index={items.items.indexOf(item)} class="fas fa-minus"></i>
                        </button>< /li>)}
                   </ul >
            </div>
         </div>
            )
          }
        )


        export default Card;
