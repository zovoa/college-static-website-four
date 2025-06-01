import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import { Send, Mail, Phone, MapPin, MessageSquare, User, Anchor } from 'lucide-react';
import { useBubbles } from '../effects/BubbleContext';

export const Contact: React.FC = () => {
  const { addBubble } = useBubbles();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus('submitting');
    
    // Create bubbles on submit
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight - 100;
        addBubble({ x, y, size: Math.random() * 20 + 15 });
      }, i * 200);
    }
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Decorative elements with parallax */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#75E6DA]/10 blur-2xl"
        style={{ y: parallaxY1 }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-[#189AB4]/20 blur-3xl"
        style={{ y: parallaxY2 }}
      />
      
      {/* Animated fish */}
      <div className="absolute top-1/3 left-1/4 text-4xl floating">
        🐠
      </div>
      <div className="absolute bottom-1/4 right-1/3 text-5xl floating-slow">
        🐙
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Contact Ocean Academy" 
          subtitle="Have questions about our programs or want to schedule a visit? Dive into a conversation with us!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#75E6DA] mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="p-3 bg-[#05445E]/50 rounded-full mr-4 sway">
                  <Mail className="w-6 h-6 text-[#75E6DA]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-gray-300">info@oceanacademy.edu</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="p-3 bg-[#05445E]/50 rounded-full mr-4 sway">
                  <Phone className="w-6 h-6 text-[#75E6DA]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="p-3 bg-[#05445E]/50 rounded-full mr-4 sway">
                  <MapPin className="w-6 h-6 text-[#75E6DA]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Visit Us</h4>
                  <p className="text-gray-300">123 Ocean Drive, Atlantis</p>
                  <p className="text-gray-300">Open Mon-Fri: 9am - 5pm</p>
                </div>
              </motion.div>
            </div>
            
            {/* Map */}
            <motion.div 
              className="mt-8 rounded-2xl overflow-hidden glass p-2 h-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="w-full h-full rounded-xl bg-[#05445E]/50 relative overflow-hidden">
                {/* This would be a real map in production */}
                <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/697313/pexels-photo-697313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-2 bg-[#05445E] rounded-full animate-pulse">
                    <Anchor className="w-6 h-6 text-[#75E6DA]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Mask-like glass form */}
            <div className="glass p-8 rounded-3xl border-t-8 border-[#75E6DA]/30 relative">
              {/* Form circles to mimic diving mask */}
              <div className="absolute -top-3 left-12 w-6 h-6 rounded-full border-2 border-[#75E6DA]/30"></div>
              <div className="absolute -top-3 right-12 w-6 h-6 rounded-full border-2 border-[#75E6DA]/30"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="mr-2 text-[#75E6DA]" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    label="Your Name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    icon={<User className="text-[#75E6DA]" />}
                  />
                  
                  <Input
                    label="Your Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    icon={<Mail className="text-[#75E6DA]" />}
                  />
                </div>
                
                <Input
                  label="Subject"
                  name="subject"
                  placeholder="I'm interested in Marine Biology courses"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="mb-4"
                />
                
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="mb-6"
                />
                
                <div className="flex items-center justify-between">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="relative overflow-hidden group"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                    
                    {/* Bubble effect on hover */}
                    <span className="absolute -z-10 top-0 left-0 w-full h-full">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i}
                          className="absolute bg-white/10 rounded-full opacity-0 group-hover:animate-rise"
                          style={{
                            width: `${Math.random() * 20 + 10}px`,
                            height: `${Math.random() * 20 + 10}px`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${Math.random() * 2 + 1}s`,
                          }}
                        />
                      ))}
                    </span>
                  </Button>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      className="text-green-400 ml-4 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                  
                  {formStatus === 'error' && (
                    <motion.div 
                      className="text-red-400 ml-4 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      Error sending message. Please try again.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -right-10 text-4xl floating-slow">
              🐬
            </div>
            <div className="absolute -bottom-5 -left-5 text-3xl floating">
              🦀
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};