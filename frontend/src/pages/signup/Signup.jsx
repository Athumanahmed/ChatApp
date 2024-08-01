import React from "react";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <p className="text-center text-3xl font-extrabold text-white mb-4">
        Chatty.
      </p>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-md  text-center">
          Sign up to start a conversation
        </h3>

        <form>
          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Fullname"
              className="w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="mb-2">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="re-type password"
              className="w-full px-3 py-2 border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="flex flex-row gap-3 p-1">
            <input type="checkbox" />
            <label>Male</label>

            <input type="checkbox" />
            <label>Female</label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-row justify-between flex-wrap p-1">
            <p>Already have an account?</p>
            <a href="#" className="text-md hover:text-blue-800 inline-block">
              LogIn
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
