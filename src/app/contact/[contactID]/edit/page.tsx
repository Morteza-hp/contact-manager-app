import { Metadata } from "next";
import EditPage from "./EditPage";

export const metadata: Metadata = {
  title: "ویرایش",
};

const Edit = ({ params }: { params: { contactID: string } }) => {
  return <EditPage id={Number(params.contactID)}/>;
};
export default Edit;