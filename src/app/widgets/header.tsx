"use server";

import Link from "next/link";
import Image from "next/image";
import { Search } from "./search";
import { OpenForm } from "../features/form/open-form";

export default async function Header() {
  return (
    <header className="flex h-[96px] items-center justify-between px-20 py-6">
      <Image
        height={48}
        width={48}
        src={"/images/logo.svg"}
        alt="Logo"
        className="h-2/3 w-min"
        priority
      />
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
        <Search />
      </nav>
      <OpenForm />
    </header>
  );
}
