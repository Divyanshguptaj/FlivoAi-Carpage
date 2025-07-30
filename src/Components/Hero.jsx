import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import carsVideo from '../Assets/sportcar1.mp4'

const Hero = ({ isDark }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video (muted for browsers)
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* ---- LUXURY VIDEO BACKGROUND ---- */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-70"
        >
          <source src={carsVideo} type="video/mp4" />
          {/* Fallback image */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80"></div>
      </div>

      {/* ---- NEON GLOW EFFECTS ---- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-red-500/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* ---- MAIN CONTENT ---- */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Animated Tagline */}
          <div className="mb-6 overflow-hidden">
            <span className="inline-block text-lg md:text-xl font-medium text-red-500 tracking-widest animate-slide-up">
              LUXURY REDEFINED
            </span>
          </div>

          {/* Headline with Typing Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              ENGINEERED FOR
            </span>
            <span className="block animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                THE EXTRAORDINARY
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
            Exclusive supercars from Ferrari, Lamborghini, and BMW. Limited editions with unmatched performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <button
              onClick={scrollToServices}
              className="group relative bg-transparent border-2 border-red-500 text-white px-10 py-4 rounded-full font-medium text-lg overflow-hidden transition-all duration-500 hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/40"
            >
              <span className="relative z-10 flex items-center gap-3">
                EXPLORE COLLECTION
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </span>
              <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;