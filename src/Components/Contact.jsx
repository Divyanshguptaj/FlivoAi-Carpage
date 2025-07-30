import { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

// ✅ Contact Component
// Props: isDark (Boolean) → determines dark/light theme
const Contact = ({ isDark }) => {
  // 📌 State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 📌 State to store validation errors
  const [errors, setErrors] = useState({});

  // 📌 State to show loading state when submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update formData state
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for the field as soon as user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // ✅ Validate form fields before submitting
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    // If there are errors, show them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API request (e.g. sending message to backend)
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Ready to find your dream car? Contact our expert team for personalized assistance and exclusive offers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ✅ Left Side – Contact Info + Why Choose Us */}
          <div className="space-y-8">
            {/* 📌 Contact Information Card */}
            <div
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Contact Information
              </h3>

              {/* 📞 Contact Info Items */}
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: Mail, label: 'Email', value: 'info@elitemotors.com' },
                  { icon: MapPin, label: 'Address', value: '123 Luxury Drive, Auto City, AC 12345' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    {/* Icon box */}
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <item.icon className="text-white" size={20} />
                    </div>
                    {/* Label & Value */}
                    <div>
                      <div
                        className={`font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.label}
                      </div>
                      <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 📌 Why Choose EliteMotors */}
            <div
              className={`p-8 rounded-2xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Why Choose EliteMotors?
              </h3>

              {/* List of features */}
              <ul className="space-y-3">
                {[
                  'Exclusive luxury vehicle collection',
                  'Expert consultation and service',
                  'Competitive financing options',
                  'Comprehensive warranty coverage'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-green-500" size={16} />
                    <span
                      className={isDark ? 'text-gray-300' : 'text-gray-600'}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ Right Side – Contact Form */}
          <div
            className={`p-8 rounded-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 📝 Name Field */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* 📧 Email Field */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* 💬 Message Field */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your dream car or any questions you have..."
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 resize-none ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  } ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* 📩 Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
