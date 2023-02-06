import React from "react";
import Ticket from "./Ticket";

const mainTicketList = [
  {
      location: "3A",
      names: "Thato and Haley",
      issue: "Firebase will not save record!"
  },
  {
     location: "4B",
      names: "Sleater and Kinney",
      issue: "Prop types are throwing an error."
  },
  {
      names: 'Imani & Jacob',
      location: '9F',
      issue: 'Child component isn\'t rendering.'
  }
]

function TicketList(){
  return(
    <React.Fragment>
      <hr />
      {mainTicketList.map((ticket, index) => 
        <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default TicketList;