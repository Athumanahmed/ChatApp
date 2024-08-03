import { create } from "zustand";

const useConversation = create((set) => ({
  // chats
  conversation: null,
  setSelectedConversation: (conversation) => set({ conversation }),

  // messages
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
