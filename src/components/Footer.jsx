import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Khosomaty. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white dark:hover:text-gray-200 transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white dark:hover:text-gray-200 transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white dark:hover:text-gray-200 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
