export type Contact = {
  id: number;
  name: String;
  lastName: String;
  email: String;
  profilePicture: any;
  phoneNumber: String;
  age: number;
};

export type CommonFormProps<T>  = {
  formMode: "add" | "edit" | "detail",
  defaultValue: T,
  onSubmit?: (data:T)=>void | null,
}