import { ReactNode } from "react";
import Button from "./Button";
import nikeImage from "../../public/nike.jpg";

interface CardProps {
  children: ReactNode;
  title: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div>
      <div className="rounded-3xl border-4 border-black bg-white flex flex-col items-center hover:bg-yellow-200 relative">
        <img src={nikeImage} className="rounded-lg opacity-50" />
        <div className="absolute left-0 top-0 p-4">
          <div className="text-2xl font-bold">{title}</div>
          <div className="mt-4 text-lg font-medium">{children}</div>
        </div>
        <div className="absolute right-2 bottom-2 h-16 w-16 flex items-center justify-center rounded-full bg-blue-300 shadow-lg">
          Circle
        </div>
        <div className="absolute right-2 bottom-2">
          <Button variant="clear">Click Me</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
