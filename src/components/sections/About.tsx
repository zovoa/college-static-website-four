import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Droplets, Users, Award, LifeBuoy } from 'lucide-react';

const stats = [
  { 
    icon: <Users size={28} className="text-[#75E6DA]" />,
    number: '5,000+', 
    label: 'Students' 
  },
  { 
    icon: <Award size={28} className="text-[#75E6DA]" />,
    number: '150+', 
    label: 'Courses' 
  },
  { 
    icon: <Droplets size={28} className="text-[#75E6DA]" />,
    number: '20+', 
    label: 'Dive Locations' 
  },
  { 
    icon: <LifeBuoy size={28} className="text-[#75E6DA]" />,
    number: '98%', 
    label: 'Success Rate' 
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Ocean Academy" 
          subtitle="Dive into our story and discover how we're revolutionizing marine education through immersive underwater experiences." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image collage */}
          <motion.div 
            className="relative h-[400px] md:h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-3/5 h-3/5 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Underwater classroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 h-3/5 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Marine biology student" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-2/5 h-2/5 overflow-hidden rounded-lg shadow-xl z-10">
              <img 
                src="https://images.pexels.com/photos/3646531/pexels-photo-3646531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="School of fish" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#75E6DA]/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#189AB4]/20 rounded-full blur-xl"></div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#75E6DA] mb-4">Our Mission</h3>
            <p className="text-white/90 mb-6">
              Founded in 2010, Ocean Academy has been at the forefront of marine education, combining traditional learning with cutting-edge underwater technology to create immersive educational experiences.
            </p>
            <p className="text-white/90 mb-8">
              Our state-of-the-art facilities and passionate team of marine biologists, oceanographers, and educators work together to inspire the next generation of ocean conservationists and marine scientists.
            </p>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="glass p-4 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="mr-3">{stat.icon}</div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};