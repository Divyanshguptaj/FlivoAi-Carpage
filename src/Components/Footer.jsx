// import def from "ajv/dist/vocabularies/applicator/additionalItems";


// Footer Component
const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
              EliteMotors
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your premier destination for luxury and performance vehicles. Experience automotive excellence like never before.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-semibold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact', 'Financing', 'Trade-In'].map((link) => (
                <li key={link}>
                  <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['New Vehicles', 'Pre-Owned', 'Service & Parts', 'Financing', 'Insurance', 'Warranty'].map((service) => (
                <li key={service}>
                  <button className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} EliteMotors. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;