"use client";

import { useDeleteContacts } from "@/app/queries/contacts";
import { DeleteIcon } from "../../../../public/assets/images/icons";
import { useRef, useState } from "react";
import { Contact } from "@/app/models/contacts";

const DeleteButton = ({ contact }: { contact: Contact }): JSX.Element => {
  const { mutate: deleteContactById } = useDeleteContacts();
  const [item, setItem] = useState<Contact | null>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = (): void => {
    setItem(contact);
    dialogRef.current && dialogRef.current.showModal();
  };
  const closeModal = (): void => {
    dialogRef.current && dialogRef.current.close();
  };
  const deleteItem = () => {
    if (!item) return;

    deleteContactById(item?.id, {
      onSuccess: () => console.log("successful"),
      onError: (e) => console.log("failed"),
    });
    closeModal();
    setItem(null);
  };
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 bg-Red font-semibold rounded-xl flex gap-1 place-items-center hover:bg-red-500"
        onClick={() => showModal()}
      >
        <DeleteIcon />
        حذف
      </button>
      <dialog
        ref={dialogRef}
        className="bg-Comment rounded-lg border-2 border-Green p-4"
      >
        <p className="text-xl">آیا از حذف این مخاطب مطمئن هستید؟</p>
        <p className="text-sm mt-1 text-gray-800">
          این عمل غیرقابل بازگشت است.
        </p>
        <div className="mt-3">
          <button
            onClick={() => closeModal()}
            className="py-3 px-4 bg-Green font-semibold rounded-xl hover:bg-green-500 ml-1"
          >
            انصراف
          </button>
          <button
            onClick={deleteItem}
            className="py-3 px-4 bg-Red font-semibold rounded-xl hover:bg-red-500"
          >
            مطمئنم
          </button>
        </div>
      </dialog>
    </>
  );
};
export default DeleteButton;
