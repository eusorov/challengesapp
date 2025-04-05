import React from "react";
import ChallengeCard from "./UI/ChallengeCard";

function CurrentChallengesSection() {
  const challenges = [
    {
      title: "5K Fun Run",
      description: "Join us for a 5K Fun Run at the local park.",
      image: "/fun-run.jpg",
      date: { day: "09", month: "JUL 2025" },
      link: "#",
    },
    {
      title: "Healthy Eating Workshop",
      description: "Learn how to eat healthily with an expert nutritionist.",
      image: "/healthyeating.jpeg",
      date: { day: "10", month: "JUL 2025" },
      link: "#",
    },
    {
      title: "Yoga Retreat",
      description: "Find your balance in our weekend yoga retreat by the lake.",
      image: "/yogaretreat.jpg",
      date: { day: "11", month: "JUL 2025" },
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Current challenges</h2>
          <a
            href="#"
            className="rounded-lg border border-blue-500 px-4 py-2 text-blue-500 transition duration-300 hover:bg-blue-500 hover:text-white"
          >
            View all
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentChallengesSection;
