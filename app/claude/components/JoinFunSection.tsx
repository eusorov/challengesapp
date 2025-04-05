import React from "react";
import FeatureCard from "./UI/FeatureCard";

function JoinFunSection() {
  const features = [
    {
      title: "Create Challenges",
      description:
        "Create and participate in public or private challenges. Track your progress and stay motivated.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      linkText: "Join",
      linkUrl: "#",
      iconBgColor: "bg-blue-500",
    },
    {
      title: "Track Progress",
      description:
        "Monitor your achievements and stay connected with other challenge participants who have joined.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      linkText: "Learn More",
      linkUrl: "#",
      iconBgColor: "bg-green-500",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Join the Fun of Creating Challenges
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JoinFunSection;
