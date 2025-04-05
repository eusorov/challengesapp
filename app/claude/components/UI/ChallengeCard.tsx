import React from "react";

interface ChallengeCardProps {
  title: string;
  description: string;
  image: string;
  date: {
    day: string;
    month: string;
  };
  link: string;
}

function ChallengeCard({
  title,
  description,
  image,
  date,
  link,
}: ChallengeCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
        <div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 font-bold text-blue-500 shadow">
          <div className="text-center">
            <div className="text-lg font-bold">{date.day}</div>
            <div className="text-xs">{date.month}</div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <a
          href={link}
          className="inline-flex items-center text-blue-500 hover:text-blue-700"
        >
          View event
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ChallengeCard;
