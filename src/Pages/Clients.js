import React, { useRef, useState } from "react";
import "../Styles/Clients.css";
import Contacts from "../Components/Contacts/Contacts";

const Clients = () => {
  const [select, setSelect] = useState(false);
  const [newC, setNewC] = useState(false);

  // const selector = (mid) =>{

  //   for (){

  //     setCheck(!check);

  //   }
  // }

  const contactData = [
    {
      contactId: "0",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      contactId: "1",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      contactId: "2",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      contactId: "3",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      contactId: "4",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
  ];

  const checkElement = useRef();
  const logCheck = () => {
    console.log(checkElement.current);
  };

  return (
    <div id="mainD">
      <div id="headD">
        <div id="textH">Contacts</div>
        <div id="buttonD">
          <button
            onClick={() => setSelect(true)}
            style={{
              display: !select && !newC ? "" : "none",
            }}
          >
            Select
          </button>
          <button
            onClick={() => setNewC(true)}
            style={{
              display: !select && !newC ? "" : "none",
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setSelect(false);
              setNewC(false);
            }}
            style={{
              display: select || newC ? "" : "none",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              display: select ? "block" : "none",
            }}
          >
            Mark All
          </button>
          <button
            style={{
              display: select ? "block" : "none",
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        id="newContactC"
        style={{
          display: newC ? "" : "none",
        }}
      >
        New Contact:
        <input type="" placeholder="Enter Name"></input>
        <input type="tel" placeholder="Enter Number*"></input>
        <button onClick={() => setNewC(false)}>Save</button>
      </div>
      {contactData.map((item, index) => (
        <div id="seperation">
          <Contacts name={item.name} number={item.number} />
          <div
            id="checkD"
            style={{
              display: !select ? "none" : "flex",
            }}
          >
            <input
              ref={checkElement}
              onClick={() => logCheck()}
              type="checkbox"
              id="cbox"
              value={contactData.name}
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
