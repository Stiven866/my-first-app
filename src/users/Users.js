import React,{Component} from 'react';
import User from './User'
class Users extends Component{
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <User >Stiven</User>
            <User age="30">Andres</User>
            <User age="10"></User>
            <User age="5">Camila</User>
            </div>
            
            )
    }

};

export default Users;