import React, { useState } from "react";
import { Link } from "react-router-dom";
import Gender from "../../components/Gender";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [formInputs, setFormInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const HandleForm = async (e) => {
    e.preventDefault();

    await signup(formInputs);
  };

  const handleGender = (gender) => {
    setFormInputs({ ...formInputs, gender });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <p className="text-center text-3xl font-extrabold text-white mb-4">
        Chatty.
      </p>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-md  text-center mb-3">
          Sign up to start a conversation
        </h3>

        <form onSubmit={HandleForm}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full px-3 py-2 border text-slate-900 font-semibold bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.fullname}
              onChange={(e) =>
                setFormInputs({ ...formInputs, fullname: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full text-slate-900 font-semibold px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.username}
              onChange={(e) =>
                setFormInputs({ ...formInputs, username: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className=" text-slate-900 font-semibold w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({ ...formInputs, email: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              className=" text-slate-900 font-semibold w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.password}
              onChange={(e) =>
                setFormInputs({ ...formInputs, password: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm password"
              className="text-slate-900 font-semibold w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.confirmPassword}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <Gender
            onCheckboxChange={handleGender}
            selectedGender={formInputs.gender}
          />

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
          <div className="flex flex-row justify-between flex-wrap p-1">
            <p>Already have an account?</p>
            <Link
              to={"/login"}
              className="text-md hover:text-blue-800 inline-block"
            >
              LogIn
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
