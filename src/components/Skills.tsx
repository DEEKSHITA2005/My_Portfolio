import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Terminal, Cloud, PenTool } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 90 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 75 },
        { name: "Node.js", level: 85 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "REST APIs", level: 75 },
        { name: "MongoDB", level: 65 },
        { name: "UX/UI", level: 70 },
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  const skillAreas: Skill[] = [
    {
      name: "Web Development",
      icon: <Globe className="text-primary" size={28} />,
      description: "Building responsive and interactive websites using modern frameworks and technologies."
    },
    {
      name: "Backend Development",
      icon: <Database className="text-primary" size={28} />,
      description: "Creating robust server-side applications and API integrations."
    },
    {
      name: "Programming",
      icon: <Terminal className="text-primary" size={28} />,
      description: "Proficient in C, Java, Python, JavaScript, and other programming languages."
    },
    {
      name: "Serverless Computing",
      icon: <Cloud className="text-primary" size={28} />,
      description: "Developing serverless architectures in AWS cloud."
    },    
    {
      name: "Database Management",
      icon: <Database className="text-primary" size={28} />,
      description: "Designing and managing database systems with SQL and NoSQL technologies."
    },
    {
      name: "UI/UX Design",
      icon: <PenTool className="text-primary" size={28} />,
      description: "Creating user-friendly interfaces with a focus on user experience."
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-border inline-block pb-2">My Skills</h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Here are my technical skills and areas of expertise that I've developed through education and projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillAreas.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="skill-icon mx-auto">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{skill.name}</h3>
              <p className="text-text-light text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-light">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (0.1 * skillIndex) }}
                        viewport={{ once: true }}
                        className="h-2.5 rounded-full bg-primary"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;