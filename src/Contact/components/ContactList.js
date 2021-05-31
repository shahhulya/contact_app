import React, { useContext, useEffect } from "react";
import { contactContext } from "../../ContactContext";
import classes from "../contact.module.css";
import ContactEdit from "./ContactEdit";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const { contactList, fetchContacts, editId } = useContext(contactContext);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className={classes.contactList}>
      {contactList.map((contact) =>
        contact.id === editId ? (
          <ContactEdit data={contact} key={contact.id} />
        ) : (
          <ContactItem data={contact} key={contact.id} />
        )
      )}
    </ul>
  );
}
