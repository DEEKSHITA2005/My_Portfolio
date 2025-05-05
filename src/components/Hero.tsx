import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background-alt to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-lg md:text-xl text-primary font-medium mb-3">Hi there! I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Deekshita <br />
              <span className="text-gradient">Chennupati</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mb-8 max-w-xl">
              A passionate Computer Science Engineer with experience in Full Stack Development, dedicated to creating impactful solutions through code.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="contact" smooth={true} duration={800} offset={-50}>
                <button className="btn btn-primary">
                  Get In Touch
                </button>
              </Link>
              <a href="https://github.com/DEEKSHITA2005" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-5">
              <a href="http://www.linkedin.com/in/chennupati-deekshita-957b63288" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/DEEKSHITA2005" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:2200031012cseh@gmail.com" className="text-text-light hover:text-primary transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary opacity-10"></div>
              <img
                  src="/Deekshita.jpg"
                  alt="Deekshita Chennupati"
                  className="avatar-img w-full h-full object-cover"
              />

              
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <Link to="about" smooth={true} duration={800} className="flex flex-col items-center cursor-pointer">
            <span className="text-text-light mb-2">Scroll Down</span>
            <ArrowDown className="text-primary animate-bounce" size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;