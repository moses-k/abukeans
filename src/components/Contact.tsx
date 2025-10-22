import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { COLORS } from '../constants/colors';
import emailjs from 'emailjs-com';


//service_0xbbufr
//template_4fkl41k
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    // send email via EmailJS
    emailjs.send(
      'service_0xbbufr', // replace with your EmailJS service ID
      'template_4fkl41k', // replace with your EmailJS template ID
      formData,
      'M1fZfh1JxpZ0oU5eN' // replace with your EmailJS public key
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    })
    
    .catch((error) => {
      console.error('Error sending email:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Try again later.' });
    });
  };
 // Auto-hide message after 4 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <section
  id="contact"
  className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
     <h2 className="text-4xl font-bold mb-4 tracking-tight text-yellow-500 dark:text-[#F4D67F]">
            Get In Touch
          </h2>
      
         <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300 opacity-90">
            Ready to start your project? Let’s talk about your vision, goals, and
            how Abukeans Investment Ltd can bring them to life.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10">
            <h3
              className="text-2xl font-bold mb-6 dark:text-[#F4D67F]"
              
            >
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                {
                icon: <Phone className="h-6 w-6 text-amber-700 dark:text-[#F4D67F]" />,
                  title: 'Mobile',
                  lines: ['+254 108 300 000', '+254 727 933 383', '+254 789 812 608']
                },
                {
                  icon: <Mail className="h-6 w-6 text-amber-700 dark:text-[#F4D67F]" />,
                  title: 'Email',
                  lines: [
                    'info@abukeansinvestment.co.ke',
                    'mogirelam@gmail.com',
                    'kellyondara@gmail.com'
                  ]
                },
                {
                  icon: <MapPin className="h-6 w-6 text-amber-700 dark:text-[#F4D67F]" />,
                  title: 'Location',
                  lines: ['Nairobi, Kenya']
                },
                {
                  icon: <Clock className="h-6 w-6 text-amber-700 dark:text-[#F4D67F]" />,
                  title: 'Hours',
                  lines: [
                    'Mon - Fri: 7:00 AM - 6:00 PM',
                    'Saturday: 8:00 AM - 4:00 PM',
                    'Sunday: Emergency Only'
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                     <p className="font-semibold text-gray-900 dark:text-[#F4D67F]">
                      {item.title}
                    </p>
                    {item.lines.map((line, j) => (
                    <p key={j} className="text-gray-700 dark:text-gray-300 opacity-90">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div
              className="mt-10 p-6 rounded-xl shadow-md"
              style={{
                backgroundColor: COLORS.secondary,
                color: COLORS.onSecondary
              }}
            >
              <h4 className="font-semibold text-lg mb-2">24/7 Emergency Services</h4>
              <p className="opacity-90">
                We provide emergency construction services for storm damage,
                structural issues, and other urgent needs. Call our emergency line
                anytime.
              </p>
            </div>
          </div>

          {/* Contact Form */}
         <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3
              className="text-2xl font-bold mb-6 dark:text-[#F4D67F]"
            
            >
              Request a Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#F5CF5F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#F5CF5F] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone & Service */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#F5CF5F] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#F5CF5F] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Commercial Premises & Residential Apartments</option>
                    <option value="commercial">Boundary Wall Construction</option>
                    <option value="remodeling">Fabrication & Installations</option>
                    <option value="repairs">Schools & Institutions</option>
                    <option value="emergency">Glazing & Aluminium Works</option>
                    <option value="construction">Civil Engineering & Road Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project, timeline, and key requirements..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-[#F5CF5F] focus:border-transparent"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: COLORS.secondary,
                  color: COLORS.onSecondary
                }}
              >
                Send Message
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              {/* Status Message */}
            {status.message && (
             <p
            className={`text-sm mt-4 text-center ${
            status.type === 'success'
            ? 'text-green-600 dark:text-green-400'
             : status.type === 'error'
           ? 'text-red-600 dark:text-red-400'
           : 'text-gray-700 dark:text-gray-300'
    }`}
  >
    {status.message}
  </p>
)}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
