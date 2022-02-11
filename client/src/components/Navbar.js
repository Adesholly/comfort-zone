import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <a href="" className="flex items-center py-4 px-2">
                <img src='' className="h-12 w-12 mr-2" />
                <span className="font-bold hover:text-gray-800 text-lg">
                  Comfort Zone
                </span>
              </a>
            </div>

            <div className="hidden sm:flex items-center space-x-1">
              <a
                href=""
                className="py-2 px-2 font-medium text-gray-500 hover:text-gray-800"
              >
                Log In
              </a>
              <a
                href=""
                className="py-2 px-2 font-medium text-gray-500  hover:text-gray-800 hover:f ont-semibold"
              >
                Register
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                className="w-6 h-6 text-gray-800"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

          </div>      
        </div>
        
        {/* Mobile menu */}
        <div className="hidden mobile-menu">
          <ul>
            <li>
              <a></a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
