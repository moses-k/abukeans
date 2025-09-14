import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      location: "Suburbia Heights",
      date: "2024",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete custom home construction featuring modern design elements and sustainable materials."
    },
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      location: "City Center",
      date: "2023",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "5-story office building with modern amenities and LEED certification requirements."
    },
    {
      title: "Historic Renovation",
      category: "Renovation",
      location: "Old Town District",
      date: "2023",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Careful restoration of a 1920s historic building while maintaining original character."
    },
    {
      title: "Luxury Kitchen Remodel",
      category: "Residential",
      location: "Riverside Estates",
      date: "2024",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-end kitchen renovation with custom cabinetry and premium appliances."
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Westside Plaza",
      date: "2022",
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-tenant retail space with modern storefronts and ample parking facilities."
    },
    {
      title: "Master Suite Addition",
      category: "Addition",
      location: "Maple Grove",
      date: "2024",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Spacious master bedroom and bathroom addition with walk-in closet and private balcony."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent construction projects that showcase 
            our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-amber-800 px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span>View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;