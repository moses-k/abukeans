import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Managing Director',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Strategic leader with 20+ years in business transformation and organizational development.',
      expertise: ['Strategic Planning', 'Leadership Development', 'Change Management']
    },
    {
      name: 'Michael Chen',
      role: 'Senior Consultant',
      image: 'https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technology expert specializing in digital transformation and process optimization.',
      expertise: ['Digital Strategy', 'Process Optimization', 'Technology Integration']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Principal Analyst',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data analytics specialist with expertise in performance measurement and business intelligence.',
      expertise: ['Data Analytics', 'Performance Management', 'Business Intelligence']
    },
    {
      name: 'David Thompson',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Operations expert focused on efficiency improvement and quality management systems.',
      expertise: ['Operations Management', 'Quality Systems', 'Lean Six Sigma']
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who drive our success and deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
              
              <div className="space-y-2 mb-4">
                {member.expertise.map((skill, skillIndex) => (
                  <span key={skillIndex} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-200 group">
                  <Linkedin className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                </button>
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-200 group">
                  <Mail className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professionals</h3>
            <p className="text-gray-600">
              Our team holds industry-leading certifications and continuously updates their expertise.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
            <p className="text-gray-600">
              Decades of combined experience delivering successful outcomes across industries.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Focused Approach</h3>
            <p className="text-gray-600">
              We prioritize understanding your unique challenges and delivering tailored solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;