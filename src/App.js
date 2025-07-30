import { useState, useEffect } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

// ✅ Main App Component
const App = () => {
  // Dark Mode State
  const [isDark, setIsDark] = useState(false);

  // Toggle Dark/Light Theme
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // ✅ Enable smooth scrolling for the whole page
    document.documentElement.style.scrollBehavior = "smooth";

    // ✅ Add custom CSS animations dynamically
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }

      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      .delay-1000 {
        animation-delay: 1s;
      }
    `;

    // Append the style element to document head
    document.head.appendChild(style);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* ✅ Navbar - Pass dark mode and toggleTheme */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* ✅ Each section wrapped with IDs to allow smooth scroll */}
      <section id="home">
        <Hero isDark={isDark} />
      </section>

      <section id="about">
        <About isDark={isDark} />
      </section>

      <section id="services">
        <Services isDark={isDark} />
      </section>

      <section id="contact">
        <Contact isDark={isDark} />
      </section>

      {/* ✅ Footer */}
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;
