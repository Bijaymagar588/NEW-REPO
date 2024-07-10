import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-grey-600">
      <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2> LOGIN</h2>
        <form action="/si" method="post" class="flex flex-col items-start">
          <label for="email" class="mb-1 font-bold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Your E-mail"
            class="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label for="password" class="mb-1 font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            class="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
        </form>
        <button
          type="submit"
          class="w-full py-2 mb-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          LOGIN
        </button>
        <div>
          <Link
            to="/Homepage"
            class="text-blue-600 text-xs hover:underline"
          >
            Forget Password
          </Link>
        </div>
        <div class="Remember-me">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember Me</label>
        </div>
      </div>
    </div>
  );
};

export default Login;
