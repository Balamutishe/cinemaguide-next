import Image from "next/image";
import { CloseForm } from "./close-form";
import { useState } from "react";
import { Button } from "@/app/ui/button";
import { AtSymbolIcon, UserIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Input } from "@/app/ui/input";

export const Form = () => {
  const [variant, setVariant] = useState<"register" | "login">("login");

  const handleSwitchVariant = () => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div className="relative z-50 min-h-105 w-100 rounded-xl bg-amber-50 px-10 py-15 text-black">
      <div className="mb-2 flex flex-col items-center">
        <Image
          src={"/images/logo-black.svg"}
          alt="Logo"
          width={24}
          height={24}
          className="mb-6 h-8 w-34"
        />
        {variant === "register" && (
          <h3 className="mb-6 text-2xl font-bold">Регистрация</h3>
        )}
        <div className="mb-4 flex w-full flex-col gap-4">
          <Input
            variant="form"
            type="email"
            name="email"
            placeholder="Электронная почта"
          >
            <AtSymbolIcon className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
          </Input>
          {variant === "register" && (
            <Input variant="form" type="text" name="name" placeholder="Имя">
              <UserIcon className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
            </Input>
          )}
          {variant === "register" && (
            <Input
              variant="form"
              type="text"
              name="surname"
              placeholder="Фамилия"
            >
              <UserIcon className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
            </Input>
          )}
          <Input
            variant="form"
            type="password"
            name="password"
            placeholder="Пароль"
          >
            <KeyIcon className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
          </Input>
          {variant === "register" && (
            <Input
              variant="form"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            >
              <KeyIcon className="absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-(--elem-color) peer-focus:text-(--elem-color)" />
            </Input>
          )}
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-full justify-center text-amber-50"
          onClick={handleSwitchVariant}
        >
          {variant === "login" ? "Войти" : "Создать аккаунт"}
        </Button>
      </div>
      <div className="flex justify-center">
        <Button
          variant="primary"
          className="bg-inherit hover:bg-inherit hover:text-(--elem-color)"
          onClick={handleSwitchVariant}
        >
          {variant === "login" ? "Регистрация" : "У меня есть пароль"}
        </Button>
      </div>

      <CloseForm />
    </div>
  );
};
