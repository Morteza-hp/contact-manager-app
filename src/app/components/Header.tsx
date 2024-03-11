import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-Background py-5 shadow-2xl">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        <Link className="text-xl font-semibold text-white" href="/">
          وب‌اپلیکیشن مدیریت مخاطبین
        </Link>
        <div className="flex gap-5">
          <a className="font-medium text-white" href="/add">
            مخاطب جدید
          </a>
          <a className="font-medium text-gray-400 hover:text-gray-500" href="/">
            لیست مخاطبین
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
