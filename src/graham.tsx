import graham from "./assets/graham.jpeg";

const Sam = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <img
        src={graham}
        alt="Sam"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default Sam;
