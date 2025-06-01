import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const events = [
  {
    image: 'https://images.pexels.com/photos/3328070/pexels-photo-3328070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Annual Coral Reef Expedition',
    date: 'June 15-20, 2025',
    time: '9:00 AM - 4:00 PM',
    location: 'Great Barrier Reef',
    spots: '15 spots left',
  },
  {
    image: 'https://images.pexels.com/photos/7526287/pexels-photo-7526287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Marine Conservation Workshop',
    date: 'July 8, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'Ocean Academy Campus',
    spots: '28 spots left',
  },
  {
    image: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Underwater Photography Contest',
    date: 'August 12-15, 2025',
    time: 'All Day',
    location: 'Caribbean Sea',
    spots: '10 spots left',
  },
  {
    image: 'https://images.pexels.com/photos/2426030/pexels-photo-2426030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Deep Sea Research Simulation',
    date: 'September 5, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Research Facility',
    spots: '8 spots left',
  },
];

export const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="events" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Upcoming Events & News" 
          subtitle="Join our exciting events and expeditions to gain hands-on experience in marine exploration and conservation."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ y }}
        >
          {events.map((event, index) => (
            <Card 
              key={index}
              delay={index * 0.1}
              className="flex flex-col h-full relative overflow-hidden group"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05445E]/80 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-300">
                  <Calendar size={16} className="mr-2 text-[#75E6DA]" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock size={16} className="mr-2 text-[#75E6DA]" />
                  {event.time}
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-2 text-[#75E6DA]" />
                  {event.location}
                </div>
                <div className="flex items-center text-gray-300">
                  <User size={16} className="mr-2 text-[#75E6DA]" />
                  {event.spots}
                </div>
              </div>
              
              <motion.button
                className="mt-auto w-full py-2 rounded-full bg-[#189AB4] text-white hover:bg-[#75E6DA] transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Register Now
              </motion.button>
              
              {/* Bubble animation */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-full bg-[#75E6DA]/10 group-hover:scale-[6] transition-all duration-700 -z-10"></div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};