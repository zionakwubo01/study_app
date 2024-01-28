import { FaArrowDown } from "react-icons/fa6";
import {
  MdClose,
} from "react-icons/md";


const Header = () => {


  return (
    <div
      className="h-[50px] bg-blue-50 border-b w-full flex justify-center items-center  z-10 fixed top-0 left-0"
      onClick={() => { }}
    >
      <div className="flex items-center  justify-end w-[90%]">
        <div
          className="flex items-center px-2 py-1 border rounded-full gap-3 duration-300 transition-all cursor-pointer z-10 bg-white shadow-sm"

        >
          <img
            className="w-8 h-8 rounded-full border object-cover"
          />


          <FaArrowDown className="rotate-180 duration-300 transition-all" />


        </div>

        <div className=" md:hidden text-[30px] cursor-pointer ml-3  duration-300 transition-all">

          <MdClose
            className="duration-500 transition-all"

          />
        </div>
      </div>

    </div>
  );
};

export default Header;
