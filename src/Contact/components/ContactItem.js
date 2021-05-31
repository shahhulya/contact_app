import React, { useContext } from "react";
import cancelImg from "../../assets/icons/cancel.svg";
import editImg from "../../assets/icons/pencil.svg";
import { contactContext } from "../../ContactContext";
import classes from "../contact.module.css";

export default function ContactItem(props) {
  const { fullName, number, id } = props.data;

  const { deleteContact, changeEditId } = useContext(contactContext);

  const handleDelete = () => {
    //call function to delete item (from context)
    deleteContact(id);
  };
  return (
    <li>
      <p>{fullName}</p>
      <p> {number}</p>
      <img
        onClick={handleDelete}
        className={classes.cancelIcon}
        src={cancelImg}
        alt="cancel-img"
      />
      <img
        onClick={() => changeEditId(id)}
        className={classes.editIcon}
        src={editImg}
        alt="edit-img"
      />
    </li>
  );
}
