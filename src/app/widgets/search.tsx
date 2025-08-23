"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();

    searchParams.entries().forEach(([key, value]) => params.set(key, value));

    if (term) {
      params.set("title", term);
    } else {
      params.delete("title");
    }

    if (pathname.match("/movie")) {
      replace(`${pathname}?${params.toString()}`);
    }
  }, 300);

  return (
    <div className="relative flex flex-1">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        name="search"
        placeholder="Поиск"
        className="peer block h-full w-full cursor-pointer rounded-md bg-(--default-color) py-4 pl-10 text-base outline-(--elem-color) transition-colors placeholder:text-gray-400 hover:outline-[2px] hover:placeholder:text-(--elem-color) focus:outline-[2px]"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("title")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
    </div>
  );
};
