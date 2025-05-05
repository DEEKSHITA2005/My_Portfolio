import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-background-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-border inline-block pb-2">About Me</h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives my passion for technology and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-full bg-primary rounded-lg absolute -top-5 -left-5 opacity-10"></div>
              <img 
                src="./public/Deekshita.jpg" 
                alt="Deekshita working" 
                className="rounded-lg w-full h-auto relative z-10 shadow-xl"
              />
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">I'm Deekshita, a CS Engineer & Web Developer</h3>
            <p className="text-text-light mb-6">
  I am currently pursuing my B.Tech in Computer Science and Engineering at KL University, specializing in Cloud and Edge Computing. I'm passionate about creating elegant solutions through code and developing applications that make a positive impact.
</p>
<p className="text-text-light mb-6">
  My specialization has deepened my understanding of scalable computing, real-time data processing, and deploying intelligent systems at the network edge. This focus allows me to work on solutions that reduce latency, improve responsiveness, and bring computational power closer to the source of data.
</p>
<p className="text-text-light mb-6">
  With experience in both frontend and backend technologies, I enjoy the process of turning ideas into fully functional applications. My journey in technology is driven by curiosity and a continuous desire to learn and improve.
</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-primary-light bg-opacity-20 p-3 rounded-full">
                  <BookOpen className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <p className="text-text-light text-sm">B.Tech in CSE from KL University</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-primary-light bg-opacity-20 p-3 rounded-full">
                  <Award className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <p className="text-text-light text-sm">Full Stack Development & Cloud Computing Engineer</p>
                </div>
              </div>
            </div>

            <Link to="contact" smooth={true} duration={800} offset={-50}>
              <button className="btn btn-primary">Contact Me</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Link } from 'react-scroll';

export default About;