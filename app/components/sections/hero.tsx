import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl">
        <div className="mx-auto place-self-center px-4 py-16 text-center">
          <h1 className="mx-auto mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Take on a challenge, inspire your journey!
          </h1>
          <p className="mx-auto mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            Join a community of challengers and track your progress together.
            Whether it's running, dieting, or a fun activity, create or join
            challenges that motivate you!
          </p>
          <Link
            href="/login"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 mr-2 inline-flex w-32 items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Join
          </Link>

          <Link
            href="/create"
            className="inline-flex w-32 items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Create
          </Link>
        </div>
      </div>
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <Image
          src="/people_running.webp"
          alt="people running"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL="/pattern-light.svg"
        />
      </div>
    </section>
  );
};
