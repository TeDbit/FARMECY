import React from "react";
import "./Message.css"


function Message(props) {
    return (
      <div id="messageOuterC">
        <div id="messageInnerC">
            <label >{props.sender}</label>
            <p id="subjectC">{props.subject}...</p>


        </div>
        <div id="timestampC" >
            {props.timestamp}
        </div>
     
      </div>
    );
  }

  export default Message ;
  

// export function messageout(props) {
//     return (
//       <div >
        
//       </div>
//     );
//   };
  