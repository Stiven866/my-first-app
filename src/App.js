import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';


class App extends Component {
  state ={
    persons: [
      {name:'Stiven', age:20},
      {name:'Andres', age:67},
      {name:'Juan', age:6}
    ],
    otherState:'some other value'
  }

  handleSwitchName = (newName)=>{
    //console.log('Was clicked!')
    this.setState(
      {
        persons: [
          {name:newName, age:29},
          {name:'Juan Andres', age:6},
          {name:'Juan', age:66}
        ]
      }
    );
  }

  handleNameChange = (event) =>{
    this.setState(
      {
        persons: [
          {name:'Cuchito', age:29},
          {name:event.target.value, age:6},
          {name:'Juan', age:0}
        ]
      }
    );
  }

  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>hellokajshdjha</h1>
        <button 
          style={style}
          onClick={()=>this.handleSwitchName("jajaja")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={()=>this.handleSwitchName("jejejeej")}
          changed={this.handleNameChange}>Hello j:ajsdkjashd</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          />
      </div>
    );
  }
}

export default App;
