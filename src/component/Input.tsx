import { MdOutlineMail } from "react-icons/md";

const Input = () => {
  return (
    <div className="flex w-full gap-2 items-center relative">
      <label className="text-2xl font-bold text-white-500 whitespace-nowrap">
        Email:
      </label>
      <input
        type="text"
        className="w-full text-sm font-normal text-gray-700 border border-gray-300 px-3 py-3 bg-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-all rounded-full"
        placeholder="Enter text"
      />
      <span className="absolute inset-y-0 right-4 inline-flex items-center">
        <MdOutlineMail className="text-gray-500" size={20} />
      </span>
    </div>
  );
};
export default Input;
