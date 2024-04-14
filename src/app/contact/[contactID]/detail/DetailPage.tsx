"use client";
import { useDetailContacts } from "@/app/queries/contacts";
import ContactForm from "../../ContactForm";

const DetailPage = ({ id }: { id: number }) => {
  const { data: contact, isPending } = useDetailContacts(id);
  return (
    contact && (
      <ContactForm
        formMode="detail"
        defaultValue={contact}
        onSubmit={() => {}}
      />
    )
  );
};
export default DetailPage;