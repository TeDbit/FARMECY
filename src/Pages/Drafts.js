import React, { useState } from "react";


import "../Styles/Sent.css"
import  Message  from "../Components/Message/Message";


const Drafts=() => {

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
      Timestamp:"pending",
      },
      {
        messageId:"1",
        Sender:"Farmecy",
        Subject:"Next Generation Controllers",
        Timestamp:"pending",
      }
    ]

    return (
      <div id="mainD" >
        <div id="headD">
          <div id="textH">Drafts</div>
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
  
  export default Drafts;