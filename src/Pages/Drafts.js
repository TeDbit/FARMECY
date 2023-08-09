import React, { useState } from "react";
import "../Styles/Sent.css";
import Message from "../Components/Message/Message";
import {
  markAll,
  onCheckChange,
  deleteItem,
} from "../Components/wFunctions/function_s";

const Drafts = () => {
  const [select, setSelect] = useState(false);
  const [messData, setMessData] = useState([
    {
      Id: "0",
      Sender: "Farmecy",
      Subject: "Installation Process",
      Timestamp: "pending",
      selected: false,
    },
    {
      Id: "1",
      Sender: "Farmecy",
      Subject: "Next Generation Controllers",
      Timestamp: "pending",
      selected: false,
    },
  ]);

  return (
    <div id="mainD">
      <div id="headD">
        <div id="textH">Drafts</div>
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

export default Drafts;
