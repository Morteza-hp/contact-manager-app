import Link from "next/link";
import { BackIcon } from "../../public/assets/images/icons";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-Background">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-Purple px-2 text-sm rounded rotate-12 absolute">
        صفحه ایی که دنبالش هستی رو پیدا نکردیم 🤔
      </div>
      <button className="mt-5">
        <Link
          href="/contact"
          className="py-3 px-4 bg-Purple font-semibold rounded-xl flex gap-1 place-items-center hover:bg-purple-500"
        >
          <div className="size-4">
            <BackIcon />
          </div>
          بازگشت
        </Link>
      </button>
    </main>
  );
}
