import React from 'react';
import { Building2, Palette, Leaf, Hammer, Shield, ChevronRight } from 'lucide-react';

const servicesData = [
  {
    icon: <Building2 className="h-6 w-6 text-[#F4D67F]" />,
    title: "Commercial Premises & Residential Apartments",
    description: "We specialise in quality construction for both living and working spaces.",
    points: [
      "Construction of residential flats and apartments.",
      "Office building and commercial complexes.",
      "Renovation and remodelling of existing buildings.",
      "Structural design and planning."
    ]
  },
  {
    icon: <Shield className="h-6 w-6 text-[#F4D67F]" />,
    title: "Boundary Wall Construction",
    description: "Protect and enhance your property with our durable boundary walls.",
    points: [
      "Boundary wall construction for homes, schools and business.",
      "Demolition and reconstruction of boundary walls.",
      "Strong, secure, neat finishes with aesthetic appeal.",
      "Ideal for schools, homes and commercial properties."
    ]
  },
  {
    icon: <Hammer className="h-6 w-6 text-[#F4D67F]" />,
    title: "Fabrication & Installations",
    description: "We design, fabricate, and install structures with approved interior and exterior finishes.",
    points: [
      "Custom design, fabrication and installation services.",
      "High quality finishes tailored to your quality needs.",
      "Welding and professional installations."
    ]
  },
  {
    icon: <Leaf className="h-6 w-6 text-[#F4D67F]" />,
    title: "Schools & Institutions",
    description: "Building secure and durable spaces for educational facilities.",
    points: [
      "Junior Secondary and Primary School classrooms construction.",
      "Renovation and expansions.",
      "Boundary wall construction for schools and public institutions.",
      "We ensure security, durability, and compliance with all safety standards."
    ]
  },
  {
    icon: <Palette className="h-6 w-6 text-[#F4D67F]" />,
    title: "Glazing & Aluminium Works",
    description: "Advanced aluminium and glazing solutions ideal for offices, malls, and homes.",
    points: [
      "Sliding windows and doors.",
      "Curtain walls and glass partitioning.",
      "Weatherproof, energy-efficient designs.",
      "Skylights and shower enclosures."
    ]
  },
  {
    icon: <Building2 className="h-6 w-6 text-[#F4D67F]" />,
    title: "Civil Engineering & Road Construction",
    description: "Reliable and expert in road work services in Kenya, for both private and public projects.",
    points: [
      "Road grading, paving and surfacing.",
      "Drainage system design and installation.",
      "Sidewalks, parking lots and access roads.",
      "Construction of culverts and bridges."
    ]
  }
];

const Services = () => (
  <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-[#F4D67F] mb-4 transition-colors duration-300 mb-4">Our Building Construction Services</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We deliver top-notch construction solutions for residential, commercial, and institutional projects in Kenya.</p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6  dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:bg-gray-700 transition-shadow duration-300 border-t-4 border-[#F4D67F] group"
          >
            <div className="flex items-center mb-4 space-x-3">
              {service.icon}
              <h3 className="text-xl font-semibold dark:text-gray-300">{service.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start group-hover:text-[#F4D67F] transition-colors duration-300">
                  <ChevronRight className="h-4 w-4 mt-1 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
