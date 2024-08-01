import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import Chats from "./Chats";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col">
      {/* search input */}
      <form className="flex items-center gap-2">
        <input
          type="search"
          placeholder="Search"
          className="input input-bordered rounded-full bg-slate-300"
        />
        <button type="submit" className="bg-slate-700 p-4 rounded-full">
          <IoSearchOutline  className="w-5 h-5"/>
        </button>
      </form>
      {/* search input */}

      <div className="dividerpx-2"></div>

      {/* chats */}
      <Chats/>
      {/* chats */}

      {/* logout button */}
      <LogoutButton/>
      {/* logout button */}
    </div>
  );
};

export default Sidebar;
