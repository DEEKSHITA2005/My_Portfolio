import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      content: "2200031012cseh@gmail.com",
      link: "mailto:2200031012cseh@gmail.com"
    },
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      content: "+91 6269558888",
      link: "tel:+916269558888"
    },
    {
      icon: <MapPin className="text-primary" />,
      title: "Location",
      content: "Vaddeswaram, Andhra Pradesh, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-border inline-block pb-2">Get In Touch</h2>
          <p className="text-text-light max-w-3xl mx-auto">
            Feel free to reach out if you have any questions, project ideas, or just want to connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-primary-light bg-opacity-20 p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-text-light hover:text-primary transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-text-light">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
