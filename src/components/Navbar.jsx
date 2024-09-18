/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect, useRef, useCallback } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineFolder,
  AiOutlineMail,
  AiOutlineLogout,
  AiOutlineRobot,
  AiOutlineDown,
  AiOutlineCamera,
  AiOutlineMessage,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showAIMenu, setShowAIMenu] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const aiMenuRef = useRef(null);
  const navigate = useNavigate();

  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = useCallback(() => {
    setNav(false);
    setShowAIMenu(false);
  }, []);

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded);
    localStorage.setItem('user', JSON.stringify(decoded));
    setShowModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setShowLogout(false);
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const toggleAIMenu = () => {
    setShowAIMenu(!showAIMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aiMenuRef.current && !aiMenuRef.current.contains(event.target)) {
        setShowAIMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = useCallback((to) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    closeNav();
  }, [navigate, closeNav]);

  const handleAINavigation = useCallback((path) => {
    navigate(path);
    closeNav();
  }, [navigate, closeNav]);

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0" />
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-4 sm:px-12 h-20 relative z-10">
        <a href="#" className="cursor-pointer" onClick={() => handleNavigation('hero')}>TUAN ANH DEV</a>

        <ul className="hidden md:flex gap-12 cursor-pointer items-center">
          <li className="cursor-pointer" onClick={() => handleNavigation('skills')}>
            About
          </li>
          <li className="cursor-pointer" onClick={() => handleNavigation('portfolio')}>
            Portfolio
          </li>
          <li className="relative group cursor-pointer" ref={aiMenuRef}>
            <div className="flex items-center" onClick={toggleAIMenu}>
              AI <AiOutlineDown className="ml-1" />
            </div>
            {showAIMenu && (
              <ul className="absolute left-0 mt-2 space-y-2 bg-purple-900/30 backdrop-blur-sm border border-purple-900 text-white p-3 rounded-md w-48">
                <li className="cursor-pointer" onClick={() => handleAINavigation('/ai-image')}><span className="text-sm block text-gray-300 hover:text-purple-300 text-left">AI Image</span></li>
                <li className="cursor-pointer" onClick={() => handleAINavigation('/ai-chatbox')}><span className="text-sm block text-gray-300 hover:text-purple-300 text-left">AI Chatbot</span></li>
                {/* Add more AI-related links as needed */}
              </ul>
            )}
          </li>
          <li className="cursor-pointer" onClick={() => handleNavigation('contact')}>
            Contact
          </li>
          <li className="flex items-center relative cursor-pointer" onClick={user ? toggleLogout : toggleModal}>
            <FcGoogle className="mr-2" />
            <span>{user ? user.name : "Login"}</span>
            {showLogout && user && (
              <div className="absolute top-full right-0 mt-2 bg-white text-black p-2 rounded shadow">
                <button onClick={handleLogout} className="flex items-center cursor-pointer">
                  <AiOutlineLogout className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden text-gray-200 cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed top-0 left-0 min-h-screen w-full bg-purple-900/90 backdrop-blur-lg z-40"
        >
          <div className="flex justify-end p-4">
            <AiOutlineClose size={30} className="text-gray-200 cursor-pointer" onClick={closeNav} />
          </div>
          <ul className="font-semibold text-2xl space-y-8 mt-16 text-center">
            <li className="flex items-center justify-center cursor-pointer" onClick={() => handleNavigation('skills')}>
              <AiOutlineUser className="mr-2" />
              About
            </li>
            <li className="flex items-center justify-center cursor-pointer" onClick={() => handleNavigation('portfolio')}>
              <AiOutlineFolder className="mr-2" />
              Portfolio
            </li>
            <li className="flex flex-col items-center justify-center cursor-pointer">
              <div className="flex items-center" onClick={toggleAIMenu}>
                <AiOutlineRobot className="mr-2" />
                AI <AiOutlineDown className="ml-1" />
              </div>
              {showAIMenu && (
                <ul className="mt-2 space-y-2 text-left">
                  <li className="flex items-center cursor-pointer" onClick={() => handleAINavigation('/ai-image')}>
                    <AiOutlineCamera className="mr-2" />
                    <span className="text-sm">AI Image</span>
                  </li>
                  <li className="flex items-center cursor-pointer" onClick={() => handleAINavigation('/ai-chatbox')}>
                    <AiOutlineMessage className="mr-2" />
                    <span className="text-sm">AI Chatbot</span>
                  </li>
                  {/* Add more AI-related links as needed */}
                </ul>
              )}
            </li>
            <li className="flex items-center justify-center cursor-pointer" onClick={() => handleNavigation('contact')}>
              <AiOutlineMail className="mr-2" />
              Contact
            </li>
            <li
              className="flex items-center justify-center relative cursor-pointer"
              onClick={user ? toggleLogout : toggleModal}
            >
              <FcGoogle className="mr-2" />
              <span>{user ? user.name : "Login"}</span>
              {showLogout && user && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white text-black p-2 rounded shadow">
                  <button onClick={handleLogout} className="flex items-center cursor-pointer">
                    <AiOutlineLogout className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </li>
          </ul>
        </motion.div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex justify-center z-50">
          <div className="absolute top-[350px] bg-gray-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Login</h2>
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <button
              onClick={toggleModal}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
