import { useState } from "react";

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const openSideBarHandler = (isOpen: boolean) => {
    setOpenSideBar(isOpen);
  };
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 w-80 hidden sm:flex">
        <p className="text-white">Left</p>
      </div>
      {!openSideBar && (
        <div className="h-full w-64 bg-gray-800">
          <div className="px-4 py-6">
            <h1 className="px-2 text-x1 text-gray-100">title</h1>
          </div>
        </div>
      )}
      <div className="bg-slate-100 w-full">
        <button
          className="absolute -mr-10 mt-16 h-10 w-10 cursor-pointer rounded-br rounded-tr bg-gray-800 text-sm text-white sm:hidden"
          onClick={() => openSideBarHandler(!openSideBar)}
        >
          {openSideBar ? "open" : "close"}
        </button>
        <h1>Right</h1>
      </div>
    </div>
  );
};

export default Dashboard;
