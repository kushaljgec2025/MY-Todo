import React from 'react'
import {TodoItem} from "./TodoItems"
export default function Todos(props) {
  let todoListStyle={
    textAlign: 'center',
  }
  return (
    <div className="container" style={todoListStyle}>
      <h3 className=" my-3" >
        Todos List
      </h3>
      {props.todos.length===0? "No todos to display":
      
      props.todos.map((todo)=>{
             return ( <><TodoItem todo={todo} onDelete={props.onDelete}/><hr/></>)
             
      })}
    
    </div> 
  )
}



