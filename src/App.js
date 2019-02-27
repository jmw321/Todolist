  import React, {Component  } from 'react';
  import './App.css';
  import Card from './Card.js';
  import Menu from './Menu.js';
  import Form from './TaskForm.js';
  import CardForm from './CardForm.js';



  var value ='' ;
  var cardAdd = false;
  var addShow = false;
  var menuShow = false;
  var boardItems = [{
      id: 0,
      name: "Aubrey",
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
var selectValue = boardItems[0].name;


  class App extends Component {
    constructor (props) {
      super(props);
      this.state = {boardItems,addShow,menuShow,value,selectValue,cardAdd}
    }


    handleChange = (event) => {
      this.setState({value:event.target.value})

    }

    handleSelect = (event) => {
      this.setState({selectValue: event.target.value})
    }

    addTaskClick = (event) => {
      let newBoardItems = [...this.state.boardItems];
      event.preventDefault()
      console.log(this.state.selectValue)
      newBoardItems.map(item => item.name === this.state.selectValue && item.items.push(this.state.value))
      this.setState({boardItems:newBoardItems})
      this.setState({value:''})

    }

    addFormClick = (event) => {
      event.preventDefault()
      this.setState({boardItems: [...this.state.boardItems, {id:this.state.boardItems.length,name:this.state.value,items:[]} ]})
      this.setState({value:'',cardAdd:false})


    }

    showMenuClick =  () => {
       this.state.menuShow === true? this.setState({menuShow:false}) : this.setState({menuShow:true});
    }

    showAddClick =  () => {
       this.state.addShow === true? this.setState({addShow:false}) : this.setState({addShow:true});
    }

    showFormMenu = (event) => {
      console.log(event.target.id)
        event.target.id === "1" && this.setState({addShow:true,menuShow:false})
        event.target.id === "0" && this.setState({addShow:false,menuShow:false,cardAdd:false})
        event.target.id === "2" && this.setState({cardAdd:true, menuShow:false})
    }

    deleteItem = (event) => {
      let newBoardItems = [...this.state.boardItems];
      newBoardItems.map(item => item.id === Number(event.target.id) &&  item.items.splice(event.target.getAttribute('index'),1) )
      this.setState({boardItems:newBoardItems})
    }

    closeCardForm =  () => {
      this.setState({cardAdd:false})
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
       {CardForm(this.state.cardAdd,this.state.value,this.addFormClick, this.handleChange, this.closeCardForm)}
       {Form(this.state.addShow,this.showAddClick,this.state.boardItems,this.state.value,this.addTaskClick,this.handleChange,this.state.selectValue,this.handleSelect)}
          {
            this.state.boardItems.map(item => Card(item.name, item, item.id, this.deleteItem))
         }
      </main>
  </div>
      );
    }
  }

  export default App;
