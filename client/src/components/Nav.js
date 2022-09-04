import React from "react"
import {NavLink} from "react-router-dom"
import "../index.css"

function Nav (){
return(
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="nav">
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
