import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkUrl: string;
  iconBgColor: string;
}

function FeatureCard({
  title,
  description,
  icon,
  linkText,
  linkUrl,
  iconBgColor,
}: FeatureCardProps) {
  return (
    <div className="rounded-lg bg-gray-50 p-6 shadow-md transition duration-300 hover:shadow-lg">
      <div className="mb-4 flex items-center">
        <div className={`${iconBgColor} mr-4 rounded-full p-3 text-white`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
      <a
        href={linkUrl}
        className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
      >
        {linkText}
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
  );
}

export default FeatureCard;
