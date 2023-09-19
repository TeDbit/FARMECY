import React, { forwardRef } from "react";
import "./Contacts.css";

const Contacts = forwardRef((props, contactRef) => {

  const { set_edit, edit, set_edited_name,set_edited_num, set_editing,  set_to_be_edited } = props;
  const editClass = props.selected || edit ? "edited" : "";

  const handleClick = (e) => {


    if (edit) {
      set_editing(true);
      set_edit(false);
      set_to_be_edited(
        {
          _id: `${props._id}`,
          editName: `${props.name}`,
          editNumber: `${props.number}`,
        }
      );
      set_edited_name(props.name)
      set_edited_num(props.number)
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
