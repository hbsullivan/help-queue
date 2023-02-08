import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import Steps from "./Steps";
import Minutes from "./Minutes";
import Help from "./Help";

class TicketControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: 0,
      mainTicketList: []
    };
  }

  handleClick = () => {
    if (this.state.formVisibleOnPage < 3) {
      this.setState(prevState => ({
        formVisibleOnPage: prevState.formVisibleOnPage += 1
      }));
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: prevState.formVisibleOnPage = -1
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList, formVisibleOnPage: 0});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = "Add Ticket";
    if(this.state.formVisibleOnPage === 0) {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList}/>
      buttonText = "Add Ticket";
    } else if(this.state.formVisibleOnPage === 1){
      currentlyVisibleState = <Steps />
      buttonText = "Yes";
    } else if(this.state.formVisibleOnPage === 2) {
      currentlyVisibleState = <Help />
      buttonText = "Yes";
    } else if(this.state.formVisibleOnPage === 3) {
      currentlyVisibleState = <Minutes />
      buttonText = "Yes";
    } else{
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = "Return";
    }
    return (
       <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
       </React.Fragment>
    );
  }
}

export default TicketControl;