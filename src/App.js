import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';
import Users from './users/Users';


class App extends Component {
  

  render() {
    
    return (
      <div className="App">
        <Users title="Lista de usuarios" age/>
      </div>
    );
  }
}

export default App;
