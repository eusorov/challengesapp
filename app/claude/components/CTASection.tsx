import React from "react";
import Button from "./UI/Button";

function CTASection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold">Start Your Challenge Today!</h2>
        <p className="mb-8 text-gray-600">
          Create, join and share to set new milestones in your life.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="#" primary>
            Get Started
          </Button>
          <Button href="#" outline>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
