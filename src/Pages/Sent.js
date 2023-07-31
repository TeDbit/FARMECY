import React, { useState } from "react";


import "../Styles/Sent.css"
import  Message  from "../Components/Message/Message";


const Sent =() => {

    const[select,setSelect]=useState(false); 
    // const[check,setCheck]=useState(false); 

    // const selector = (mid) =>{

    //   for (){

    //     setCheck(!check); 

    //   }
    // } 
  
    const messData=[
      {
      messageId:"0",
      Sender:"Farmecy",
      Subject:"Installation Process",
      Timestamp:"2mins",
      },
      {
        messageId:"1",
        Sender:"Farmecy",
        Subject:"Next Generation Controllers",
        Timestamp:"1 day",
      },
      {
        messageId:"2",
        Sender:"Farmecy",
        Subject:"Pay Day",
        Timestamp:"5th May 2023",
      },
      {
        messageId:"3",
        Sender:"Farmecy",
        Subject:"Thermo-regulator Bug Recall",
        Timestamp:"28 April 2023",
      },
      {
        messageId:"4",
        Sender:"Farmecy",
        Subject:"Sale Convention",
        Timestamp:"30 Feb 2023",
      }

    ]

    return (
      <div id="mainD" >
        <div id="headD">
          <div id="textH">SENT</div>
          <div id="buttonD">
          <button onClick={()=>setSelect(true)} style={{

            display:select? "none":"block"

            }}>Select</button>
          <button onClick = {()=>(setSelect(false))} style={{

            display:select? "block":"none"

          }}>Cancel</button>
                        <button style={{

          display:select? "block":"none"

          }}>Mark All</button>
              <button style={{

          display:select? "block":"none"

          }}>Delete</button>
          </div>
        </div>
        {
          messData.map((item,index)=>(

            <div id="seperation">
              <Message sender={item.Sender} subject={item.Subject} timestamp={item.Timestamp} />
              <div id="checkD" style={{
                      display:!select? "none":"flex"
              }}>

                <input type="checkbox"></input>

                
                
              </div>
            </div>

          ))
        
        }
   
      </div>
    );
  };
  
  export default Sent;