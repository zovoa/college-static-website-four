import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Submarine } from '../3d/Submarine';
import { Button } from '../ui/Button';
import { Anchor, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #05445E, #189AB4)',
      }}
    >
      {/* Light rays effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 bg-[#D4F1F9]"
            style={{
              left: `${15 + i * 20}%`,
              width: '10px',
              height: '140%',
              transform: 'rotate(30deg)',
              opacity: 0.3,
              filter: 'blur(8px)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
        {/* Hero content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover the Wonders of <span className="text-[#75E6DA]">Underwater</span> Education
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-200 mb-8 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Dive into knowledge with our immersive learning experience where education meets the magical underwater world.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button size="lg">
              <Anchor size={18} className="mr-2" />
              Explore Courses
            </Button>
            <Button variant="outline" size="lg">
              <BookOpen size={18} className="mr-2" />
              Learn More
            </Button>
          </motion.div>
        </motion.div>
        
        {/* 3D Submarine */}
        <motion.div 
          className="md:w-1/2 h-[300px] md:h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <Submarine />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={1}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};