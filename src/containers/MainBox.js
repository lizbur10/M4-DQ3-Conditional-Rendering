import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    selectedItem: 0,
    
  };
  selectedItem = menuNumber => {
    this.setState({
      selectedItem: menuNumber
    });

    // console.log(this.state.selectedItem);
  };
  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. Which component should 
    have state? Which component should have methods to control state? Where should 
    these methods be called?

    */

    const detailsToDisplay = (state) => {
      if (state === 0) {

        return (

            <Profile />
          
        );
      } else if (state === 1) {

        return (
          <div>
            <Photos />
          </div>
        );
      } else if(state === 2){
        return (
          <div>
            <Cocktails />
          </div>
        );
      } else if(state ===3) {
        return (
          <Pokemon />
        )
      }
    };

    return (
      <div>
        <MenuBar selectedItem={this.state.selectedItem} clickHandle={this.selectedItem} />

        {detailsToDisplay(this.state.selectedItem)}
      </div>
    );
  }
}

export default MainBox;
