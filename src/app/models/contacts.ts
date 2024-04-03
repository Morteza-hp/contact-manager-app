export type Contact = {
  id: Number;
  name: String;
  lastName: String;
  email: String;
  profilePicture: any;
  phoneNumber: String;
  age: Number;
};

export type CommonFormProps<T>  = {
  formMode: "add" | "edit" | "detail",
  onSubmit?: (data:T)=>void | null,
}