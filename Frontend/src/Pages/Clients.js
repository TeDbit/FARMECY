import React, { useEffect, useRef, useState } from "react";
import "../Styles/Clients.css";
import Contacts from "../Components/Contacts/Contacts";
import {
  markAll,
  onCheckChange,
  deleteItem,
  searchItems,
} from "../Components/wFunctions/function_s";

const Clients = () => {
  const [select, setSelect] = useState(false);
  const [newC, setNewC] = useState(false);
  const [newName, setName] = useState();
  const [newNum, setNum] = useState();
  const [sortAlpha, setSort] = useState("ascending");
  const originalData = [
    {
      Id: "0",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      Id: "1",
      name: "Gabby Yu",
      number: "0594883995",
      selected: false,
    },
    {
      Id: "2",
      name: "Sista Derby",
      number: "0203679262",
      selected: false,
    },
    {
      Id: "3",
      name: "Nees Rock",
      number: "0537692901",
      selected: false,
    },
    {
      Id: "4",
      name: "Archie Bald",
      number: "0502589020",
      selected: false,
    },
  ];
  const [contactData, setContactData] = useState(originalData);

  const handleSort = () => {
    const sortedData = [...contactData].sort((a, b) => {
      if (sortAlpha === "ascending") {
        return a.name.localeCompare(b.name);
      }
    });

    setContactData(sortedData);
  };

  const addContact = () => {
    if (newName && newNum) {
      const newContact = {
        Id: contactData.length,
        name: newName,
        number: newNum,
      };
      setContactData([...contactData, newContact]);
      setName("");
      setNum("");
    }
  };

  useEffect(() => {
    handleSort();
  }, [contactData]);

  //

  return (
    <div id="mainD">
      <div id="headD">
        <div id="textH">Contacts</div>
        <input
          id="searchbar"
          type="search"
          onChange={() => searchItems(contactData, setContactData)}
        ></input>
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
            onClick={() => markAll(contactData, setContactData)}
            style={{
              display: select ? "block" : "none",
            }}
          >
            Mark All
          </button>
          <button
            onClick={() => deleteItem(contactData, setContactData)}
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
        <input
          type=""
          placeholder="Enter Name"
          id="name"
          value={newName}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="tel"
          placeholder="Enter Number*"
          id="number"
          value={newNum}
          onChange={(e) => setNum(e.target.value)}
        ></input>
        <button
          onClick={() => {
            addContact();
            setNewC(false);
          }}
        >
          Save
        </button>
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
              type="checkbox"
              value={item.name}
              checked={item.selected}
              onChange={() =>
                onCheckChange(item.Id, contactData, setContactData)
              }
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
