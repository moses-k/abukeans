import React from 'react';
import { ChevronRight } from 'lucide-react';
import { COLORS } from '../constants/colors';

const About = () => (
  <section
   
  id="about"
  className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8 text-center">
          About <span className="text-[#F4D67F]">Us</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We’re more than builders — we’re creators of enduring spaces that
          reflect innovation, trust, and excellence.
        </p>
      </div>

      {/* Intro */}
      <div className="mb-20">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 border-t-4 border-[#F4D67F] transition-colors duration-300">
          <p className="text-lg text-yellow-700 dark:text-gray-300 leading-relaxed mb-6">
            <span className="font-semibold text-gray-900 dark:text-gray-300">
              Abukeans Investment Limited
            </span>{' '}
            is a dynamic design-and-build company dedicated to turning visionary
            concepts into tangible realities. With a keen focus on precision,
            innovation, and structural excellence, we meticulously translate our
            clients' aspirations into well-engineered, functional, and
            aesthetically refined spaces.
          </p>
          <p className="text-lg text-yellow-700 dark:text-gray-300 leading-relaxed">
            Our commitment to quality craftsmanship and sustainable construction
            practices ensures that every project contributes to transforming
            Kenya's built environment and redefining its architectural
            landscape.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {[
          {
            title: 'Our Vision',
            text: "To be a leading force in Kenya's construction and design industry, recognized for setting benchmarks in workmanship, innovation, and service excellence. We envision a future where every project transforms the built environment with sustainable and cutting-edge solutions."
          },
          {
            title: 'Our Mission',
            text: "To deliver superior design and build solutions with unwavering commitment to craftsmanship, structural integrity, and client satisfaction. Through innovation and precision, we create lasting spaces that enhance functionality, beauty, and sustainability."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border-t-4 border-[#F4D67F] hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-4">
              {item.title}
            </h3>
            <p className="text-yellow-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Core Values */}
      
      <div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border-t-4 border-[#F4D67F] hover:shadow-2xl transition duration-300">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-8 text-center">
          Our <span className="text-[#F4D67F]">Core Values</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Integrity — Build on trust, honesty, and transparency.',
            'Innovation — Embrace new ideas and modern technologies.',
            'Sustainability — Eco-conscious practices for long-term value.',
            'Excellence — Precision and craftsmanship in every project.',
            'Client Focus — Listen, collaborate, and deliver tailored solutions.',
            'Collaboration — Foster teamwork within our team and with clients.',
            'Social Responsibility — Contribute to Kenya’s development.',
            'Community Impact — Building for people, not just profit.'
          ].map((value, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 bg-gray-100 dark:bg-gray-800  hover:bg-[#F4D67F]/10 dark:hover:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-700  transition"
            >
              <ChevronRight className="h-5 w-5 text-[#F4D67F] mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-10 text-center">
          Our <span className="text-[#F4D67F]">Achievements</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
          {[
            {
              title: 'Successful Project Delivery',
              desc: 'Completed numerous projects including residential, commercial, and institutional buildings across Kenya.'
            },
            {
              title: 'Client Satisfaction',
              desc: 'Recognized for transparency, quality craftsmanship, and reliability.'
            },
            {
              title: 'Innovative Designs',
              desc: 'Introduced modern, sustainable, and functional design concepts tailored for Kenya’s environment.'
            },
            {
              title: 'Sustainability Impact',
              desc: 'Integrated eco-friendly solutions like energy-efficient designs and green materials.'
            },
            {
              title: 'Skilled Workforce',
              desc: 'Built a team of dedicated architects, engineers, and artisans while creating local job opportunities.'
            },
            {
              title: 'Strategic Partnerships',
              desc: 'Collaborated with top suppliers and consultants who share our vision of innovation and excellence.'
            }
          ].map((achievement, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl border-t-4 border-[#F4D67F] hover:shadow-xl dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <h4 className="font-bold text-gray-900 dark:text-gray-300 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-700 text-sm dark:text-gray-300 leading-relaxed">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
