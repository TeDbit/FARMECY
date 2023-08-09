import React, { useState, useEffect } from "react";
import "../Styles/Sent.css";
import Message from "../Components/Message/Message";
import {
  markAll,
  onCheckChange,
  deleteItem,
} from "../Components/wFunctions/function_s";

const Sent = () => {
  const [select, setSelect] = useState(false);
  const [messData, setMessData] = useState([
    {
      Id: "0",
      Sender: "Farmecy",
      Subject: "Installation Process",
      Timestamp: "2mins",
      selected: false,
    },
    {
      Id: "1",
      Sender: "Farmecy",
      Subject: "Next Generation Controllers",
      Timestamp: "1 day",
      selected: false,
    },
    {
      Id: "2",
      Sender: "Farmecy",
      Subject: "Pay Day",
      Timestamp: "5th May 2023",
      selected: false,
    },
    {
      Id: "3",
      Sender: "Farmecy",
      Subject: "Thermo-regulator Bug Recall",
      Timestamp: "28 April 2023",
      selected: false,
    },
    {
      Id: "4",
      Sender: "Farmecy",
      Subject: "Sale Convention",
      Timestamp: "30 Feb 2023",
      selected: false,
    },
  ]);

  return (
    <div id="mainD">
      <div id="headD">
        <div id="textH">SENT</div>
        <div id="buttonD">
          <button
            onClick={() => setSelect(true)}
            style={{
              display: select ? "none" : "block",
            }}
          >
            Select
          </button>
          <button
            onClick={() => setSelect(false)}
            style={{
              display: select ? "block" : "none",
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => markAll(messData, setMessData)}
            style={{
              display: select ? "block" : "none",
            }}
          >
            Mark All
          </button>
          <button
            onClick={() => deleteItem(messData, setMessData)}
            style={{
              display: select ? "block" : "none",
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {messData.map((item, index) => (
        <div id="seperation">
          <Message
            sender={item.Sender}
            subject={item.Subject}
            timestamp={item.Timestamp}
          />
          <div
            id="checkD"
            style={{
              display: !select ? "none" : "flex",
            }}
          >
            <input
              type="checkbox"
              value={item.id}
              checked={item.selected}
              onChange={() =>
                onCheckChange(item.Id, messData, setMessData)
              }
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sent;
