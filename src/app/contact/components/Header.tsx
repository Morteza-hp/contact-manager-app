import Link from "next/link";

const Header = (): JSX.Element => {
  return (
    <header className="fixed top-0 w-full h-20 bg-Background py-5 border-b border-CurrentLine flex">
      <nav className="w-full px-16 flex items-center justify-center sm:justify-between">
        <Link
          className="text-xl font-semibold transition-[color] duration-[0.32s] ease-[ease-in-out] hover:text-Green text-white"
          href="/contact/"
        >
          وب‌اپلیکیشن مدیریت مخاطبین
        </Link>
        <div className="flex gap-5">
          <Link
            className="font-medium transition-[color] hidden sm:block duration-[0.32s] ease-[ease-in-out] hover:text-Green text-white"
            href="/contact/add"
          >
            مخاطب جدید
          </Link>
          <Link
            className="font-medium transition-[color] duration-[0.32s] ease-[ease-in-out] text-white hover:text-Green hidden md:block"
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
