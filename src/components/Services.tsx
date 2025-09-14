import React from 'react';
import { Home, Building2, Wrench, Paintbrush, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-orange-600" />,
      title: "Residential Construction",
      description: "Custom homes, additions, and major renovations built to your exact specifications."
    },
    {
      icon: <Building2 className="h-12 w-12 text-orange-600" />,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and industrial facilities with professional quality."
    },
    {
      icon: <Wrench className="h-12 w-12 text-orange-600" />,
      title: "Remodeling",
      description: "Kitchen, bathroom, and whole house remodeling to transform your living space."
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-orange-600" />,
      title: "Finishing Work",
      description: "Professional painting, flooring, and detailed finishing touches for perfect results."
    },
    {
      icon: <Hammer className="h-12 w-12 text-orange-600" />,
      title: "Repairs & Maintenance",
      description: "Quick repairs and ongoing maintenance to keep your property in top condition."
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-600" />,
      title: "Emergency Services",
      description: "24/7 emergency repair services for storm damage and urgent construction needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive construction services for residential and commercial projects. 
            Quality craftsmanship and attention to detail in every job.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;