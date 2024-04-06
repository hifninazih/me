// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Home() {
  return (
    <>
      <section
        id="home"
        className="section-transition-mode pt-24 dark:bg-slate-900 md:pt-16 lg:pt-40"
      >
        <div className="container mx-auto">
          <div className="flex flex-col-reverse flex-wrap md:flex-row ">
            <div
              className=" w-full self-center px-4 text-center md:w-1/2 md:text-left"
              data-aos="zoom-in-right"
              data-aos-duration="300"
              data-aos-offset="0"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-base font-semibold text-primary  md:text-xl lg:text-2xl">
                {`Hi!, I'm`}
                <span className="mt-1 block text-3xl font-bold text-dark dark:text-slate-100 lg:text-4xl xl:text-5xl">
                  {`Hifnie Nazih Al Ghifari`}
                </span>
              </h1>
              <h2 className="mb-10 text-lg font-medium text-secondary dark:text-slate-400 xl:text-2xl">
                <p className="mt-1 p-0 italic">{`Geodetic Engineering Student`}</p>
              </h2>

              <a
                href="./me/CV_Hifnie.pdf"
                className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                target="_blank"
              >
                <span className="mr-2">{`Download CV`}</span>
                <ArrowDownTrayIcon className="inline-block h-5 w-5" />
              </a>
            </div>
            <div
              className="mb-10 w-full self-center px-4 md:w-1/2"
              data-aos="zoom-out-up"
              data-aos-duration="500"
              data-aos-offset="0"
              data-aos-easing="ease-in-out"
            >
              <div className="mt-10 flex justify-start lg:right-0 lg:mt-0">
                <div className="relative">
                  <img
                    src="me/img/profile.png"
                    alt="Profile"
                    className="mx-auto
                  max-w-full"
                  />
                  <span className="absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2">
                    <svg
                      viewBox="0 0 220 220"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-full w-full "
                    >
                      <path
                        className="fill-primary"
                        d="M44.2,-73.3C54.8,-62,59.1,-45.5,66.4,-30.1C73.8,-14.8,84.1,-0.6,85.8,14.8C87.4,30.3,80.5,47,69.4,60.5C58.3,74.1,43.1,84.4,28.2,82.7C13.3,81,-1.2,67.2,-18.4,62.3C-35.6,57.4,-55.5,61.4,-65.4,54.3C-75.4,47.2,-75.3,29,-72.5,13.6C-69.8,-1.8,-64.4,-14.3,-57.7,-25.2C-50.9,-36.1,-42.9,-45.2,-33.1,-56.9C-23.3,-68.6,-11.6,-82.9,2.6,-86.9C16.8,-90.9,33.6,-84.7,44.2,-73.3Z"
                        transform="translate(110 125) scale(1.1)"
                      />
                    </svg>
                  </span>
                  <span className="absolute  bottom-0 left-1/2 z-10 h-1/2 w-full -translate-x-1/2 bg-gradient-to-t from-white to-transparent dark:from-slate-900"></span>

                  <span className="absolute left-1/2  top-0 z-10 h-1/2 w-full -translate-x-1/2 "></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
