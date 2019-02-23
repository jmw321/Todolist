  import React, {Component  } from 'react';
  import './App.css';
  import Card from './Card.js';

  var boardItems = [{
      id: 0,
      name: "Amy",
      items: ["a", "b"]
    },
    {
      id: 1,
      name: "Sean",
      items: ["c", "d"]
    },
    {
      id: 2,
      name: "Ethan",
      items: ["e", "f"]
    },

  ]



  class App extends Component {
    render() {
      return (
    <div className = "App" >
      <header >
          <button className = "menuButton" >
            <i class = "fas fa-bars fa-2x"id = "menuIcon" > < /i>
          </button>
              Task Board
          <button className = "addButton" >
            <i class = "fas fa-plus fa-2x"  id = "addIcon" > < /i>
          </button>
      </header >
       <main className = "mainContent" >
          {
            boardItems.map(item => Card(item.name, item.items))
         }
      </main>
  </div>
      );
    }
  }

  export default App;
