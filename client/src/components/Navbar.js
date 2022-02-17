import React, { useState } from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <nav className="relative flex flex-wrap  items-center justify-between px-2 py-3 bg-white shadow-lg mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full relative flex justify-between lg:w-auto lg-static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 px-14 whitespace-nowrap uppercase"
              href="#"
            >
              <img src="" alt="" />
              Comfort  zone
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outlinnone focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div class="p-2 space-y-2 ">
                <span class="block w-7 h-0.5 bg-gray-600 animate-pulse"></span>
                <span class="block w-7 h-0.5 bg-gray-600 animate-pulse"></span>
                <span class="block w-6 h-0.5 bg-gray-700 animate-pulse"></span>
              </div>
            </button>

          </div>
          <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="myNavbar">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="lg:px-3 px-14 py-2 flex items-center font-bold leading-snug hover:opacity-75" href="#">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="lg:px-3 px-14 py-2 flex items-center font-bold leading-snug hover:opacity-75" href="#">
                  Login
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
