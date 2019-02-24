  import React, {Component  } from 'react';
  import './App.css';
  import Card from './Card.js';
  import Menu from './Menu.js';

  var addShow = true;
  var menuShow = false;
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
    constructor (props) {
      super(props);
      this.state = {boardItems,addShow,menuShow}
      this.showMenuClick = this.showMenuClick.bind(this)
    }



    showMenuClick () {
     console.log(this.state.menuShow)
       this.state.menuShow === true? this.setState({menuShow:false}) : this.setState({menuShow:true});
    }


    render() {

      return (
    <div className = "App" >
      <header >
          <button className = "menuButton"  onClick={this.showMenuClick} >
            <i class = "fas fa-bars fa-2x"id = "menuIcon" > < /i>
          </button>
            <h1>  Task Board </h1>
          <button className = "addButton" >
            <i class = "fas fa-plus fa-2x"  id = "addIcon" > < /i>
          </button>
      </header >
      {Menu(this.state.menuShow)}
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
