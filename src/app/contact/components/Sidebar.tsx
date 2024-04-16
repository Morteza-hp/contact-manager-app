import { ChangeEvent } from "react";
import { SearchIcon } from "../../../../public/assets/images/icons";
import { Contact } from "@/app/models/contacts";

const Sidebar = ({
  contacts,
  setFilteredContacts,
}: {
  contacts: Contact[];
  setFilteredContacts: any;
}): JSX.Element => {
  const filterHandler = (text: string, name: string) => {
    function contactFinder(contact: Contact) {
      if (name === "nameFilter") {
        return contact.name.toLowerCase().includes(text.toLowerCase());
      } else if (name === "lastNameFilter") {
        return contact.lastName.toLowerCase().includes(text.toLowerCase());
      } else {
        return contact.phoneNumber.toLowerCase().includes(text.toLowerCase());
      }
    }
    let x: Contact[] =
      text.length >= 1 ? contacts.filter(contactFinder) : contacts;
    setFilteredContacts(x);
  };
  return (
    <div className="hidden fixed lg:block w-[22rem] top-24 right-4 bg-Background border border-CurrentLine h-dvh rounded-xl py-6 px-8 space-y-4">
      <div className="relative">
        <input
          type="text"
          id="nameFilter"
          className="p-4 block w-full ps-11 rounded-lg text-sm transition ease-in-out duration-200 hover:border-Purple focus:ring-Purple focus:border-Purple bg-CurrentLine text-white"
          placeholder="جستجوی نام"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            filterHandler(e.target.value, "nameFilter")
          }
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          <SearchIcon />
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          id="lastNameFilter"
          className="p-4 block w-full ps-11 rounded-lg text-sm transition ease-in-out duration-200 hover:border-Purple focus:ring-Purple focus:border-Purple bg-CurrentLine text-white"
          placeholder="جستجوی نام خانوادگی"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            filterHandler(e.target.value, "lastNameFilter")
          }
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          <SearchIcon />
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          id="phoneNumberFilter"
          className="p-4 block w-full ps-11 rounded-lg text-sm transition ease-in-out duration-200 hover:border-Purple focus:ring-Purple focus:border-Purple bg-CurrentLine text-white"
          placeholder="جستجوی شماره تلفن"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            filterHandler(e.target.value, "phoneNumberFilter")
          }
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;