import audrey from "./assets/audrey.jpeg";

const Audrey = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <img
        src={audrey}
        alt="audrey"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
};

export default Audrey;
