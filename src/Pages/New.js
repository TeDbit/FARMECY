import React from "react";
import "../Styles/New.css";

import { FiUpload } from "react-icons/fi";

const New = () => {
  return (
    <form id="mainc">
      <div id="titlespace">
        <div id="title">
          <h2 id="textH">BULK SMS</h2>
          <p id="textP">Send bulk sms to all your customers</p>
        </div>
        <button id="button1">Cancel</button>
      </div>

      <div id="container">
        <div id="upperc">
          <div id="messagefield">
            <div id="messagecontainer">
              <label>Message</label>
              <textarea
                id="freeform"
                name="Message"
                placeholder="Enter Message*"
              ></textarea>
            </div>

            <input type="text" placeholder="Enter Subject Line*" />
            <input type="text" placeholder="Enter Sender Name" />
          </div>
          <div id="pmessage-container">
            <label>Message Preview</label>
            <div id="preview"></div>
          </div>
        </div>
        <div id="dragdrop-container">
          <div id="dragdrop">
            <h2 id="textH2">Drop Here</h2>
            <FiUpload fontSize={"6rem"} />
            <p id="textP">Upload files (.csv, .xlsx)</p>
          </div>

          <div id="pmessage-container-m">
            <label>Message Preview</label>
            <div id="preview"></div>
          </div>
        </div>
      </div>
      <div id="lowerspace">
        <button>Send</button>
        {/* <input type="Submit" value="Send"></input> */}

        <button>Draft</button>
      </div>
      <div id="log-container">
        <label>Logs</label>
        <div id="logs"></div>
      </div>
    </form>
  );
};

export default New;
