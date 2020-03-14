import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

class MainBox extends React.Component {


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should 
    have state? Which component should have methods to control state? Where should 
    these methods be called?

    */

    return (
      <div>
        <Router>
          <MenuBar />
          <Switch>
            <Route exact path="/" component={Profile}/>
            <Route exact path="/photos" component={Photos}/>
            <Route exact path="/cocktails" component={Cocktails}/>
            <Route exact path="/pokemon" component={Pokemon}/>
          </Switch>
            
        </Router>
        
      </div>
    )
  }

}

export default MainBox
