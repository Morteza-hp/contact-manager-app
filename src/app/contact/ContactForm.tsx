"use client";
import { useForm } from "react-hook-form";
import CustomInput from "./components/CustomInput";
import {
  AddIcon,
  EmailIcon,
  GalleryIcon,
  PhoneIcon,
  SandClockIcon,
  UserIcon,
} from "../../../public/assets/images/icons";
import { CommonFormProps, Contact } from "../models/contacts";

type ContactFormProps = CommonFormProps<Contact>;

const ContactForm = ({ formMode, onSubmit }: ContactFormProps) => {
  const { register, handleSubmit } = useForm();
  return (
    <fieldset disabled={formMode === "detail"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="contact"
        className="flex flex-col items-center pt-32 px-4 w-dvw"
      >
        <div className="w-full lg:w-1/2 p-8 grid grid-cols-2 gap-4 border rounded-lg border-CurrentLine">
          <CustomInput
            icon={<UserIcon />}
            type={"text"}
            text={"نام"}
            name={"name"}
            register={register}
          />
          <CustomInput
            icon={<UserIcon />}
            type={"text"}
            text={"نام خانوادگی"}
            name={"lastName"}
            register={register}
          />
          <CustomInput
            icon={<EmailIcon />}
            type={"email"}
            text={"ایمیل"}
            name={"email"}
            register={register}
          />
          <CustomInput
            icon={<GalleryIcon />}
            type={"text"}
            text={"عکس پروفایل"}
            name={"profilePicture"}
            register={register}
          />
          <CustomInput
            icon={<PhoneIcon />}
            type={"number"}
            text={"شماره"}
            name={"phoneNumber"}
            register={register}
          />
          <CustomInput
            icon={<SandClockIcon />}
            type={"number"}
            text={"سن"}
            name={"age"}
            register={register}
          />
        </div>
        <button
          type="submit"
          className="py-3 px-4 mt-4 font-semibold rounded-xl flex gap-1 place-items-center bg-Green hover:bg-green-500"
        >
          <div className="size-[14px]">
            <AddIcon />
          </div>
          {"ایجاد مخاطب"}
        </button>
      </form>
    </fieldset>
  );
};

export default ContactForm;
