"use client";
import { Contact } from "@/app/models/contacts";
import { useAddContacts } from "@/app/queries/contacts";
import ContactForm from "../ContactForm";
import toast from "react-hot-toast";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "ایجاد",
// }

const Add = () => {
  const { mutateAsync: addContact } = useAddContacts();
  const onSubmit = async (contact: Contact) => {
    await addContact(contact)
      .then((order) => {
        toast.success("مخاطب با موفقیت ایجاد شد.", {
          icon: "🚀",
          style: {
            borderRadius: "4px",
            border: "1px solid #50FA7B",
            background: "#282A36",
            color: "#fff",
          },
        });
      })
      .catch((_errors) => {
        toast.error("در ایجاد مخاطب مشکلی پیش آمده است.", {
          icon: "🤔",
          style: {
            borderRadius: "4px",
            border: "1px solid #FF5555",
            background: "#282A36",
            color: "#fff",
          },
        });
      });
  };

  return <ContactForm formMode="add" onSubmit={onSubmit} />;
};
export default Add;