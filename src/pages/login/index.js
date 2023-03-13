import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AContext } from "../../../context/AuthContext";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuth } = useContext(AContext);
  const router = useRouter();
  const handleSubmit = () => {
    handleAuth("The3rdBrother", email);
    router.replace("/add-new");
  };
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-white">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://paysoko.com/asset/images/logo_1675634395.png"
                alt=""
              />

              <h1 className="mt-4 text-gray-600 md:text-lg">Welcome back</h1>

              <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl">
                login to your account
              </h1>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <div className="w-full lg:max-w-xl">
                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>

                <div className="mt-8 md:flex md:items-center">
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Sign in
                  </button>

                  <Link
                    href="/"
                    className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Link
                  href="/sign-up"
                  className="inline-block text-sm text-blue-500 hover:text-blue-800 my-3"
                >
                  Don&apos;t have an account?SignUp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
