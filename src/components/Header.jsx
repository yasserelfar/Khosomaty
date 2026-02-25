import { useState } from "react";

function Header({ dark, onToggle }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#product" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="text-2xl font-bold hover:scale-105 transition-transform">
          <a href="#">Khosomaty</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={onToggle}
            className="relative w-12 h-6 bg-gray-500 dark:bg-gray-400 rounded-full transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow flex items-center justify-center text-xs transition-transform ${
                dark ? "translate-x-6" : ""
              }`}
            >
              {dark ? "🌙" : "☀️"}
            </span>
          </button>
          <a href="#" className="text-sm hover:underline">
            Login
          </a>
          <a
            href="#"
            className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition"
          >
            Register
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
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
              strokeWidth={2}
              d={
                mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-800">
          <nav className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-2 text-lg hover:text-blue-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col space-y-2">
              <button
                onClick={onToggle}
                className="flex items-center space-x-2 text-sm"
              >
                {dark ? "🌙 Dark" : "☀️ Light"}
              </button>
              <a href="#" className="text-sm hover:underline">
                Login
              </a>
              <a
                href="#"
                className="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transition w-max"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
export default Header;
