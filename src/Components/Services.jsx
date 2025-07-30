import { Star, Shield, Zap, ChevronRight, Clock, Gauge, Battery, Leaf } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import ServiceCard from "./ServiceCard";

// ✅ Services Component
const Services = ({ isDark }) => {
  // ✅ State for tracking which service modal is open
  const [selectedService, setSelectedService] = useState(null);

  // ✅ State to handle hover effects on service cards
  const [hoveredCard, setHoveredCard] = useState(null);

  // ✅ List of services offered (with details for modal)
  const services = [
    {
      id: 1,
      title: 'Hypercar Collection',
      description: 'Own the pinnacle of automotive engineering with our exclusive hypercar portfolio.',
      fullDescription: 'Our hypercar collection represents the absolute zenith of automotive achievement. Each masterpiece combines Formula 1 technology with road-going practicality, featuring carbon fiber monocoques, hybrid powertrains producing 1000+ HP, and active aerodynamics. Limited to production runs of less than 500 units worldwide, these are investments as much as they are vehicles.',
      price: 'From $2,500,000',
      icon: '🚀',
      iconComponent: Star,
      badge: 'Limited Edition',
      features: ['Carbon Fiber Monocoque', 'Hybrid Powertrain', 'Active Aerodynamics', 'F1-Derived Technology'],
      specs: [
        { icon: Gauge, label: '0-60 MPH', value: '2.3s' },
        { icon: Clock, label: 'Top Speed', value: '250+ MPH' },
        { icon: Battery, label: 'Power', value: '1000+ HP' },
        { icon: Leaf, label: 'Carbon Footprint', value: 'Neutral' }
      ],
      bgImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?...'
    },
    {
      id: 2,
      title: 'Track Weapons',
      description: 'Circuit-bred machines designed for maximum performance and driver engagement.',
      fullDescription: 'These are not merely sports cars - they are street-legal race cars engineered to dominate track days while remaining compliant for road use. Featuring sequential transmissions, motorsport-derived suspension, and aerodynamic packages generating over 1000kg of downforce. Each vehicle comes with an exclusive driver training program at world-famous circuits.',
      price: 'From $350,000',
      icon: '🏁',
      iconComponent: Zap,
      badge: 'Track Ready',
      features: ['Sequential Transmission', 'Race-Derived Suspension', '1000kg+ Downforce', 'Driver Training Program'],
      specs: [
        { icon: Gauge, label: '0-60 MPH', value: '2.8s' },
        { icon: Clock, label: 'Nürburgring Time', value: 'Under 7:00' },
        { icon: Battery, label: 'Power-to-Weight', value: '500HP/Tonne' },
        { icon: Leaf, label: 'Lap Consistency', value: '99.9%' }
      ],
      bgImage: 'https://images.unsplash.com/photo-1580654712603-eb43273aff33?...'
    },
    {
      id: 3,
      title: 'EV Hyper GT',
      description: 'The future of grand touring - silent, sustainable, and staggeringly fast.',
      fullDescription: 'Our Electric Hyper GT collection redefines what\'s possible with electrification. Combining four-figure torque outputs with 400+ mile ranges, these vehicles feature revolutionary battery technology that charges in under 15 minutes. The interiors showcase sustainable luxury with vegan leather alternatives and reclaimed materials, without compromising on the 200+ MPH performance expected from our brand.',
      price: 'From $450,000',
      icon: '⚡',
      iconComponent: Shield,
      badge: 'Carbon Neutral',
      features: ['15min Charging', '2000+ Nm Torque', 'Sustainable Materials', 'AI Copilot'],
      specs: [
        { icon: Gauge, label: '0-60 MPH', value: '1.9s' },
        { icon: Clock, label: 'Range', value: '450 Miles' },
        { icon: Battery, label: 'Torque', value: '2000+ Nm' },
        { icon: Leaf, label: 'Carbon Offset', value: '100%' }
      ],
      bgImage: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?...'
    }
  ];

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-28 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} border-b border-gray-200`}
    >
      {/* ✅ Decorative background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/10 to-transparent rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ✅ Section Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start hidden
          whileInView={{ opacity: 1, y: 0 }} // Animate into view
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className={`text-sm font-medium tracking-widest uppercase mb-4 block ${isDark ? 'text-red-400' : 'text-red-600'}`}>
            Exclusive Portfolio
          </span>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <span className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'}>
              Performance
            </span> Perfected
          </h2>

          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Each vehicle in our collection undergoes a 500-point certification process to ensure it meets our exacting standards of excellence.
          </p>
        </motion.div>

        {/* ✅ Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* ✅ Each service card is a separate component */}
              <ServiceCard
                service={service}
                onClick={setSelectedService} // Opens modal
                isDark={isDark}
                isHovered={hoveredCard === service.id}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Modal appears when a service is selected */}
      <AnimatePresence>
        {selectedService && (
          <Modal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
            isDark={isDark}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;