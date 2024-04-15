"use client";
import { Contact } from "@/app/models/contacts";
import { useAddContacts } from "@/app/queries/contacts";
import ContactForm from "../ContactForm";
import { z } from "zod";
import {
  requiredString,
  requiredEmail,
  requiredNumber,
} from "@/app/zod/options";

// export const metadata: Metadata = {
//   title: "ایجاد",
// }

const Add = () => {
  const validationsSchema = z.object({
    name: requiredString(4, "نام"),
    lastName: requiredString(4, "نام خانوادگی"),
    profilePicture: z.any(),
    age: requiredNumber(1, 100, "سن"),
    email: requiredEmail("ایمیل"),
    phoneNumber: requiredString(6, "شماره تلفن"),
  });

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

  return (
    <ContactForm
      formMode="add"
      onSubmit={onSubmit}
      validationsSchema={validationsSchema}
    />
  );
};
export default Add;