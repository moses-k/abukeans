import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Feasibility Analysis",
      category: "Residential",
      location: "Westside Plaza",
      date: "2022",
      image: "/images/feasibility-analysis.jpg",
      description: "Our feasibility studies determine the optimal mix of units, pricing strategies,market demand,competition analysis, and financial solutionions to maximize your returns on investment"
    },
    {
      title: "Design & Build",
      category: "Commercial",
      location: "Westside Plaza",
      date: "2022",
      image: "/images/design-build.jpg",
      description: "Our Design and-Build construction services provide you with a single entity to manage both the design and construction phases of a solution. This dual role streamlines your solution delivery process."
    },
    {
      title: "General Contracting",
      category: "Renovation",
      location: "Westside Plaza",
      date: "2022",
      image: "/images/general-contractors.png",
      description: "If you already have a well-defined design for your solution, you can engage our building construction contractors in Kenya to implement and manage the day-to-day operations of your construction solution."
    },
    {
      title: "Construction Consultancy",
      category: "Residential",
      location: "Westside Plaza",
      date: "2022",
      image: "/images/construction-consultants.jpg",
      description: "We offer professional guidance from solution planning and budgeting to procuring materials, obtaining construction permits, setting up building contract agreements, and overseeing all the solution operations."
    },
    {
      title: "Construction Management",
      category: "Commercial",
      location: "Westside Plaza",
      date: "2022",
      image: "/images/construction-management.jpg",
      description: "Abukeens is the only building construction company in Kenya that manages the entire lifecycle of your solution. Our solution managers specialize in feasibility analysis, cost planning, value engineering, contract management, & construction supervision"
    },
    {
      title: "Management contracting",
      category: "Addition",
      location: "Nairobi",
      date: "2024",
      image: "/images/management-contractors.jpg",
      description: "If you’ve won a tender, our management contracting team saves you the complexities of solution delivery. We plan & execute the solution while managing risks, minimizing overhead, and maximizing your profits."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our recent construction solution that showcase 
            our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {solution.category}
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
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{solution.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{solution.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All solution
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Solutions;