import React from "react";
import "../Styles/New.css"

import { FiUpload} from "react-icons/fi";

const New =() => {
    return (
      <div className="mainc">
      <div className="titlespace">
          <div className="title">
              <h2 className="textH">BULK SMS</h2>
              <p className="textP">Send bulk sms to all your customers</p>
          </div>
          <button className="button1">Cancel</button>
      </div>
  

      <div className="container">
          <div className="upperc">
              <div className="messagefield">
                  <div className="messagecontainer" >  
                     <label>Message</label>
                     <textarea id="freeform" name="Message" placeholder="Enter Message*"></textarea>
                  </div>
                  
                  <input type="text" placeholder="Enter Subject Line*"/>
                  <input type="text" placeholder="Enter Sender Name"/>
              </div>
              <div className="pmessage-container">
                  <label>Message Preview</label>
                  <div className="preview"></div>
              </div>
       
              
          </div>
          <div className="dragdrop-container">
             
              <div className="dragdrop">
                  <h2 className="textH2">Drop Here</h2>
                  <FiUpload fontSize={'6rem'}/>
                  <p className="textP">Upload files (.csv, .xlsx)</p>
              </div>

              <div className="pmessage-container-m">
                  <label>Message Preview</label>
                  <div className="preview"></div>
              </div>
              
         
              
              
          </div>
  </div>
  <div className="lowerspace">
       <button>Send</button>

       <button >Draft</button>
   </div>
   <div className="log-container">
        <label>Logs</label>
        <div className="logs"></div>
    </div>
</div>
    );
  };
  
  export default New;