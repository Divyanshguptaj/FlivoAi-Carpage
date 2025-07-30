import { useState, useEffect } from "react";
import { Menu, X, Search, Sun, Moon } from "lucide-react";

// ✅ Navbar Component
const Navbar = ({ isDark, toggleTheme }) => {
  // ✅ State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // ✅ State to detect if user has scrolled (used for navbar background change)
  const [scrolled, setScrolled] = useState(false);

  // ✅ Detect page scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // navbar changes after scrolling 10px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scrolling to specific section
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // ✅ Navigation items
  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-black/90 backdrop-blur-md py-2 border-b border-white/10"
            : "bg-white/95 backdrop-blur-md py-2 border-b border-gray-200"
          : "bg-transparent py-4"
      }`}
    >
      {/* ✅ Navbar Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* ✅ LOGO - Clicking it scrolls to Home */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleScrollTo("home")}
          >
            {/* Logo Icon */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300 ${
                isDark
                  ? "bg-gradient-to-br from-red-600 to-orange-500"
                  : "bg-gradient-to-br from-blue-600 to-purple-500"
              }`}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            {/* Logo Text */}
            <span
              className={`text-2xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-gray-400"
              }`}
            >
              ELITE
              <span className={isDark ? "text-red-500" : "text-blue-600"}>
                AUTO
              </span>
            </span>
          </div>

          {/* ✅ DESKTOP NAVIGATION (hidden on small screens) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.id)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider ${
                  isDark
                    ? "text-white/90 hover:text-red-500"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors duration-300`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* ✅ RIGHT SIDE ICONS (Theme toggle, search, mobile menu) */}
          <div className="flex items-center space-x-4 sm:space-x-6">

            {/* 🌙 / ☀️ Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* 🔍 Search Icon (Hidden on small screens) */}
            <button
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              } hidden sm:block`}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* 📱 Mobile Menu Button (Visible only on mobile) */}
            <button
              className={`p-2 rounded-full transition-colors lg:hidden ${
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE MENU (Full-screen overlay) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isDark
            ? "bg-black/95 backdrop-blur-lg"
            : "bg-white/95 backdrop-blur-lg"
        } ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="container mx-auto px-4 h-full flex flex-col">

          {/* ✅ Mobile Menu Header (Logo + Close Button) */}
          <div className="flex justify-between items-center py-6">
            {/* Clickable Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleScrollTo("home")}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  isDark
                    ? "bg-gradient-to-br from-red-600 to-orange-500"
                    : "bg-gradient-to-br from-blue-600 to-purple-500"
                }`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span
                className={`text-2xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                ELITE
                <span className={isDark ? "text-red-500" : "text-blue-600"}>
                  AUTO
                </span>
              </span>
            </div>

            {/* ❌ Close Button */}
            <button
              className={`p-2 rounded-full ${
                isDark
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* ✅ Mobile Menu Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center space-y-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.id)}
                className={`text-lg font-medium uppercase tracking-wider ${
                  isDark
                    ? "text-white/90 hover:text-red-500"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;