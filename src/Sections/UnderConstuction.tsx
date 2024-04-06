export default function UnderConstruction({ id, title } : { id: string, title: string }) {
    return (
      <>
        <section id={id}>
          <div className="flex justify-center w-full h-screen items-center bg-white">
            <h1 className="text-3xl p-3 font-bold text-white bg-red-400">
              {title} Section Under Construction
            </h1>
          </div>
        </section>
      </>
    );
  }
  