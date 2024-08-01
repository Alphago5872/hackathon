import { Link } from "react-router-dom";
import apiPrivateClient, { apiPublicClient } from "../utils/axios";
import { useState } from "react";

const SignInPage = () => {
  const axios = apiPublicClient;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in the form");
      return;
    }

    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      }).then(res => res.data).catch(err => console.log(err));

      localStorage.setItem("jwt", response.token);
      console.log(response);
    } catch (error) {
      console.log("Error signing in");

      console.log(error.data);
    }
  }

  return (
    <div className="grid w-screen h-screen grid-cols-2">
      <div>
        <img
          className="w-full h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4XanF_Pv6FwkOjOgX8eI8c0fSkzYj8vFFg&s"
        />
      </div>
      <div className="my-auto mx-16 h-fit max-w-3xl p-8">
        <h1 className="text-center text-4xl font-bold">Welcome back!</h1>
        <p className="text-center text-gray-600 font-medium">
          Sign in to continue
        </p>
        <div>
          <form className="mt-8" onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              {/* <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a> */}
            </div>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/signup">
              Sign up now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
