import { Button } from "@/app/ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[96px] px-10 py-4">
      <Image src={Logo} alt="Logo" className="w-min h-1/2" />
      <nav className="flex justify-between items-center w-[70%]">
        <Link
          href={"/home"}
          className="flex justify-center w-min mr-14 py-2 hover:text-(--elem-color) transition-colors"
        >
          Главная
        </Link>
        <Link
          href={"/genre"}
          className="flex justify-center w-min mr-14 py-2 hover:text-(--elem-color) transition-colors"
        >
          Жанры
        </Link>

        <div className="relative flex flex-1 flex-shrink-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="search"
            placeholder="Поиск"
            className="peer block w-full h-full rounded-md py-4 pl-10 text-base placeholder:text-gray-500 bg-(--default-color) hover:outline-[2px] outline-(--elem-color) focus:outline-[2px] outline-(--elem-color) hover:placeholder:text-(--elem-color) transition-colors cursor-pointer"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
        </div>
      </nav>
      <Button variant="header" className="w-min">
        Войти
      </Button>
    </header>
  );
};
