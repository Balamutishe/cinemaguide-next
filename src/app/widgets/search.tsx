"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();

    searchParams.entries().forEach(([key, value]) => params.set(key, value));

    if (term) {
      params.set("title", term);
    } else {
      params.delete("title");
    }

    if (pathname.match("/")) {
      push(`/movie?count=15&${params.toString()}`);
    }

    if (pathname.match("/movie")) {
      replace(`${pathname}?${params.toString()}`);
    }
  }, 300);

  useEffect(() => {
    if (inputRef.current && pathname.match("/movie")) inputRef.current.focus();
  }, [pathname]);

  return (
    <Input
      type="text"
      variant="header"
      placeholder="Поиск..."
      name="search"
      ref={inputRef}
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("title") || ""}
    >
      <MagnifyingGlassIcon className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />{" "}
    </Input>
  );
};
