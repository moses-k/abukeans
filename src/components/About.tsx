import React from 'react';
import { Users, Trophy, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Craftsmanship",
      description: "We never compromise on quality. Every project receives our full attention to detail."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring decades of combined experience to every project."
    },
    {
      icon: Trophy,
      title: "Award-Winning Service",
      description: "Recognized for excellence in construction and customer service year after year."
    },
    {
      icon: Star,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with you from start to finish."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Building Excellence Since 1998
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Abukeans Investment Ltd has been serving the community for over 25 years, 
              building a reputation for quality, reliability, and exceptional customer service. 
              What started as a small family business has grown into one of the region's 
              most trusted construction companies.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We pride ourselves on delivering projects on time and within budget while 
              maintaining the highest standards of craftsmanship. Our experienced team 
              handles everything from small residential repairs to large commercial developments.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3862626/pexels-photo-3862626.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction team"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -top-8 -left-8 bg-amber-700 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">Licensed</div>
              <div className="text-amber-100">& Bonded</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Abukeans Investment Ltd?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and customer satisfaction sets us apart 
            from other construction companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <Icon className="h-8 w-8 text-amber-800 group-hover:text-amber-900 transition-colors" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;