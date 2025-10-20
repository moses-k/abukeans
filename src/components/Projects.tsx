import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "3 Bedroom Maisonette",
      category: "Residential",
      location: "Utange Mombasa Kenya",
      date: "",
      image: "/images/utange3b-0.jpeg",
      description: ""
    },
      {
      title: "3 Bedroom Maisonette",
      category: "Residential",
      location: "Utange Mombasa Kenya",
      date: "",
      image: "/images/utange3b-1.jpeg",
      description: ""
    },
      {
      title: "3 Bedroom Maisonette",
      category: "Residential",
      location: "Utange Mombasa Kenya",
      date: "",
      image: "/images/utange3b-3.jpeg",
      description: ""
    },
    //Bamburi  Mombasa
    {
      title: "3 Bedroom Appartment",
      category: "Residential",
      location: " Bamburi Mombasa Kenya Area 1000m²",
      date: "",
      image: "/images/bamburi3b-0.jpeg",
      description: ""
    },
    {
      title: "3 Bedroom Appartment",
      category: "Residential",
      location: " Bamburi Mombasa Kenya Area 1000m²",
      date: "",
      image: "/images/bamburi3b-1.jpeg",
      description: ""
    },
    {
      title: "3 Bedroom Appartment",
      category: "Residential",
      location: " Bamburi Mombasa Kenya Area 1000m²",
      date: "",
      image: "/images/bamburi3b-2.jpeg",
      description: ""
    },
//4BedRoom 
    {
      title: "4 Bedroom Maisonette",
      category: "Residential",
      date: "",
      image: "/images/4bm-0.jpg",
      description: ""
    },
    {
      title: "4 Bedroom Maisonette",
      category: "Residential",
      date: "",
      image: "/images/4bm-3.jpeg",
      description: ""
    },
    {
      title: "4 Bedroom Maisonette",
      category: "Residential",
      date: "",
      image: "/images/4bm-6.jpeg",
      description: ""
    }
 
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
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

        {/* <div className="text-center mt-12">
          <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;