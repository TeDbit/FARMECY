/* eslint-disable no-sequences */
import React, { useEffect, useState } from "react";
import "../Styles/Clients.css";
import Contacts from "../Components/Contacts/Contacts";
import {
  markAll,
  onCheckChange,
  deleteItem,
  searchItems,
  deselectAll,
} from "../Components/wFunctions/function_s";

const Clients = () => {
  const [select, setSelect] = useState(false);
  const [newC, setNewC] = useState(false);
  const [newName, setName] = useState();
  const [newNum, setNum] = useState();

  const [edit, setEdit] = useState(false);
  const [editing, setEditing] = useState(false);
  const [toBeEdited, setToBeEdited] = useState({
    _id: "",
    editName: "",
    editNumber: "",
  });
  const [editedName, setEditedName] = useState("");
  const [editedNumber, setEditedNum] = useState("");
  const contactRef = React.createRef();

  const originalData = [
    {
      _id: "0",
      name: "Kwame Appiah",
      number: "0241323456",
      selected: false,
    },
    {
      _id: "1",
      name: "Gabby Yu",
      number: "0594883995",
      selected: false,
    },
    {
      _id: "2",
      name: "Sista Derby",
      number: "0203679262",
      selected: false,
    },
    {
      _id: "3",
      name: "Nees Rock",
      number: "0537692901",
      selected: false,
    },
    {
      _id: "4",
      name: "Archie Bald",
      number: "0502589020",
      selected: false,
    },
  ];
  const [contactData, setContactData] = useState(originalData);

  const handleEdit = () => {
    setEdit(true);
  };
  const handleSort = (data) => {
    const sortedData = [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    return sortedData;
  };

  const addContact = () => {
    if (newName && newNum) {
      const newContact = {
        _id: contactData.length,
        name: newName,
        number: newNum,
      };
      setContactData([...contactData, newContact]);
      setName("");
      setNum("");
    }
  };

  const editContact = () => {
    if (editedName || editedNumber) {
      contactData.map((item) => {
        if (item._id === toBeEdited._id) {
           item.name = editedName;
           item.number = editedNumber;
        }
        return [item.name,item.number]
      });
      setEditedName("");
      setEditedNum("");
    }
  };

  useEffect(() => {
    document.getElementById("nameEdit").focus();
    document.getElementById("nameEdit").value = toBeEdited.editName;
    document.getElementById("numberEdit").value = toBeEdited.editNumber;
  }, [toBeEdited]);

  useEffect(() => {
    document.getElementById("nameAdd").focus();
  }, [newC]);

  //

  return (
    <div id="mainD">
      <div id="headD">
        <div id="textH">Contacts</div>
        <input
          id="searchbar"
          type="search"
          onChange={() => searchItems(contactData, setContactData)}
          style={{
            display: !newC && !editing ? "" : "none",
          }}
        ></input>
        <div id="buttonD">
          <button
            onClick={() => setSelect(true)}
            style={{
              display: !select && !newC && !edit && !editing ? "" : "none",
            }}
          >
            Select
          </button>
          <button
            onClick={() => {
              setNewC(true);
            }}
            style={{
              display: !select && !newC && !edit && !editing ? "" : "none",
            }}
          >
            Add
          </button>
          <button
            onClick={() => handleEdit()}
            style={{
              display: !select && !newC && !edit && !editing ? "" : "none",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              setSelect(false);
              setNewC(false);
              setEdit(false);
              setEditing(false);
              deselectAll(contactData);
            }}
            style={{
              display: select || newC || edit || editing ? "" : "none",
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
          visibility: newC ? "" : "hidden",
          position: newC ? "" : "absolute",
          height: newC ? "" : "0",
        }}
      >
        New Contact:
        <input
          type=""
          placeholder="Enter Name"
          id="nameAdd"
          value={newName}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="tel"
          placeholder="Enter Number*"
          id="numberAdd"
          value={newNum}
          onChange={(e) => setNum(e.target.value)}
        ></input>
        <button
          onClick={() => {
            addContact()
            setNewC(false);
          }}
        >
          Save
        </button>
      </div>
      <div
        id="newContactC"
        style={{
          visibility: editing ? "" : "hidden",
          position: editing ? "" : "absolute",
          height: editing ? "" : "0",
        }}
      >
        Edit Contact:
        <input
          type=""
          placeholder="Enter Name"
          id="nameEdit"
          onChange={(e) => setEditedName(e.target.value)}
        ></input>
        <input
          type="tel"
          placeholder="Enter Number*"
          id="numberEdit"
          onChange={(e) => setEditedNum(e.target.value)}
        ></input>
        <button
          onClick={() => {
            editContact();
            setEditing(false);
          }}
        >
          Save
        </button>
      </div>
      {handleSort(contactData).map((item, index) => (
        <div id="seperation">
          <Contacts
            set_edited_name = {setEditedName}
            set_edited_num = {setEditedNum}
            set_editing={setEditing}
            set_edit={setEdit}
            editing={editing}
            ref={contactRef}
            selected={item.selected}
            _id={item._id}
            name={item.name}
            number={item.number}
            edit={edit}
            to_be_edited={toBeEdited}
            set_to_be_edited={setToBeEdited}
            select={select}
          />
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
                onCheckChange(item._id, contactData, setContactData)
              }
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clients;
