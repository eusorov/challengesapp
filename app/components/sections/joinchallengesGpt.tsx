import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const JoinChallengesGpt = () => {
  return (
    <section className="my-16 w-full bg-gray-50">
      <div className="mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-16 md:grid-cols-12 lg:gap-16 lg:px-6">
        <div className="md:col-span-7">
          <p className="text-sm font-medium text-gray-500">Challenge</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Join the Fun of Creating Challenges
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Unleash your competitive spirit by creating or joining challenges.
            Track your progress and inspire others along the way!
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 text-primary-600 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Create Challenges
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Easily set up public or private challenges with friends and
                  family.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 text-primary-600 flex h-12 w-12 items-center justify-center rounded-lg">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Track Progress
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Monitor your achievements and stay motivated with real-time
                  updates.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Join
            </a>
            <a
              href="#"
              className="text-primary-600 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium hover:underline"
            >
              Learn More
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden md:col-span-5 md:flex md:justify-center">
          <div className="relative h-64 w-full max-w-md">
            <div className="absolute inset-0 bg-gray-200">
              <svg
                className="h-full w-full text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
