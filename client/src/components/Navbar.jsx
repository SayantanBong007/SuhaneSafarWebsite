import React from "react";

const Navbar = () => (
  <nav className="bg-[#001220] w-full h-20 flex px-6 text-xl font-semibold">
    <div className="w-full flex justify-between items-center">
      {/* Left side: Logo + Title */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Suhane Safar Logo"
          className="w-[70px] h-[70px] object-contain"
        />
        <h1 className="text-white text-2xl italic font-semibold">
          Suhane Safar
        </h1>
      </div>

      {/* Right side: Navigation Links */}
      <div className="flex gap-10">
        <a href="#community-trips" className="text-white hover:text-yellow-400">
          Community Trips
        </a>
        <a href="#community-treks" className="text-white hover:text-yellow-400">
          Community Treks
        </a>
        <a href="#amenities" className="text-white hover:text-yellow-400">
          Amenities
        </a>
        <a href="#why-choose-us" className="text-white hover:text-yellow-400">
          Why Choose Us
        </a>
        <a href="#reviews" className="text-white hover:text-yellow-400">
          Reviews
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
