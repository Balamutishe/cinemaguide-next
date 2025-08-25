import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "default" | "header" | "icon";
}

export function Button({ children, variant, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex cursor-pointer items-center py-4 font-medium transition-colors",
        {
          "rounded-3xl bg-(--primary-color) px-10 text-lg font-bold hover:bg-(--primary-color-hover-focused) active:bg-(--primary-color-active)":
            variant === "primary",
          "rounded-3xl bg-(--default-color) px-10 text-lg font-bold hover:bg-(--default-color-hover-focused) active:bg-(--default-color-active)":
            variant === "default",
          "font-normal hover:text-(--elem-color)": variant === "header",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
