import { User } from "@/app/data";
import Image from "next/image";
import Link from "next/link";

const Card = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="flex flex-col bg-CurrentLine hover:bg-Background transition-[background-color] duration-[0.32s] ease-[ease-in-out] hover:shadow-[inset_0px_0px_0px_2px_#44475A] border-t-4 border-t-Purple rounded-xl">
      <div className="p-4 md:p-5">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              <span className="text-white items-center">نام : </span>
              <span className="text-white">{user.name}</span>
            </div>
            <hr className="my-2 bg-black border-gray-500" />
            <div className="grid grid-cols-2">
              <span className="text-white">نام خانوادگی : </span>
              <span className="text-white">{user.lastName}</span>
            </div>
            <hr className="my-2 bg-black border-gray-500" />
            <div className="grid grid-cols-2">
              <span className="text-white">شماره تلفن : </span>
              <span className="text-white">{user.phoneNumber}</span>
            </div>
            <hr className="my-2 bg-black border-gray-500" />
            <div className="grid grid-cols-2">
              <span className="text-white">ایمیل : </span>
              <span className="text-white">{user.email}</span>
            </div>
          </div>
          <div className="col-span-1 self-center justify-self-center align-self">
            <Image
              src={user.profilePicture}
              width={85}
              alt={`Avatar of ${user.name}`}
            />
          </div>
        </div>
        <div className="flex mt-3 gap-1 justify-center">
          <Link
            href="#"
            className="py-3 px-4 bg-Green font-semibold rounded-xl"
          >
            جزئیات
          </Link>
          <Link
            href="#"
            className="py-3 px-4 bg-Purple font-semibold rounded-xl"
          >
            ویرایش
          </Link>
          <button
            type="button"
            className="py-3 px-4 bg-Red font-semibold rounded-xl"
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
