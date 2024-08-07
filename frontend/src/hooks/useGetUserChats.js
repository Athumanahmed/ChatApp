import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUserChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      setLoading(true);

      try {
        const userInfo = JSON.parse(localStorage.getItem("user-info"));
        const res = await fetch("http://localhost:8000/api/users/", {
          headers: { userInfo: JSON.stringify(userInfo) },
        });
        const data = await res.json();
        console.log(data.data);
        if (data.error) {
          throw new Error(data.error);
        }
        setChats(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, []);

  return { loading, chats };
};

export default useGetUserChats;
