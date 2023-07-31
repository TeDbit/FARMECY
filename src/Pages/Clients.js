import React, { useState } from "react";


import "../Styles/Sent.css"
import  Contacts from "../Components/Contacts/Contacts";


const Clients =() => {

    const[select,setSelect]=useState(false); 
    // const[check,setCheck]=useState(false); 

    // const selector = (mid) =>{

    //   for (){

    //     setCheck(!check); 

    //   }
    // } 
  
    const contactData=[
      {
      contactId:"0",
      name:"Kwame Appiah",
      number:"0241323456"
  
      },
      {
        contactId:"0",
        name:"Kwame Appiah",
        number:"0241323456"
    
      },
        {
        contactId:"0",
        name:"Kwame Appiah",
        number:"0241323456"
      
      },
      {
        contactId:"0",
        name:"Kwame Appiah",
        number:"0241323456"
    
      },
      {
        contactId:"0",
        name:"Kwame Appiah",
        number:"0241323456"
    
      }

    ]

    return (
      <div id="mainD" >
        <div id="headD">
          <div id="textH">Contacts</div>
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
          contactData.map((item,index)=>(

            <div id="seperation">
              <Contacts name={item.name} number={item.number}  />
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
  
  export default Clients;