import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Anchor } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 bg-gradient-to-b from-[#05445E] to-[#032636] overflow-hidden">
      {/* Wavy Divider */}
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#75E6DA"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#75E6DA"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#75E6DA"></path>
        </svg>
      </div>

      {/* Animated Fish */}
      <div className="absolute left-[10%] top-[30%] opacity-30 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🐠
        </motion.div>
      </div>
      <div className="absolute right-[20%] top-[40%] opacity-30 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🐡
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-[#75E6DA] mb-4 flex items-center">
              <Anchor className="mr-2" />
              Ocean Academy
            </h3>
            <p className="text-gray-300 mb-4">
              Dive into knowledge with our underwater learning experience, where education meets the wonders of the ocean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#75E6DA] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#75E6DA] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#75E6DA] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#75E6DA] hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#75E6DA] transition-colors">About Us</a></li>
              <li><a href="#marine-studies" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Marine Studies</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Marine Biology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Ocean Conservation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Underwater Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Diving Certification</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#75E6DA] transition-colors">Coral Reef Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">123 Ocean Drive, Atlantis</p>
            <p className="text-gray-300 mb-2">info@oceanacademy.edu</p>
            <p className="text-gray-300 mb-4">+1 (555) 123-4567</p>
            <a href="#contact" className="inline-block px-4 py-2 rounded-full bg-[#189AB4] text-white hover:bg-[#75E6DA] transition-colors">
              <Mail className="inline mr-2" size={16} />
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#189AB4]/30">
          <p className="text-center text-gray-400">
            © {currentYear} Ocean Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};