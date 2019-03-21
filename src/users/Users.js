import React,{Component} from 'react';
import User from './User'
class Users extends Component{
    state={
        users:[
            {name:"Andrea", age: 20},
            {name:"Stiven", age: 30},
            {name:"Julian", age: 10},
            {name:"Felipe", age: 100},
            {name:"Andres", age: 11},
            {name:"Sara", age: 19},
            {name:"Ana", age: 36},
        ],
        title:"Lista de usuarios"
    }

    handlerMakeMeYounger = () =>{
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age-=10;
            return tempUser;
        });
        this.setState({
            newState
        });
    }
    render(){
        return (
            <div>
            <button onClick={this.handlerMakeMeYounger}>Disminuir edad</button>
            <h1>{this.state.title}</h1>
            {
                this.state.users.map((user, i)=>{
                    return( 
                    <User key={i} age={user.age}>{user.name}</User>
                    )
                })
            }
            </div>
            
            )
    }

};

export default Users;