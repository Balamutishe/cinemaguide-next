import { Button } from "@/app/ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.svg";
import { Search } from "./search";
import { Suspense } from "react";

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
          href={"/movie/genres"}
          className="mr-14 flex w-min justify-center border-b-2 border-b-transparent py-2 transition-colors hover:border-b-2 hover:border-(--elem-color) hover:text-(--elem-color)"
        >
          Жанры
        </Link>
        <Suspense>
          <Search />
        </Suspense>
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
