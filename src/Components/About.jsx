import { Award, Shield, Star, Zap, ChevronRight } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

// ✅ About Section Component
const About = ({ isDark }) => {
  return (
    <section
      id="about" // ✅ ID for smooth scrolling from navbar
      className={`relative overflow-hidden py-28 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* ✅ Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-left blurred circle */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-transparent rounded-full filter blur-[100px]"></div>
        {/* Bottom-right blurred circle */}
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      {/* ✅ Animated Grid Pattern */}
      <div
        className={`absolute inset-0 opacity-10 ${
          isDark
            ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDZ2LTRoNHYtMkg2eiIvPjwvZz48L2c+PC9zdmc+")]'
            : 'bg-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRINnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0SDZ2LTRoNHYtMkg2eiIvPjwvZz48L2c+PC9zdmc+")]'
        }`}
      ></div>

      {/* ✅ Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ========================== LEFT SIDE CONTENT ========================== */}
          <div className="relative">
            {/* ✅ Section Subtitle with Parallax Effect */}
            <Parallax speed={-5}>
              <span
                className={`text-sm font-medium tracking-widest uppercase mb-4 block ${
                  isDark ? "text-red-400" : "text-red-600"
                }`}
              >
                Automotive Excellence
              </span>
            </Parallax>

            {/* ✅ Section Heading with Gradient Text */}
            <Parallax speed={-3}>
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Crafting{" "}
                <span
                  className={`${
                    isDark
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                  }`}
                >
                  Dream
                </span>{" "}
                Machines
              </h2>
            </Parallax>

            {/* ✅ Description Paragraphs */}
            <Parallax speed={-1}>
              <div
                className={`space-y-6 text-lg mb-10 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <p>
                  Since 1998, EliteMotors has redefined luxury automotive
                  experiences, curating the world's most exclusive supercars for
                  discerning collectors and enthusiasts.
                </p>
                <p>
                  Our showrooms in Monaco, Dubai, and Beverly Hills showcase
                  rare Ferraris, limited-edition Lamborghinis, and bespoke BMW M
                  models unavailable anywhere else.
                </p>
                <p>
                  We don't just sell cars—we deliver automotive masterpieces
                  with white-glove concierge service.
                </p>
              </div>
            </Parallax>

            {/* ✅ Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {[
                { icon: Award, value: "25+", label: "Years", highlight: true },
                { icon: Shield, value: "1.2s", label: "0-60mph" },
                { icon: Star, value: "500+", label: "Supercars" },
                { icon: Zap, value: "VIP", label: "Clients", highlight: true },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                    isDark ? "hover:bg-gray-800" : "hover:bg-white"
                  } ${
                    item.highlight
                      ? isDark
                        ? "bg-gray-800"
                        : "bg-white shadow-md"
                      : ""
                  }`}
                >
                  {/* ✅ Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                      isDark ? "bg-gray-800" : "bg-gray-100"
                    } ${
                      item.highlight
                        ? isDark
                          ? "bg-gradient-to-br from-red-500 to-orange-500"
                          : "bg-gradient-to-br from-blue-600 to-purple-600"
                        : ""
                    }`}
                  >
                    <item.icon
                      className={
                        item.highlight
                          ? "text-white"
                          : isDark
                          ? "text-red-400"
                          : "text-blue-600"
                      }
                      size={20}
                    />
                  </div>

                  {/* ✅ Stat Value */}
                  <div
                    className={`text-2xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.value}
                  </div>

                  {/* ✅ Stat Label */}
                  <div
                    className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Call-to-Action Button */}
            <Parallax speed={-2}>
              <button
                className={`group relative overflow-hidden px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-500 ${
                  isDark
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-xl hover:shadow-red-500/30"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/30"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Discover Our Heritage
                  <ChevronRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </span>
                <span
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark
                      ? "bg-gradient-to-r from-red-700 to-orange-700"
                      : "bg-gradient-to-r from-blue-700 to-purple-700"
                  }`}
                ></span>
              </button>
            </Parallax>
          </div>

          {/* ========================== RIGHT SIDE VISUALS ========================== */}
          <div className="relative h-full">
            {/* ✅ Main Image with Parallax */}
            <Parallax speed={10}>
              <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1740&q=80"
                  alt="Ferrari SF90 Stradale"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    isDark
                      ? "from-black/80 via-black/20 to-transparent"
                      : "from-gray-900/80 via-gray-900/20 to-transparent"
                  }`}
                ></div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-white"
                    }`}
                  >
                    Ferrari SF90 Stradale
                  </h3>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-200"}`}
                  >
                    Hybrid hypercar with 986 HP
                  </p>
                </div>
              </div>
            </Parallax>

            {/* ✅ Floating Badge */}
            <Parallax speed={5}>
              <div
                className={`absolute -top-6 -right-6 w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-xl ${
                  isDark
                    ? "bg-gradient-to-br from-red-600 to-orange-600"
                    : "bg-gradient-to-br from-blue-600 to-purple-600"
                }`}
              >
                <span className="text-white text-3xl font-bold">25</span>
                <span className="text-white text-xs uppercase tracking-wider">
                  Years
                </span>
              </div>
            </Parallax>

            {/* ✅ Secondary Image */}
            <Parallax speed={-5}>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-white z-10">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1740&q=80"
                  alt="Lamborghini Aventador"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Parallax>

            {/* ✅ Decorative Blur Circle */}
            <div
              className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full ${
                isDark ? "bg-red-500/20" : "bg-blue-500/20"
              } filter blur-[80px]`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
