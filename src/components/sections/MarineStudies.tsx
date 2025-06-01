import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Compass, Camera, Microscope, Fish, Anchor, ShieldAlert } from 'lucide-react';

const courses = [
  {
    icon: <Fish className="text-[#75E6DA] w-10 h-10" />,
    title: 'Marine Biology',
    description: 'Study diverse marine species and ecosystems through hands-on underwater exploration.',
    shape: 'shell' as const,
  },
  {
    icon: <Compass className="text-[#75E6DA] w-10 h-10" />,
    title: 'Ocean Navigation',
    description: 'Master the art of underwater navigation using both traditional and modern techniques.',
    shape: 'bubble' as const,
  },
  {
    icon: <Camera className="text-[#75E6DA] w-10 h-10" />,
    title: 'Underwater Photography',
    description: 'Capture the beauty of marine life with specialized underwater photography skills.',
    shape: 'shell' as const,
  },
  {
    icon: <Microscope className="text-[#75E6DA] w-10 h-10" />,
    title: 'Marine Microbiology',
    description: 'Explore the microscopic world of marine organisms and their ecological impact.',
    shape: 'bubble' as const,
  },
  {
    icon: <Anchor className="text-[#75E6DA] w-10 h-10" />,
    title: 'Advanced Diving',
    description: 'Develop professional diving skills for research and exploration purposes.',
    shape: 'shell' as const,
  },
  {
    icon: <ShieldAlert className="text-[#75E6DA] w-10 h-10" />,
    title: 'Conservation Studies',
    description: 'Learn effective strategies for protecting and preserving marine ecosystems.',
    shape: 'bubble' as const,
  },
];

export const MarineStudies: React.FC = () => {
  return (
    <section id="marine-studies" className="py-20 relative overflow-hidden wavy-border">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Marine Studies Programs" 
          subtitle="Explore our diverse range of underwater courses designed to immerse students in the wonders of marine science and ocean exploration."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              shape={course.shape}
              delay={index * 0.1}
              className="flex flex-col h-full relative overflow-hidden group"
            >
              {/* Animated fish that appears on hover */}
              <div className="absolute -right-20 -bottom-20 text-6xl opacity-0 group-hover:opacity-20 transition-all duration-700 group-hover:translate-x-[-50px] group-hover:translate-y-[-30px]">
                🐠
              </div>
              
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-[#05445E]/30 mr-4 sway">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{course.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{course.description}</p>
              
              <motion.div 
                className="mt-auto text-[#75E6DA] font-medium flex items-center"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Explore Course
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              {/* Water-like animation on hover */}
              <div className="absolute inset-0 bg-[#75E6DA]/0 group-hover:bg-[#75E6DA]/5 transition-all duration-700 rounded-xl -z-10"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};