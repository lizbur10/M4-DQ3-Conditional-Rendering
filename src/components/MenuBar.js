import React from 'react'
import {
  NavLink
} from "react-router-dom";

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <NavLink exact className="item" activeClassName="active"  id="profile" to="/">
        <i className="user large icon" id="profile"/>
      </NavLink>

      <NavLink className="item"  activeClassName="active" id="photo" to="/photos">
        <i className="photo large icon" id="photo"/>
      </NavLink>

      <NavLink className="item"  activeClassName="active" id="cocktail" to="/cocktails">
        <i className="cocktail large icon" id="cocktail"/>
      </NavLink>

      <NavLink className="item"  activeClassName="active" id="pokemon" to="/pokemon"> 
        <i className=" themeisle large icon" id="pokemon"/>
      </NavLink>
    </div>
  )

}

export default MenuBar
