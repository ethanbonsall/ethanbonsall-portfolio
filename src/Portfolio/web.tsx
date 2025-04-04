import useWebpagePhotos from "./useWebpagePhotos";

const Web = () => {
  const { photos, loading } = useWebpagePhotos();
  let links: string[] = [
    "https://a02-calculator-ethanbonsall.vercel.app/",
    "https://a03-pixel-art-maker-ethan.vercel.app/",
    "https://a04-wordle-ethanbonsall.vercel.app/",
    "https://a05-pokedex-ethanbonsall.vercel.app/",
    "https://a06-oriole-ethanbonsall.vercel.app/login",
    "https://a07-alias-team-44.vercel.app/",
    "https://a08-design-lab-ethanbonsall.vercel.app/",
    "https://www.ethanbonsall.com/birthday",
  ];
  return (
    <section className="bg-[#d8c4b6] text-[#213555] rounded-xl px-5 py-4 w-[93%] mt-5 border-2">
      <h1 className="text-4xl font-bold">Projects</h1>
      <hr className="border-black my-2" />
      <h2 className="text-2xl font-semibold">Web Projects</h2>
      {loading ? (
        <p className="text-xl">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {photos.slice(0, 8).map((photo, index) => (
            <a
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                key={index}
                src={photo}
                alt={`Project ${index}`}
                className="w-full h-auto object-cover rounded-xl border-2 shadow-md hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default Web;
