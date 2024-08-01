import React from "react";
import { CgLogOut } from "react-icons/cg";
const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <div className="flex flex-row items-center justify-start text-red-400 font-semibold cursor-pointer ">
        <CgLogOut className="w-5 h-5 " />
        <p className="text-sm">logout</p>
      </div>
    </div>
  );
};

export default LogoutButton;
