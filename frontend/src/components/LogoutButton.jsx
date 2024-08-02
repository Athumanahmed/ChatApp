import React from "react";
import { CgLogOut } from "react-icons/cg";
import useLogout from "../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <div
          className="flex flex-row items-center justify-start text-red-400 font-semibold cursor-pointer "
          onClick={logout}
        >
          <CgLogOut className="w-5 h-5 " />
          <p className="text-sm">logout</p>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
