import React, { forwardRef } from "react";
import "./Contacts.css";

const Contacts = forwardRef((props, contactRef) => {

  const { setEdit, edit, setEditing, editing, toBeEdited, setToBeEdited } = props;
  const editClass = props.selected || edit ? "edited" : "";

  const handleClick = (e) => {


    if (edit) {
      setEditing(true);
      console.log("I have been clicked");
      console.log(editing);
      setEdit(false);
      setToBeEdited(
        {
          _id: `${props.id}`,
          editName: `${props.name}`,
          editNumber: `${props.number}`,
        }
      );
      console.log(toBeEdited)
      window.scrollTo(0,0)
      
     
    }
  };


  return (
    <>


      <div onClick={handleClick} ref={contactRef} {...props} id="contactOuterC">
        <div id={`contactInnerC${editClass}`}>
          <label>{props.name}</label>
          <p id="numberC">{props.number}</p>
        </div>
      </div>
    </>
  );
});

export default Contacts;
