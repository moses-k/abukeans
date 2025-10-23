import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Wahome",
      role: "Homeowner",
      content: "Abukeans Construction exceeded our expectations in every way. Their attention to detail and professionalism made our dream home renovation a reality. Highly recommended!",
      rating: 5
    },
    {
      name: "Mike Mogambi",
      role: "Business Owner",
      content: "We hired Abukeans for our office renovation, and they delivered exceptional results on time and within budget. Their team was professional and minimized disruption to our business.",
      rating: 5
    },
    {
      name: "Jennifer Mwangi",
      role: "Property Manager",
      content: "I've worked with many contractors over the years, but Abukeans stands out for their reliability and quality work. They're my go-to choice for all construction needs.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white text-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-black dark:text-[#F4D67F]">
                What Our Clients Say</h2>
          <p className="text-xl text-yellow-600 dark:text-gray-300 max-w-3xl mx-auto">
             Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Abukeans Construction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-gray-900 dark:text-gray-300 dark:bg-gray-800 p-8 rounded-lg shadow-xl">
              <Quote className="h-10 w-10 text-orange-600 mb-6 dark:bg-gray-800" />
              <p className="text-lg mb-6 leading-relaxed">{testimonial.content}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-300">{testimonial.role}</div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;