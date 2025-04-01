import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "default" | "clear";
}

const Button = ({ children, variant = "default" }: ButtonProps) => {
  let baseStyles =
    "rounded-full border-2 bg-blue-700 px-12 py-3 text-lg text-white cursor-pointer hover:bg-transparent hover:text-indigo-600";

  switch (variant) {
    case "clear":
      baseStyles =
        "h-16 w-16 flex items-center justify-center rounded-full bg-blue-300 shadow-lg cursor-pointer";
      break;
    default:
      break;
  }
  return (
    <>
      <button className={baseStyles}>{children}</button>
    </>
  );
};

export default Button;
