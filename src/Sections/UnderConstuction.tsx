export default function UnderConstruction({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <>
      <section id={id}>
        <div className="flex h-screen w-full items-center justify-center bg-white">
          <h1 className="bg-red-400 p-3 text-3xl font-bold text-white">
            {title} Section Under Construction
          </h1>
        </div>
      </section>
    </>
  );
}
