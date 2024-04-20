import Link from "next/link";
import { DetailIcon, EditIcon } from "../../../../public/assets/images/icons";

const invalidPage = ({ params }: { params: any }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 mx-10 w-dvw">
      <p className="text-white text-2xl">
        لطفا برای ویرایش و مشاهده جزئیات مخاطب مورد نظر به صفحه مربوطه مراجعه
        کنید. 😊
      </p>
      <div className="flex mt-3 gap-1 justify-center">
        <Link
          href={`/contact/${params.contactID}/detail`}
          className="py-3 px-4 bg-Green font-semibold rounded-xl flex gap-1 place-items-center hover:bg-green-500"
        >
          <div className="size-4">
            <DetailIcon />
          </div>
          جزئیات
        </Link>
        <Link
          href={`/contact/${params.contactID}/edit`}
          className="py-3 px-4 bg-Purple font-semibold rounded-xl flex gap-1 place-items-center hover:bg-purple-500"
        >
          <EditIcon />
          ویرایش
        </Link>
      </div>
    </div>
  );
};
export default invalidPage;
