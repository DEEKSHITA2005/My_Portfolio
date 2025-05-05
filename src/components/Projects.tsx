import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Bus Ticket Booking Application",
      description: "A comprehensive bus ticket booking system that allows users to book tickets, view their booking history, and manage their profiles.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/DEEKSHITA2005/Bus-Ticket-Booking-Application.git",
      image: "/Bus.webp"  // Referencing the image from the public folder
    },      
    {
      title: "Online Art Gallery",
      description: "An online platform for artists to showcase and sell their artwork, and for art enthusiasts to browse and purchase art pieces.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/DEEKSHITA2005/onlineartgallery.git",
      image: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "File Transfer Application",
      description: "A web-based file transfer application that allows users to upload and share files securely with others. The app integrates real-time functionality with Firebase and uses React and Redux for seamless state management.",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/DEEKSHITA2005/file-share-app.git",
      image: "/File.webp"  // Updated image
    }
    
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-border inline-block pb-2">My Projects</h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="project-card bg-white overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-light mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-primary-light bg-opacity-20 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-text-light mb-6">
            Interested in more of my work? Check out my GitHub profile for additional projects.
          </p>
          <a 
            href="https://github.com/DEEKSHITA2005?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <Github size={18} className="mr-2" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;