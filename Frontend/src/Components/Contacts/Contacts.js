import React, { useState, forwardRef } from "react";
import "./Contacts.css";

const Contacts = forwardRef((props, contactRef) => {
  const [toBeEdited,setToBeEdited] = useState('')
  const { setEdit,edit, setEditing,editing} = props;
  const editClass = edit ? "edited" : "";

  const handleClick = () => {
  
    if (edit) {
      setEditing(true);
      console.log("I have been clicked");
      const handleInputChange = (e) => {
        
      };
      console.log(editing)
      setEdit(false)
      
    }
  };


  return (
    <div
      onClick={() => handleClick()}
      ref={contactRef}
      {...props}
      id="contactOuterC"
    >
      <div id={`contactInnerC${editClass}`}>
        <label>{props.name}</label>
        <p id="numberC">{props.number}</p>
      </div>
    </div>
  );
});

export default Contacts;
