export type Contact = {
  id?: number;
  name: String;
  lastName: String;
  email: String;
  profilePicture?: any;
  phoneNumber: String;
  age: number;
};

export type CommonFormProps<T> = {
  formMode: "add" | "edit" | "detail";
  defaultValue?: T;
  validationsSchema?: any;
  onSubmit: (data: T) => Promise<void> | void;
};

export type CustomInputProps = {
  icon: any;
  text: string;
  type: string;
  name: string;
};

export type FilterInputProps = {
  contacts: Contact[];
  setFilteredContacts: any;
  id: string;
  placeholder: string;
};

export type SidebarProps = {
  contacts: Contact[];
  setFilteredContacts: any;
};
