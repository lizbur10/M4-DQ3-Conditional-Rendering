import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       selectedPage:"profile"
    }
  }
  

  handleClick = (id) => {
    console.log(id,"hello");
    
    this.setState({selectedPage:id})
  }
  
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should 
    have state? Which component should have methods to control state? Where should 
    these methods be called?

    */
    if(this.state.selectedPage === "profile"){
      this.detailsToDisplay = <div> <Profile/> </div>
    }else if(this.state.selectedPage === "photo"){
      this.detailsToDisplay = <div> <Photos/> </div>
    }else if(this.state.selectedPage === "cocktail"){
      this.detailsToDisplay = <div> <Cocktails/> </div>
    }else{
      this.detailsToDisplay = <div> <Pokemon/> </div>
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick} selectedPage={this.state.selectedPage} />
        {this.detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
