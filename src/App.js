  import React, {Component  } from 'react';
  import './App.css';
  import Card from './Card.js';
  import Menu from './Menu.js';
  import Form from './TaskForm.js';

  var addShow = false;
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
      this.showAddClick = this.showAddClick.bind(this)
      this.showFormMenu = this.showFormMenu.bind(this)
    }



    showMenuClick () {
       this.state.menuShow === true? this.setState({menuShow:false}) : this.setState({menuShow:true});
    }

    showAddClick () {
       this.state.addShow === true? this.setState({addShow:false}) : this.setState({addShow:true});
    }

    showFormMenu (event) {
      console.log(event.target.id)
        event.target.id === "1" && this.setState({addShow:true,menuShow:false})
    }


    render() {

      return (
    <div className = "App" >
      <header >
          <button className = "menuButton"  onClick={this.showMenuClick} >
            <i class = "fas fa-bars fa-2x"id = "menuIcon" > < /i>
          </button>
            <h1>  Task Board </h1>
          <button className = "addButton" onClick={this.showAddClick} >
            <i class = "fas fa-plus fa-2x"  id = "addIcon" > < /i>
          </button>
      </header >
       < Menu menuShow = {this.state.menuShow} menuClick={this.showFormMenu}/>
       <main className = "mainContent" >
       <Form  formshow = {this.state.addShow} showClick={this.showAddClick} />
          {
            boardItems.map(item => Card(item.name, item.items))
         }
      </main>
  </div>
      );
    }
  }

  export default App;
