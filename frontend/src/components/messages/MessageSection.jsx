import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
const MessageSection = () => {
  const noChat = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChat ? (
        <NoChat />
      ) : (
        <>
          <div className="bg-slate-800 text-slate-300  py-2 mb-2">
            <p className=" font-semibold px-4">Athumani Ahmed</p>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageSection;

const NoChat = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center"></div>
      <p className="font-semibold text-3xl">Chatty.</p>
      <p className="font-semibold text-sm">
        Select a chat to start a conversation
      </p>
      <TiMessages className="text-2xl md:text-4xl text-center" />
    </div>
  );
};
