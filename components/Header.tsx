import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://links.papareact.com/1m8"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <h1>My Blog</h1>
      </div>

      <div>
        <Link href="/studio">
          <button className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-xl">
            Studio
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
