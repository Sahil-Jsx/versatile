import React, { useState } from "react";
import Components from "../../components/components";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-3xl font-extrabold uppercase">Versatile</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-black hover:text-gray-700">
            Home
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Features
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Pricing
          </a>
          <a href="#" className="text-black hover:text-gray-700">
            Contact
          </a>
        </nav>

        {/* Get Started Button */}
        <div className="hidden md:flex items-center bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
          Get Started
          <Components.Icons.Rocket className="ml-3 mt-1" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-black hover:text-gray-700">
              Home
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              Features
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              Pricing
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              Contact
            </a>
            <div className="flex items-center bg-black text-white px-4 py-2 rounded-lg cursor-pointer">
              Get Started
              <Components.Icons.Rocket className="ml-3 mt-1" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
