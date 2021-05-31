import React, { useContext, useState } from "react";
import { contactContext } from "../../ContactContext";
import classes from "../contact.module.css";

export default function Form() {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const { createContact } = useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit data to server
    const data = {
      fullName,
      number,
    };
    createContact(data);
    setFullName("");
    setNumber("");
  };

  return (
    <div className={classes.formWrapper}>
      <h3>Contact List</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFullName(e.target.value)}
          placeholder="FullName"
          name="fullName"
          type="text"
          required
          value={fullName}
        />
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          name="number"
          type="text"
          required
          value={number}
        />
        <button>Create</button>
      </form>

      {/* <pre>{JSON.stringify(contactList, 0, 2)}</pre> */}
    </div>
  );
}
