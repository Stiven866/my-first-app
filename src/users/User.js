import React from 'react';

const User = (props) =>{
    let age = props.age ? props.age : 'N/A';
    if(props.children){
        return (<div>name: {props.children} Age: {age} </div>)
    }else{
        return (<div>Entrada</div>)
    }
    
}

export default User;