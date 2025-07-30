import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ service, onClick, isDark, isHovered }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative h-full cursor-pointer group overflow-hidden rounded-2xl shadow-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}
      onClick={() => onClick(service)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={service.bgImage} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/80 via-black/50 to-black/30' : 'bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-gray-900/30'}`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-8">
        {/* Badge */}
        <span className={`self-start px-3 py-1 rounded-full text-xs font-medium mb-4 ${isDark ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-600'}`}>
          {service.badge}
        </span>
        
        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-3xl ${isDark ? 'bg-gray-800/50 text-red-400' : 'bg-gray-800/50 text-blue-600'}`}>
          {service.icon}
        </div>
        
        {/* Title & Description */}
        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-200'}`}>
          {service.title}
        </h3>
        <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-white'}`}>
          {service.description}
        </p>
        
        {/* Price */}
        <div className={`text-lg font-medium mt-auto mb-4 ${isDark ? 'text-red-400' : 'text-blue-600'}`}>
          {service.price}
        </div>
        
        {/* CTA */}
        <motion.div
          animate={{ 
            x: isHovered ? 5 : 0,
            opacity: isHovered ? 1 : 0.8
          }}
          className={`flex items-center ${isDark ? 'text-red-400' : 'text-blue-600'}`}
        >
          <span className="font-medium mr-2">Explore</span>
          <ChevronRight className="h-5 w-5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;