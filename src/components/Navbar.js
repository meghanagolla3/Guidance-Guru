import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch, FaTh, FaUserCircle } from "react-icons/fa";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const userMenuRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
      if (navMenuRef.current && !navMenuRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menus = [
    {
      title: "Features",
      items: [
        { label: "Features", to: "/features" },
        { label: "Resume Builder", to: "/resume-builder" },
        { label: "Chatbot", to: "/chatbot" },
      ],
    },
    {
      title: "Platform",
      items: [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Leaderboard", to: "/leaderboard" },
      ],
    },
    {
      title: "Company",
      items: [{ label: "About", to: "/about" }],
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center space-x-4">
          {/* Language */}
          <select className="bg-transparent text-white focus:outline-none">
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </select>

          {/* Icons */}
          <button className="hover:text-yellow-300">
            <FaSearch />
          </button>
          <button className="hover:text-yellow-300">
            <FaTh />
          </button>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              className="hover:text-yellow-300 flex items-center space-x-1"
              onClick={() => setUserMenuOpen((prev) => !prev)}
            >
              <FaUserCircle size={20} />
              {user && (
                <span className="text-white text-sm ml-1 hidden md:inline">
                  {user.displayName?.split(" ")[0] || user.email}
                </span>
              )}
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-md z-50">
                {user ? (
                  <>
                    <p className="px-4 py-2 text-sm border-b">{user.email}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="w-full bg-white shadow border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-orange-600 font-bold text-2xl flex items-center space-x-2"
          >
            <span>🎓</span>
            <span>GuidanceGuru</span>
          </Link>

          {/* Center Menu */}
          <div
            className="hidden md:flex space-x-6 items-center relative"
            ref={navMenuRef}
          >
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
              onClick={() => setActiveDropdown(null)}
            >
              Home
            </Link>

            {menus.map((menu, idx) => (
              <div key={idx} className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 flex items-center space-x-1 transition"
                  onClick={() =>
                    setActiveDropdown((prev) => (prev === idx ? null : idx))
                  }
                >
                  <span>{menu.title}</span>
                  <FaChevronDown className="text-xs mt-1" />
                </button>

                {activeDropdown === idx && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg rounded py-2 w-56 z-50">
                    {menu.items.map(({ label, to }, i) => (
                      <Link
                        key={i}
                        to={to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/get-guidance"
              className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Get Guidance
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
