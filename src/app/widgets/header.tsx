import { Button } from "@/app/ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Header = () => {
  return (
    <header className="flex h-[96px] items-center justify-between px-20 py-6">
      <Image src={Logo} alt="Logo" className="h-2/3 w-min" priority />
      <nav className="flex w-[70%] items-center justify-between">
        <Link
          href={"/"}
          className="mr-14 flex h-max w-min justify-center border-b-2 border-b-transparent py-2 transition-colors hover:border-b-2 hover:border-(--elem-color) hover:text-(--elem-color)"
        >
          Главная
        </Link>
        <Link
          href={"/genre"}
          className="mr-14 flex w-min justify-center border-b-2 border-b-transparent py-2 transition-colors hover:border-b-2 hover:border-(--elem-color) hover:text-(--elem-color)"
        >
          Жанры
        </Link>
        <div className="relative flex flex-1">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            name="search"
            placeholder="Поиск"
            className="peer block h-full w-full cursor-pointer rounded-md bg-(--default-color) py-4 pl-10 text-base outline-(--elem-color) transition-colors placeholder:text-gray-400 hover:outline-[2px] hover:placeholder:text-(--elem-color) focus:outline-[2px]"
          />
          <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
        </div>
      </nav>
      <Button
        variant="header"
        className="w-min border-b-2 border-b-transparent hover:border-b-2 hover:border-(--elem-color)"
      >
        Войти
      </Button>
    </header>
  );
};
