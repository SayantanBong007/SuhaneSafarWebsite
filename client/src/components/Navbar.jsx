import React from "react";

const Navbar = () => (
  <header className="bg-[#001220] w-full h-20 flex px-6 text-xl font-semibold fixed top-0 z-50 backdrop-blur-sm border-b">
    <div className="container mx-auto px-4 lg:px-8">
      
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Suhane Safar Logo"
          className="h-[80px] w-[80px] text-primary object-contain"
        />
        <span className="text-white text-2xl font-bold">
          Suhane Safar
        </span>
        </div>


      {/* Right side: Navigation Links */}
      <nav className="hidden md:flex gap-10 items-center">
        <a href="#community-trips" className="text-white hover:text-yellow-400 transition-smooth">
          Community Trips
        </a>
        <a href="#community-treks" className="text-white hover:text-yellow-400 transition-smooth">
          Community Treks
        </a>
        <a href="#amenities" className="text-white hover:text-yellow-400 transition-smooth">
          Amenities
        </a>
        <a href="#why-choose-us" className="text-white hover:text-yellow-400 transition-smooth">
          Why Choose Us
        </a>
        <a href="#reviews" className="text-white hover:text-yellow-400 transition-smooth">
          Reviews
        </a>
      </nav>
      </div>
    </div>
  </header>
);

export default Navbar;
