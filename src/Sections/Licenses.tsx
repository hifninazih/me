import LicensesData from "@/Data/Licenses.json";

export default function Licenses() {
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
              Licenses & Certifications
            </h2>
          </div>

          <ul className="flex w-full flex-wrap items-stretch justify-center">
            {LicensesData.map((data) => (
              <li
                key={data.id}
                className="m-2 flex w-full justify-center bg-transparent sm:max-w-lg"
                data-aos="flip-up"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                data-aos-offset="100"
                data-aos-delay="200"
              >
                <div
                  className="duration-400 flex w-full max-w-lg items-center justify-center rounded-lg border border-gray-200 bg-white px-2 shadow-md shadow-primary/30 transition-all ease-in-out hover:scale-[1.02] hover:cursor-pointer hover:shadow-lg hover:shadow-primary/60 dark:shadow-primary/70 dark:hover:shadow-primary"
                  onClick={() => window.open(data.link)}
                >
                  <div className="flex h-full w-24 items-center justify-center rounded-lg p-2">
                    <img
                      src={data.image}
                      alt={data.alt}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mb-2 flex w-full flex-col px-2 py-4">
                    <h5 className="md:text-md text-sm font-semibold tracking-tight text-gray-900 ">
                      {data.judul}
                    </h5>
                    <p className="text-xs font-normal text-gray-700 md:text-sm ">
                      {data.penyedia}
                    </p>
                    {data?.details.map((detail, index) => (
                      <p
                        key={index}
                        className="text-xs font-light text-gray-400 md:text-sm "
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
