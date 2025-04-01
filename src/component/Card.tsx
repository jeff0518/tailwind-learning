import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <a href="/">
      <div className="h-44 rounded-3xl border-4 border-black bg-white p-5 flex items-center hover:bg-yellow-200">
        <div className="text-2xl font-bold">{title}</div>
        <div className="mt-4 text-lg font-medium">{children}</div>
      </div>
    </a>
  );
};

export default Card;
