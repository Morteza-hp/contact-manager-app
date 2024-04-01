"use client";

import { Contact } from "@/app/models/contacts";
import { useAddContacts } from "@/app/queries/contacts";

export const createContact = async (contact: Contact) => {
  const { mutateAsync: addContact } = useAddContacts();
  await addContact(contact)
    .then((order) => {
      console.log("successful");
    })
    .catch((_errors) => {
      console.log("failed");
    });
};
