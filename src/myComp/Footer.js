import React from 'react'

export default function Footer() {
  let footerStyle={
    position:"relative",
    top:'0vh',
    width:"100%",
    height:"5%",
    borderTop:"2px solid grey",
    background:"#252525",
  }
  return (
    <footer className="text-light py-1" style={footerStyle}>

      <p className="text-center">   Copyright &copy; MyTodo.com</p>
    </footer>
  )
}
