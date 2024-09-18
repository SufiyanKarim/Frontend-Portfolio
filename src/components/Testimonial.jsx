import React, { useState } from 'react';

const TestimonialCard = ({ image, quote, name, position }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl">
    <div className="flex flex-col items-center sm:flex-row mb-4">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4" />
      <div className="text-center sm:text-left">
        <p className="text-gray-800 italic mb-2">"{quote}"</p>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
      name: "John Doe",
      position: "CEO, Company"
    },
    {
      image: "https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg",
      quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      name: "Jane Smith",
      position: "CTO, Startup"
    },
    {
      image: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg",
      quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
      name: "Alice Brown",
      position: "Marketing Director, Agency"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonial" className="py-16">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center text-sm sm:text-base lg:text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
          Aliquet donec morbi convallis pretium.
        </p>

        {/* Testimonial Card */}
        <TestimonialCard {...testimonials[currentTestimonial]} />

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Previous/Next Buttons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={prevTestimonial}
            className="bg-orange-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-orange-600"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-orange-500 text-white px-4 py-2 rounded-full ml-2 hover:bg-orange-600"
          >
            Next
          </button>
        </div>
      </div>
      {/* <hr className="mt-8"/> */}
    </section>
  );
};

export default Testimonial;
