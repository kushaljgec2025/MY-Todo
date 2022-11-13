import React from 'react'
import {
   Link,
   BrowserRouter as Router
  } from "react-router-dom";

export default function Header() {
    let navStyle = {
        background: "#2b8482",
        borderBottomLeftRadius:"20px",
        borderBottomRightRadius:"20px",

    }
  
    return (

        <nav className="navbar navbar-expand-lg " style={navStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MY <span style={{ color: "#FF9D09", fontFamily: 'Rowdies', fontStyle: "normal", fontWeight: "400",}}>TODO<span /></span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav"  >
                    <Link className="nav-link active" to="/">Home</Link>

                    <Link className="nav-link" to="/about">About</Link>

                </div>
            </div>
        </div>
        </nav >
    )
}
