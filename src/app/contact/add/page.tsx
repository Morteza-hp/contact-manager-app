"use client";
import { Contact } from "@/app/models/contacts";
import { useAddContacts } from "@/app/queries/contacts";
import ContactForm from "../ContactForm";

// export const metadata: Metadata = {
//   title: "ایجاد",
// }

const Add = () => {
  const { mutateAsync: addContact } = useAddContacts();
  const onSubmit = async (contact: Contact) => {
    await addContact(contact)
      .then((order) => {
        console.log("successful");
      })
      .catch((_errors) => {
        console.log("failed");
      });
  };

  return <ContactForm formMode="add" onSubmit={onSubmit} />;
};
export default Add;
