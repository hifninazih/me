import ProjectData from "@/Data/Projects.json";

type ProjectDataType = {
  title: string;
  description: string;
  image: string;
  button: {
    secondary?: {
      text: string;
      link: string;
    };

    primary?: {
      text: string;
      link: string;
    };
  };
  tags: string[];
};

const Projects = () => {
  const data = ProjectData;

  const Card = ({
    title,
    description,
    image,
    button,
    tags,
  }: ProjectDataType) => {
    return (
      <div
        className="w-full max-w-sm sm:max-w-md md:w-5/12 lg:max-w-lg xl:w-3/12"
        data-aos="zoom-in-up"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
      >
        <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 shadow-md dark:bg-slate-900">
          <div>
            {/* Image */}
            <div className="relative">
              <span className="absolute inset-0 h-full w-full text-white"></span>
              <img
                src={image}
                alt="Card image"
                className="mb-4 aspect-[4/3] rounded-md object-cover"
              />
            </div>
            {/* Title */}
            <h2 className="text-md mb-2 text-start font-semibold tracking-tight text-gray-900 dark:text-slate-50">
              {title}
            </h2>
            {/* Description */}
            <p className=" text-justify text-sm font-normal text-gray-700 dark:text-slate-300">
              {description}
            </p>
            {/* Tags (optional) */}
            <div className="mb-6 mt-2 flex flex-wrap">
              {tags?.map((tag, index) => (
                <div key={index}>
                  <div className=" relative mx-1 my-1 w-fit rounded px-2 text-xs font-semibold text-dark/50 outline outline-1 outline-dark/50 dark:text-slate-100/50 dark:outline-slate-100/50">
                    #{tag}
                    <span className="absolute inset-0 h-full w-full bg-transparent"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Action buttons (optional) */}
          <div className="flex justify-end gap-2">
            {button?.secondary && (
              <button
                className="rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-primary ring-1 transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                onClick={() =>
                  button.secondary && window.open(button.secondary.link)
                }
              >
                {button.secondary.text}
              </button>
            )}
            {button?.primary && (
              <button
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
                onClick={() =>
                  button.primary && window.open(button.primary.link)
                }
              >
                {button.primary.text}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

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
              Projects
            </h2>
          </div>
          <div>
            {data.length > 0 ? (
              <div className="flex flex-wrap items-stretch justify-center gap-5 text-center">
                {data.map((data) => (
                  <Card
                    key={data.title}
                    title={data.title}
                    description={data.description}
                    image={data.image}
                    button={data.button}
                    tags={data.tags}
                  />
                ))}
              </div>
            ) : (
              <div className="text-md dark:text-slatev text-center font-light tracking-tight text-gray-900 dark:text-slate-50">
                Not Found!
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
