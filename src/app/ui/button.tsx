import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "default" | "header";
}

export function Button({ children, variant, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center py-2 font-medium transition-colors",
        {
          "px-4rounded-lg bg-(--primary-color) hover:bg-(--primary-color-hover-focused) active:bg-(--primary-color-active)":
            variant === "primary",
          "rounded-lg bg-(--default-color) px-4 hover:bg-(--default-color-hover-focused) active:bg-(--default-color-active)":
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
