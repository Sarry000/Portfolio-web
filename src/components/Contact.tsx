import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'sarthakbukane@gmail.com',
      link: 'mailto:sarthakbukane@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7559110459',
      link: 'tel:+917559110459'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Nashik, Maharashtra',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/Sarry000/'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sarthak-bukane'
    },
    {
      icon: <Twitter size={24} />,
      name: 'Twitter',
      url: 'https://twitter.com/sarthakbukane'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">
                Let's Start a Conversation
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm eager to contribute to innovative tech solutions and grow in a collaborative 
                environment. Whether you have internship opportunities, project collaborations, 
                or just want to connect, feel free to reach out!
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 text-gray-300 hover:text-red-400 transition-colors duration-200 group"
                  >
                    <div className="text-red-600 group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.title}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/40 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-600/10 transition-all duration-200 hover:transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-black/40 p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-200"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-600 focus:outline-none transition-colors duration-200 resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;