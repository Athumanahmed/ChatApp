import React from "react";
import Chat from "./Chat";
import useGetUserChats from "../hooks/useGetUserChats";

const Chats = () => {
  const { loading, chats } = useGetUserChats();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {chats.map((chat) =>(
        <Chat key={chat._id} chat={chat} />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Chats;
