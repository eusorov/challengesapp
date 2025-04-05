"use client";
import { useState } from "react";

interface EventCardProps {
  day: string;
  date: string;
  month: string;
  year: string;
  category: string;
  categoryColor: "blue" | "green" | "purple" | "red" | "yellow";
  title: string;
  location: string;
  description: string;
}

const EventCard = ({
  day,
  date,
  month,
  year,
  category,
  categoryColor,
  title,
  location,
  description,
}: EventCardProps) => {
  // Map category to color classes
  const categoryColors = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
  };

  const colorClass = categoryColors[categoryColor] || categoryColors.blue;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative">
        <div className="flex h-48 items-center justify-center bg-gray-200">
          <svg
            className="h-16 w-16 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="absolute top-4 right-4 rounded-lg bg-white p-3 shadow-md">
          <span className="block text-center text-sm text-gray-600">{day}</span>
          <span className="block text-center text-2xl font-bold">{date}</span>
          <span className="block text-center text-xs text-gray-600">
            {month} {year}
          </span>
        </div>
      </div>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 ${colorClass} mb-3 rounded-full text-xs font-medium`}
        >
          {category}
        </span>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-2 text-gray-700">{location}</p>
        <p className="mb-4 text-gray-600">{description}</p>
        <button className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
          View event
          <svg
            className="ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

interface SectionHeaderProps {
  tagline: string;
  title: string;
  description?: string;
  onViewAll: () => void;
}
const SectionHeader = ({
  tagline,
  title,
  description,
  onViewAll,
}: SectionHeaderProps) => {
  return (
    <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{tagline}</p>
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        {description && <p className="mt-2 text-gray-700">{description}</p>}
      </div>
      <button
        onClick={onViewAll}
        className="mt-4 inline-block border border-gray-900 px-6 py-2 text-gray-900 transition duration-300 hover:bg-gray-900 hover:text-white md:mt-0"
      >
        View all
      </button>
    </div>
  );
};

const eventsData: Array<EventCardProps> = [
  {
    day: "Tues",
    date: "15",
    month: "Apr",
    year: "2025",
    category: "Workshop",
    categoryColor: "blue",
    title: "Coding Bootcamp",
    location: "Tech Center",
    description: "Learn programming basics with our expert developers!",
  },
  {
    day: "Wed",
    date: "16",
    month: "Apr",
    year: "2025",
    category: "Networking",
    categoryColor: "green",
    title: "Business Mixer",
    location: "Downtown Conference Hall",
    description: "Connect with local entrepreneurs and professionals!",
  },
  {
    day: "Fri",
    date: "18",
    month: "Apr",
    year: "2025",
    category: "Wellness",
    categoryColor: "purple",
    title: "Mindfulness Retreat",
    location: "Community Garden",
    description: "Relax and rejuvenate with guided meditation sessions!",
  },
];

const ListChallengesClaudeImproved = () => {
  const [filter, setFilter] = useState("all");

  const handleViewAll = () => {
    setFilter("all");
  };

  const filteredEvents =
    filter === "all"
      ? eventsData
      : eventsData.filter(
          (event) => event.category.toLowerCase() === filter.toLowerCase(),
        );

  const categories = [
    "all",
    ...new Set(eventsData.map((event) => event.category)),
  ];

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          tagline="Events & Activities"
          title="Claude2: Upcoming Events"
          description="Join our exciting community events and activities!"
          onViewAll={handleViewAll}
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                filter === category
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListChallengesClaudeImproved;
