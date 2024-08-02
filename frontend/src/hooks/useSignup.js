import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullname,
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleErrors({
      fullname,
      username,
      email,
      password,
      confirmPassword,
      gender,
    });

    if (!success) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //   local storage for user
      localStorage.setItem("user-info", JSON.stringify(data));

      // context part
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleErrors = ({
  fullname,
  username,
  email,
  password,
  confirmPassword,
  gender,
}) => {
  if (
    !fullname ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("please add all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
};
