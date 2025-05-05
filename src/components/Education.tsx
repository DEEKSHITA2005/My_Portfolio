import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "KL University",
      location: "Vaddeswaram, Andhra Pradesh",
      period: "2022 - 2026",
      description: "Currently pursuing a B.Tech in Computer Science and Engineering with a specialization in Cloud and Edge Computing, focusing on software development and core engineering principles. Consistently maintaining strong academic performance throughout the program."
    },
    {
      degree: "Intermediate Education ",
      institution: "Sri Chaitanya Junior College",
      location: "Vijayawada, Andhra Pradesh",
      period: "2020 - 2022",
      description: "Completed intermediate education with a focus on Biology, Physics, and Chemistry. Achieved academic excellence and developed a strong foundation in scientific principles."
    },
    {
      degree: "Secondary Education (SSC)",
      institution: "N.St.Mathew's Public School",
      location: "Vijayawada, Andhra Pradesh",
      period: "2019 - 2020",
      description: "Completed 10th grade by demonstrating strong academic capabilities across various subjects."
    }
  ];

  const certifications: CertificationItem[] = [
    {
      name: "RedHat Certified Enterprise Application Developer ",
      issuer: "Red Hat",
      date: "2024",
      description: "Earned certification as a Red Hat Certified Enterprise Application Developer (RHCED), demonstrating expertise in building secure, scalable, and enterprise-grade Java applications using Red Hat technologies like JBoss EAP and Hibernate."
    },
    {
      name: "Salesforce certified Ai Associate ",
      issuer: "Salesforce",
      date: "2024",
      description: "Achieved the Salesforce Certified AI Associate certification, demonstrating expertise in implementing AI and machine learning solutions within the Salesforce ecosystem. "

    }
  ];

  return (
    <section id="education" className="section-padding bg-background-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-border inline-block pb-2">Education & Certifications</h2>
          <p className="text-text-light max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Educational Background
            </h3>
            
            <div className="timeline">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="timeline-item"
                >
                  <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                  <div className="flex flex-wrap items-center text-text-light mb-2">
                    <span className="flex items-center mr-4 mb-2">
                      <MapPin size={16} className="mr-1 text-primary" />
                      {item.institution}, {item.location}
                    </span>
                    <span className="flex items-center mb-2">
                      <Calendar size={16} className="mr-1 text-primary" />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-text-light">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white p-5 rounded-lg shadow-md"
                >
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <div className="flex items-center text-text-light mb-3">
                    <span className="mr-3">{cert.issuer}</span>
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-text-light text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 bg-primary bg-opacity-10 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Skills Gained</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <span>Problem Solving & Algorithm Design</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <span>Object-Oriented Programming</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <span>Database Management</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                    <div className="bg-white rounded-full w-2 h-2"></div>
                  </div>
                  <span>Software Engineering Principles</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;