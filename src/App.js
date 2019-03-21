import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';
import Users from './users/Users';


class App extends Component {
  state={
    name:'tehcsith'
  }

  changeName=(newName)=>{
    this.setState({
        name:newName,
    });
  }
  changeNameFromInput=(event)=>{
    this.setState({
        name:event.target.value,
    });
  }
  render() {
    
    return (
      <div className="App">
      <br/>
      <br/>
      <button onClick={()=>this.changeName("hola")}>change state</button>
      <button onClick={this.changeName.bind(this,'asdhghjasdj')}>change state</button>
      <br/>
      <br/>
      <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
      <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
