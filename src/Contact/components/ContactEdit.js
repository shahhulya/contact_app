import classes from "../contact.module.css";
import React, { useContext, useState } from "react";
import { contactContext } from "../../ContactContext";

export default function ContactEdit(props) {
  const { fullName: contactFullName, number: contactNumber, id } = props.data;

  const [fullName, setFullName] = useState(contactFullName);
  const [number, setNumber] = useState(contactNumber);

  const { changeContact } = useContext(contactContext);

  const handleEdit = (e) => {
    e.preventDefault();

    changeContact(id, fullName, number);
  };

  return (
    <li className={classes.editingContact}>
      <form onSubmit={handleEdit}>
        <input
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          name="fullName"
          required
          value={fullName}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          name="number"
          required
          value={number}
        />
        <button>Edit</button>
      </form>
    </li>
  );
}
