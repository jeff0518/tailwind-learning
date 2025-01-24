import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="px-6 py-3 flex flex-row justify-between mx-auto container">
        <div className="flex items-center">
          <a href="#" className="text-3xl font-medium">
            Logo
          </a>
        </div>
        <div>
          <Button>Click Me</Button>
          <Button>Click Me</Button>
          <Button>Click Me</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
