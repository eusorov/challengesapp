import Button from "./UI/Button";

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h1 className="mb-4 text-4xl leading-tight font-bold md:text-5xl">
              Take on a challenge, inspire your journey!
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Join a community of challengers and track your progress together.
              Whether it&apos;s reading, diving, or a fun activity, connect with
              others who are motivated you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#" primary>
                Start Now
              </Button>
              <Button href="#" outline>
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h-64 overflow-hidden rounded-lg bg-gray-200 md:h-96">
              <img
                src="/icebucketchallenge.jpg"
                alt="People taking on challenges"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
