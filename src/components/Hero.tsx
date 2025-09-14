import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-amber-900 to-amber-950 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building Your <span className="text-orange-400">Dreams</span> Into Reality
            </h1>

            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              Professional construction services with over 25 years of experience. From
              residential remodeling to commercial construction, we deliver quality
              craftsmanship on time and within budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                View Our Work
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-amber-400" />
                <div>
                  <div className="font-semibold">Licensed</div>
                  <div className="text-sm text-amber-200">& Insured</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-amber-400" />
                <div>
                  <div className="font-semibold">Award</div>
                  <div className="text-sm text-amber-200">Winning</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-8 w-8 text-amber-400" />
                <div>
                  <div className="font-semibold">24/7</div>
                  <div className="text-sm text-amber-200">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction work"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-amber-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
