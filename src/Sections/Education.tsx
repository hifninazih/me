export default function Education() {
  return (
    <>
      <section className="section-transition-mode bg-slate-50 pb-16 pt-16 dark:bg-slate-800 lg:pb-32 lg:pt-36">
        <div className="container">
          <div
            className="w-full px-4"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-10 w-full text-center text-2xl font-bold text-dark dark:text-slate-100 md:text-3xl lg:text-4xl">
              Education
            </h2>
          </div>
          <div className="flex flex-col">
            <ul className="timeline timeline-vertical timeline-snap-icon text-dark max-md:timeline-compact dark:text-slate-100">
              {/* SMK */}
              <li>
                <div
                  className="timeline-middle text-primary"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className="timeline-start mb-10 md:text-right"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                >
                  <time className="font-mono md:text-lg">2017-2020</time>
                  <div className="font-extrabold md:text-xl">
                    SMK Pekerjaan Umum Negeri Bandung
                  </div>
                  <div className="text-md font-normal italic">
                    Teknik Geomatika
                  </div>
                </div>
                <div
                  className="timeline-end mb-0 hidden md:mb-10 md:block"
                  data-aos="fade-left"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="500"
                >
                  <img
                    src="me/logo/logo-pu.png"
                    alt="Logo UGM"
                    className="w-16"
                  />
                </div>
                <hr
                  className="bg-primary"
                  data-aos="fade-down"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="400"
                />
              </li>

              {/* University */}
              <li>
                <hr
                  className="bg-primary"
                  data-aos="fade-down"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="400"
                />
                <div
                  className="timeline-middle text-primary"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div
                  className="timeline-start md:timeline-end md:mb-10"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="300"
                >
                  <time className="font-mono md:text-lg">Aug 2022-Present</time>
                  <div className="font-extrabold md:text-xl">
                    Universitas Gadjah Mada
                  </div>
                  <div className="text-md font-normal italic">
                    Geodetic Engineering
                  </div>
                </div>
                <div
                  className="timeline-end mb-0 hidden md:timeline-start md:mb-10 md:block"
                  data-aos="fade-right"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="500"
                >
                  <img
                    src="me/logo/lambang-ugm.png"
                    alt="Logo UGM"
                    className="w-20"
                  />
                </div>
                <hr
                  className="bg-slate-300"
                  data-aos="fade-down"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="400"
                />
              </li>
              <li>
                <hr
                  className="bg-slate-300"
                  data-aos="fade-down"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="400"
                />
                <div
                  className="timeline-middle text-slate-400"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
