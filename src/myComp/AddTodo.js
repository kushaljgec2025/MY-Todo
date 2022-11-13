
import React, { useState } from 'react';
export const AddTodo = (props) => {
    let addtodo={
        background:"rgba(217, 217, 217, 0.43)",
        padding:"1vw",
        width:"40vw",
        borderRadius:"5px",
        backdropFilter:"blur(10px)",
        
       
         
        };
    const [titel,setTitel]=useState("");
    const [des,setDes]=useState("");

    const submit=(e)=>{
     e.preventDefault();
     if(!titel || !des){
        alert(" This is blank! Write your Todo")
     }
     else{
     props.addTodo(titel,des);
     setTitel("");
     setDes("");
     }
    }
    return (
        <div className="container my-3" style={addtodo} >
            <h3 style={{fontSize:"2rem",}}>Add a <span style={{ color: "#FF9D09", fontFamily: 'Poppins', fontStyle: "normal", fontWeight: "600",}}>Todo</span></h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="titel" className="form-label">Todo titel</label>
                <input type="Text" value={titel} onChange={(e)=>{setTitel(e.target.value)}} className="form-control" id="Titel" />
                    <div  className="form-text" >Add your Todo</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" value={des}  onChange={(e)=>{setDes(e.target.value)}} className="form-control" id="des"/>
            </div>
          
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form></div>
    )
}
