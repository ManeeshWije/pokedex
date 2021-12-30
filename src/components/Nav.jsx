import React, {useState} from "react"
import {NavLink} from "react-router-dom"

function Nav (){
return(
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/pokedex">
            Pokedex
          </NavLink>
        </div>
      </nav>
    </div>
        
        )
}

export default Nav
