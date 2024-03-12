import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="w-full h-[4.5rem] bg-Background py-5 border-b border-CurrentLine flex">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        <Link className="text-xl font-semibold text-white" href="/contact/">
          وب‌اپلیکیشن مدیریت مخاطبین
        </Link>
        <div className="flex gap-5">
          <Link className="font-medium text-white" href="/contact/add">
            مخاطب جدید
          </Link>
          <Link
            className="font-medium text-gray-400 hover:text-gray-500"
            href="/contact/"
          >
            لیست مخاطبین
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
