import Image from "next/image";
import Link from "next/link";

export const ListChallenges = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-gray-500">Tagline</p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Current challenges
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Join our exciting upcoming challenges and events!
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="relative">
            <div className="flex h-48 items-center justify-center bg-gray-200">
              <svg
                className="h-12 w-12 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                />
              </svg>
            </div>
            <div className="absolute top-4 right-4 rounded-lg bg-white px-2 py-1 text-center shadow">
              <p className="text-sm font-medium text-gray-900">Fri</p>
              <p className="text-xs text-gray-500">09 Feb 2024</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-gray-500">Fitness</p>
            <h3 className="text-lg font-semibold text-gray-900">5K Fun Run</h3>
            <p className="text-sm text-gray-500">Park</p>
            <p className="mt-2 text-sm text-gray-600">
              Join us for a fun-filled 5K run in the park!
            </p>
            <a
              href="#"
              className="text-primary-600 mt-4 inline-flex items-center text-sm font-medium hover:underline"
            >
              View event
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
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

        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="relative">
            <div className="flex h-48 items-center justify-center bg-gray-200">
              <svg
                className="h-12 w-12 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                />
              </svg>
            </div>
            <div className="absolute top-4 right-4 rounded-lg bg-white px-2 py-1 text-center shadow">
              <p className="text-sm font-medium text-gray-900">Sat</p>
              <p className="text-xs text-gray-500">10 Feb 2024</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-gray-500">Nutrition</p>
            <h3 className="text-lg font-semibold text-gray-900">
              Healthy Eating Workshop
            </h3>
            <p className="text-sm text-gray-500">Community Center</p>
            <p className="mt-2 text-sm text-gray-600">
              Learn how to eat healthy with our expert nutritionists!
            </p>
            <a
              href="#"
              className="text-primary-600 mt-4 inline-flex items-center text-sm font-medium hover:underline"
            >
              View event
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
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

        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="relative">
            <div className="flex h-48 items-center justify-center bg-gray-200">
              <svg
                className="h-12 w-12 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                />
              </svg>
            </div>
            <div className="absolute top-4 right-4 rounded-lg bg-white px-2 py-1 text-center shadow">
              <p className="text-sm font-medium text-gray-900">Sun</p>
              <p className="text-xs text-gray-500">11 Feb 2024</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-gray-500">Wellness</p>
            <h3 className="text-lg font-semibold text-gray-900">
              Yoga Retreat
            </h3>
            <p className="text-sm text-gray-500">Beach</p>
            <p className="mt-2 text-sm text-gray-600">
              Relax and rejuvenate at our serene yoga retreat by the beach.
            </p>
            <a
              href="#"
              className="text-primary-600 mt-4 inline-flex items-center text-sm font-medium hover:underline"
            >
              View event
              <svg
                className="ml-1 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
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
      </div>

      <div className="mt-8 text-right">
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        >
          View all
        </a>
      </div>
    </section>
  );
};
