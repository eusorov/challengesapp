import React from "react";

function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-blue-500">
                ★
              </span>
            ))}
          </div>
        </div>
        <blockquote className="mx-auto mb-8 max-w-3xl text-xl italic md:text-2xl">
          Participating in challenges has transformed my fitness journey.
          I&apos;ve not only achieved my goals but also built lasting
          friendships along the way!
        </blockquote>
        <div className="flex items-center justify-center">
          <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
            <img
              src="/profilePic.png"
              alt="Sarah Johnson"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-bold">Sarah Johnson</div>
            <div className="text-sm text-gray-500">Marathon Runner • NY</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
