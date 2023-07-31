import React from "react";
import "./Contacts.css"


function Contacts(props) {
    return (
      <div id="contactOuterC">
        <div id="contactInnerC">
            <label >{props.name}</label>
            <p id="numberC">{props.number}</p>


        </div>
     
      </div>
    );
  }

  export default Contacts ;