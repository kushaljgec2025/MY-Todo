import React from 'react'

export const  TodoItem=({todo,onDelete})=> {
  let todoitemstyle={
      background: 'rgba(0, 0, 0, 0.43)',
      margin:'0vw 25vw',
      borderRadius:'10px',
      alignItems: 'center',
      padding:'2rem',
      
  };
  let des={
    border:"1px solid white",
    padding:"1rem",
    borderRadius:"5px",
    background: 'rgba(255, 255, 255, 0.7)',
  };
  return (
    <div style={todoitemstyle}>
    <h4 style={{fontSize:"1.5rem",color:'white',fontFamily:'Comfortaa cursive'}}>{todo.titel}</h4>
    <p style={des}>{todo.des}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}} >Delete</button>
    </div>
  )
}