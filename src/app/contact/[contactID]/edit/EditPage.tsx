"use client";

import { useDetailContacts, useUpdateContacts } from "@/app/queries/contacts";
import ContactForm from "../../ContactForm";
import { Contact } from "@/app/models/contacts";
import {
  requiredEmail,
  requiredNumber,
  requiredString,
} from "@/app/zod/option";
import { z } from "zod";
import toast from "react-hot-toast";

const EditPage = ({ id }: { id: number }) => {
  const { data: contact, isPending } = useDetailContacts(id);
  const { mutateAsync: mutateUpdateContact, isPending: pendingUpdateContact } =
    useUpdateContacts();
  const validationsSchema = z.object({
    name: requiredString(4, "نام"),
    lastName: requiredString(4, "نام خانوادگی"),
    profilePicture: z.any(),
    age: requiredNumber(1, 100, "سن"),
    email: requiredEmail("ایمیل"),
    phoneNumber: requiredString(6, "شماره تلفن"),
  });
  const onSubmit = async (contact: Contact) => {
    await mutateUpdateContact({ ...contact, id: Number(id) })
      .then((order) => {
        toast.success("مخاطب با موفقیت ویرایش شد.", {
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
        toast.error("در ویرایش مخاطب مشکلی پیش آمده است.", {
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
    contact && (
      <ContactForm
        formMode="edit"
        defaultValue={contact}
        onSubmit={onSubmit}
        validationsSchema={validationsSchema}
      />
    )
  );
};
export default EditPage;