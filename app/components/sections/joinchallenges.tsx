import Image from "next/image";
import Link from "next/link";

export const JoinChallenges = () => {
  return (
    <section className="my-16 w-full">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 md:grid-cols-12 md:gap-8 md:py-16 xl:gap-0">
        <div className="mr-auto place-self-center md:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Join the Fun of Creating Challenges
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Unleash your competitive spirit by creating or joining challenges.
            Track your progress and inspire others along the way!
          </p>
          <Link
            href="#"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Join
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href=""
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Learn More
          </Link>
        </div>
        <div className="hidden md:col-span-5 md:mt-0 md:flex">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="people running"
            layout="relative"
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/pattern-light.svg"
          />
        </div>
      </div>
    </section>
  );
};
