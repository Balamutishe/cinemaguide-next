import clsx from "clsx";
import { RefObject } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "header" | "form";
  children?: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLInputElement | null>;
}

export function Input({
  variant,
  children,
  className,
  ref,
  ...rest
}: IInputProps) {
  return (
    <div className="relative flex flex-1">
      <input
        {...rest}
        ref={ref}
        autoComplete="off"
        className={clsx(
          "peer block h-full w-full cursor-pointer rounded-md py-4 pl-12 text-base transition-colors",
          {
            "bg-inherit text-base outline-[2px] outline-zinc-300 placeholder:text-gray-400 hover:outline-[2px] hover:outline-(--elem-color) hover:placeholder:text-(--elem-color) focus:outline-[2px] focus:outline-(--elem-color)":
              variant === "form",
            "bg-(--default-color) outline-(--elem-color) placeholder:text-gray-400 hover:outline-[2px] hover:placeholder:text-(--elem-color) focus:outline-[2px]":
              variant === "header",
          },
          className,
        )}
      />
      {children}
    </div>
  );
}
