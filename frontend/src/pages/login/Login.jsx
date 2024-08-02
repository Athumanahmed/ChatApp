import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleForm = async (e) => {
    e.preventDefault();
    await login(formInputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <p className="text-center text-3xl font-extrabold text-white mb-4">
        Chatty.
      </p>
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h3 className="text-md  text-center mb-3">
          login to start a conversation
        </h3>
        <form onSubmit={handleForm}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-slate-900 font-semibold w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.email}
              onChange={(e) => {
                setFormInputs({ ...formInputs, email: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter your password"
              className="text-slate-900 font-semibold w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              value={formInputs.password}
              onChange={(e) => {
                setFormInputs({ ...formInputs, password: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-row gap-1 p-1 mb-2">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>

            <div className="flex flex-row justify-between flex-wrap p-1">
              <p>Don't have an account?</p>
              <Link
                to={"/signup"}
                className="text-md hover:text-blue-800 inline-block"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
