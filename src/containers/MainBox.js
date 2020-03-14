import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state=(
      {
        tab: "profile"
      }
    )
  }

  clickHandler = (event) => {
    this.setState({
      tab: event.target.id
    })
  }


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
        <MenuBar clickHandler={this.clickHandler} tab={this.state.tab}/>
        {this.state.tab === "profile" && <Profile/>}
        {this.state.tab === "photo" && <Photos/>}
        {this.state.tab === "cocktail" && <Cocktails/>}
        {this.state.tab === "pokemon" && <Pokemon/>}
      </div>
    )
  }

}

export default MainBox
