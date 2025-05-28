import Image from "next/image";

const AboutSectionTwo = () => {
  return (
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                  className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
                  data-wow-delay=".15s"
              >
                <Image
                    src="/images/about/about-image-2.svg"
                    alt="Reliable and Intelligent Solutions"
                    fill
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                    src="/images/about/about-image-2-dark.svg"
                    alt="Reliable and Intelligent Solutions - Dark"
                    fill
                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Reliable, Bug-Free Code
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Our code goes through rigorous quality checks, automated testing, and peer reviews to ensure maximum stability and security. We stand by our craftsmanship—because your trust matters.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Human-Centered, AI-Powered Support
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We combine the efficiency of AI with the warmth of real human connection. Whether it's troubleshooting or tailored guidance, our support team is always here for you—personally and promptly.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Built with Next.js & Future-Proof Tech
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We leverage cutting-edge frameworks like Next.js and AI integration to deliver fast, scalable, and seamless experiences. Your platform is built to evolve with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutSectionTwo;
