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

  const [contactData, setContactData] = useState([
    {
      contactId: "0",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      contactId: "1",
      name: "Gabby Yu",
      number: "0594883995",
      selected: false,
    },
    {
      contactId: "2",
      name: "Sista Derby",
      number: "0203679262",
      selected: false,
    },
    {
      contactId: "3",
      name: "Nees Rock",
      number: "0537692901",
      selected: false,
    },
    {
      contactId: "4",
      name: "Archie Bald",
      number: "0502589020",
      selected: false,
    },
  ]);

  // const checkElement = useRef();
  // const logCheck = () => {
  //   const val = checkElement.current.getAttribute("value");
  //   console.log(val);
  // };

  const onCheckChange = (contactID) => {
    const updateContact = contactData.map((contact) =>
      contact.contactId === contactID
        ? { ...contact, selected: !contact.selected }
        : contact
    );

    setContactData(updateContact);
    console.log(contactID);
  };

  const markAll = () => {
    var markCount = 0;
    contactData.forEach((contact) => {
      if (contact.selected) {
        markCount++;
      }
      return markCount;
    });
    console.log(markCount);

    const mark_all = contactData.map((contact) =>
      markCount !== contactData.length
        ? { ...contact, selected: true }
        : { ...contact, selected: false }
    );
    setContactData(mark_all);
  };

  const deleteContact = () => {
    const upContactData = contactData.filter((contact) => !contact.selected);
    setContactData(upContactData);
  };

  const loadContacts = () =>
    contactData.map((item, index) => (
      <div id="seperation">
        <Contacts name={item.name} number={item.number} />
        <div
          id="checkD"
          style={{
            display: !select ? "none" : "flex",
          }}
        >
          <input
            // ref={checkElement}
            // onClick={() => logCheck()}
            type="checkbox"
            id="cbox"
            value={item.name}
            checked={item.selected}
            onChange={() => onCheckChange(item.contactId)}
          ></input>
        </div>
      </div>
    ));

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
            onClick={() => markAll()}
            style={{
              display: select ? "block" : "none",
            }}
          >
            Mark All
          </button>
          <button
            onClick={() => deleteContact()}
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
      {loadContacts()}
    </div>
  );
};

export default Clients;
