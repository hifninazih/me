import LicensesData from "@/Data/Licenses.json";

export default function Contact() {
  return (
    <>
      <section className="section-transition-mode bg-white pb-16 pt-16 dark:bg-slate-900 lg:pb-32 lg:pt-36">
        <div className="container">
          <div
            className="w-full px-4"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-10 w-full text-center text-2xl font-bold text-dark dark:text-slate-100 md:text-3xl lg:text-4xl">
              Contact Me
            </h2>
          </div>

          <div className="flex w-full flex-wrap">
            <div
              className="px-4"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              <h3 className="mb-1 text-base font-bold text-dark dark:text-slate-100 md:text-lg lg:text-xl">
                Email
              </h3>
              <p className="text-justify text-sm font-medium text-secondary dark:text-slate-400 lg:text-base">
                {"me@hifninazih.com "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
