import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Heart, Leaf, Globe, Shield } from 'lucide-react';

const initiatives = [
  {
    icon: <Leaf className="w-12 h-12 text-[#75E6DA]" />,
    title: 'Coral Restoration',
    description: 'Our students actively participate in replanting endangered coral species to restore damaged reef ecosystems.',
  },
  {
    icon: <Globe className="w-12 h-12 text-[#75E6DA]" />,
    title: 'Ocean Cleanup',
    description: 'Regular expeditions to remove plastic and other pollutants from our oceans and coastal areas.',
  },
  {
    icon: <Shield className="w-12 h-12 text-[#75E6DA]" />,
    title: 'Protected Marine Areas',
    description: 'We work with local authorities to establish and maintain marine protected areas for endangered species.',
  },
  {
    icon: <Heart className="w-12 h-12 text-[#75E6DA]" />,
    title: 'Community Education',
    description: 'Educating local communities about sustainable fishing practices and marine conservation.',
  },
];

export const CoralReef: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="coral-reef" className="py-20 relative overflow-hidden bg-[#05445E]" ref={containerRef}>
      {/* Decorative elements with parallax */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#75E6DA]/10 blur-2xl"
        style={{ y: parallaxY1 }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#189AB4]/20 blur-3xl"
        style={{ y: parallaxY2 }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-[#75E6DA]/30 blur-xl"
        style={{ y: parallaxY3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Coral Reef Conservation" 
          subtitle="Join our mission to protect the world's coral reefs through education, research, and active conservation initiatives."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#75E6DA] mb-6">Our Conservation Initiatives</h3>
            
            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="p-3 bg-[#05445E]/50 rounded-full mr-4 sway">
                    {initiative.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{initiative.title}</h4>
                    <p className="text-gray-300">{initiative.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button size="lg">Join Conservation Efforts</Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2725479/pexels-photo-2725479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Coral reef conservation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/683419/pexels-photo-683419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Marine conservation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl floating">
              🐠
            </div>
            <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 text-5xl floating-slow">
              🐙
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};