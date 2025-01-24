import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button className="rounded-full border-2 bg-blue-700 px-12 py-3 text-lg text-white hover:bg-transparent hover:text-indigo-600">
        {children}
      </button>
    </>
  );
};

export default Button;
