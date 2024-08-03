import React from "react";

const Chat = ({ chat }) => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 hover:text-white rounded p-2 py-1 cursor-pointer">
        {/* avatar */}
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={chat.profilePic} alt="avatar" />
          </div>
        </div>
        {/* avatar */}
        <div className="flex flex-col flex-1">
          <p className="font-semibold ">{chat.fullname}</p>
        </div>
      </div>
      <div className="divider my-0 py-0 "></div>
    </>
  );
};

export default Chat;
