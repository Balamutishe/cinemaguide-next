import clsx from "clsx";
import { FC, RefObject } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "header" | "form";
  className?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  ref?: RefObject<HTMLInputElement | null>;
}

export const Input: FC<IInputProps> = ({
  variant,
  children,
  placeholder,
  name,
  onChange,
  defaultValue,
  ref,
  className,
}) => {
  const uniqueId = crypto.randomUUID();

  return (
    <div className="relative flex flex-1">
      {name && (
        <label htmlFor={uniqueId} className="sr-only">
          {name}
        </label>
      )}
      <input
        id={uniqueId}
        ref={ref}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        className={clsx(
          className,
          "peer block h-full w-full cursor-pointer rounded-md py-4 pl-12 text-base transition-colors",
          {
            "bg-inherit text-base outline-[2px] outline-zinc-300 placeholder:text-gray-400 hover:outline-[2px] hover:outline-(--elem-color) hover:placeholder:text-(--elem-color) focus:outline-[2px] focus:outline-(--elem-color)":
              variant === "form",
            "bg-(--default-color) outline-(--elem-color) placeholder:text-gray-400 hover:outline-[2px] hover:placeholder:text-(--elem-color) focus:outline-[2px]":
              variant === "header",
          },
        )}
        autoComplete="off"
      />
      {children}
    </div>
  );
};
