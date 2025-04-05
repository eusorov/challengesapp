import React from "react";

// Define the type for the props
interface SocialIconProps {
  name: string;
  path: string;
  link: string;
}

function SocialIcon({ name, path, link }: SocialIconProps) {
  return (
    <a
      href={link}
      className="text-gray-400 transition duration-300 hover:text-white"
      aria-label={name}
    >
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

export default SocialIcon;
