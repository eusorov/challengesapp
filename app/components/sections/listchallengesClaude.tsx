import Image from "next/image";
import Link from "next/link";

export const ListChallengesClaude = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600">Tagline</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Claude1: Upcoming Events
            </h2>
            <p className="mt-2 text-gray-700">
              Join our exciting community events and activities!
            </p>
          </div>
          <a
            href="#"
            className="inline-block border border-gray-900 px-6 py-2 text-gray-900 transition duration-300 hover:bg-gray-900 hover:text-white"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <span className="block text-center text-sm text-gray-600">
                  Tues
                </span>
                <span className="block text-center text-2xl font-bold">15</span>
                <span className="block text-center text-xs text-gray-600">
                  Apr 2025
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                Workshop
              </span>
              <h3 className="mb-2 text-xl font-bold">Coding Bootcamp</h3>
              <p className="mb-2 text-gray-700">Tech Center</p>
              <p className="mb-4 text-gray-600">
                Learn programming basics with our expert developers!
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
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
              </a>
            </div>
          </div>

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
                <span className="block text-center text-sm text-gray-600">
                  Wed
                </span>
                <span className="block text-center text-2xl font-bold">16</span>
                <span className="block text-center text-xs text-gray-600">
                  Apr 2025
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                Networking
              </span>
              <h3 className="mb-2 text-xl font-bold">Business Mixer</h3>
              <p className="mb-2 text-gray-700">Downtown Conference Hall</p>
              <p className="mb-4 text-gray-600">
                Connect with local entrepreneurs and professionals!
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
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
              </a>
            </div>
          </div>

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
                <span className="block text-center text-sm text-gray-600">
                  Fri
                </span>
                <span className="block text-center text-2xl font-bold">18</span>
                <span className="block text-center text-xs text-gray-600">
                  Apr 2025
                </span>
              </div>
            </div>
            <div className="p-6">
              <span className="mb-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                Wellness
              </span>
              <h3 className="mb-2 text-xl font-bold">Mindfulness Retreat</h3>
              <p className="mb-2 text-gray-700">Community Garden</p>
              <p className="mb-4 text-gray-600">
                Relax and rejuvenate with guided meditation sessions!
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800"
              >
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
