import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <nav className="z-20 w-full bg-white/90 shadow-2xl shadow-gray-600/5 border-b border-gray-100">
        <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
            <div className="w-full items-center flex justify-between lg:w-auto">
              <Link href="/" className="flex items-center">
                <img
                  src="https://paysoko.com/asset/images/logo_1675634395.png"
                  className="h-6 mr-3 sm:h-9"
                  alt="Paysoko Logo"
                />
              </Link>
              <label
                htmlFor="hbr"
                onClick={() => setToggle(!toggle)}
                className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-5 rounded bg-gray-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 transition duration-300"
                ></div>
              </label>
            </div>
            <div
              className={`${
                !toggle && "hidden"
              } w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none lg:border-0`}
            >
              <div className="w-full space-y-2 border-primary/10 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                <Link
                  href="/sign-up"
                  className="relative flex h-9 md:ml-auto items-center justify-center sm:px-6"
                >
                  <span className="relative text-sm font-semibold">
                    Sign Up
                  </span>
                </Link>
                <Link
                  href="/login"
                  className="relative flex h-9 md:ml-auto items-center justify-center sm:px-6"
                >
                  <span className="relative text-sm font-semibold text-gray-900">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
