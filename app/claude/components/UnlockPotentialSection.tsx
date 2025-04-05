import React from "react";
import Button from "./UI/Button";

function UnlockPotentialSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold">
              Unlock Your Potential: Join Challenges and Transform Your Life
              Today!
            </h2>
            <p className="mb-6">
              Challenge your expectations day by day, set personal goals and
              track your progress with friends. Whether it&apos;s cooking,
              knitting, or any challenge you can imagine, bringing together
              learning and growth through our platform is where it begins.
            </p>
            <div className="mb-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="mb-2 text-xl font-bold">Engagement</h3>
                <p>Connect with friends and stay motivated</p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold">Support</h3>
                <p>Access expert resources for personalized growth</p>
              </div>
            </div>
            <Button href="#" light>
              Start Your Challenge Today!
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg bg-white/20 p-6 backdrop-blur-sm">
              <img
                src="/happy-friends-workout-celebration.webp"
                alt="People celebrating challenge completion"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UnlockPotentialSection;
