import Servicehero1 from "../../data/Servicehero1.json"

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center  bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${Servicehero1.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black h-full opacity-50 " />

      <div className="flex flex-col items-start justify-start  relative z-10  mt-10 text-start ml-20">
        <h1 className="text-4xl font-black-ops-one text-white mb-5">
        Game Enhancement Services!
        </h1>
        <p className=" text-xl font-black-ops-one text-white mb-5">
          Where passion meets gaming excellence!
        </p>
        <button className="bg-white text-gray-800 font-black-ops-one px-6 py-3 rounded hover:bg-gray-200">
          <a href="../">Upcoming Games</a>
        </button>
      </div>
    </div>
    
  );
};

export default Hero;
