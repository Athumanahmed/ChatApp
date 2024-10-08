import React from "react";
import useConversation from "../store/useConversation";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-bold text-gray-200">{conversation.fullname}</p>
        </div>
      </div>
    </>
  );
};

export default Conversation;
