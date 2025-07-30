import { motion, AnimatePresence } from 'framer-motion'; // For animations
import { X } from 'lucide-react'; // Close (X) icon

// ✅ Modal Component
// Props:
// - isOpen: Boolean → Controls whether the modal is visible
// - onClose: Function → Called to close the modal
// - service: Object → Contains service details (title, image, specs, features, etc.)
// - isDark: Boolean → Determines dark/light theme
const Modal = ({ isOpen, onClose, service, isDark }) => {
  return (
    <AnimatePresence>
      {/* ✅ Only render modal if isOpen is true */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} // Starting opacity (hidden)
          animate={{ opacity: 1 }} // Animate to visible
          exit={{ opacity: 0 }} // Fade out when closing
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* 🔲 Backdrop (dark transparent background) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose} // Close modal on clicking outside
          />

          {/* 📦 MODAL CONTENT */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }} // Slightly smaller & hidden
            animate={{ scale: 1, opacity: 1 }} // Zoom in & show
            exit={{ scale: 0.9, opacity: 0 }} // Zoom out & hide
            className={`relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            {/* ❌ Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
                isDark
                  ? 'hover:bg-gray-700 text-gray-300'
                  : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <X className="h-6 w-6" />
            </button>

            {/* 📄 MODAL LAYOUT - Divided into Image & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* 🖼️ IMAGE SECTION */}
              <div className="relative h-64 lg:h-full">
                <img
                  src={service.bgImage} // Service background image
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient overlay on image */}
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? 'bg-gradient-to-t from-black/80 via-black/30 to-transparent'
                      : 'bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent'
                  }`}
                ></div>

                {/* Title & Price at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-200'}>
                    {service.price}
                  </p>
                </div>
              </div>

              {/* 📜 DETAILS SECTION */}
              <div
                className={`p-8 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {/* Heading */}
                <h4
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Technical Specifications
                </h4>

                {/* Full Description */}
                <p className="mb-8">{service.fullDescription}</p>

                {/* 📊 SPECS GRID */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {service.specs.map((spec, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        {/* Dynamic Icon */}
                        <spec.icon
                          className={`h-5 w-5 mr-2 ${
                            isDark ? 'text-red-400' : 'text-blue-600'
                          }`}
                        />
                        <span className="text-sm font-medium">
                          {spec.label}
                        </span>
                      </div>
                      {/* Spec Value */}
                      <div
                        className={`text-xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 📌 KEY FEATURES LIST */}
                <div className="mb-8">
                  <h5
                    className={`text-lg font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Key Features
                  </h5>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {/* Bullet point */}
                        <span
                          className={`inline-block h-2 w-2 rounded-full mt-2 mr-2 ${
                            isDark ? 'bg-red-400' : 'bg-blue-600'
                          }`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA BUTTON */}
                <button
                  className={`w-full py-4 rounded-lg font-semibold ${
                    isDark
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:shadow-red-500/30'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30'
                  }`}
                >
                  Schedule Private Viewing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;