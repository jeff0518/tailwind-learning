import Button from "./Button";
import Input from "./Input";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className=" flex flex-col sm:flex-row justify-between mx-auto container text-center px-6 py-3">
        <div className="py-3">
          <a href="#" className="text-3xl font-medium">
            Logo
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center">
            <Input />
          </div>
          <Button variant="default">Click Me</Button>
          <Button variant="default">Click Me</Button>
          <Button variant="default">Click Me</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
