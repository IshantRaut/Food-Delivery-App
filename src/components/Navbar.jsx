import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-gray-100 flex flex-col lg:flex-row items-center justify-between py-3 px-6 mb-10 shadow-md rounded-lg relative">
      {/* Date (Moved to top-left corner) */}
      <h3 className="text-sm text-gray-600 absolute top-2 left-4  lg:block">
        {new Date().toUTCString().slice(0, 16)}
      </h3>

      {/* Logo (Centered in mobile view) */}
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-4 w-full">
        <img 
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png" 
          className="w-20 lg:w-28"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full lg:w-[25vw] mt-4 lg:mt-0">
        <input
          type="search"
          name="search"
          placeholder="Search here..."
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-2 border border-gray-400 bg-gray-50 text-sm rounded-lg outline-none w-full focus:border-gray-600"
        />
      </div>
    </nav>
  );
};

export default Navbar;
