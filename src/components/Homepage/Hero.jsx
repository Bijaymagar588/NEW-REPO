import gamingImage from '../../images/gaming.png';


const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen items-center pt-[5rem] w-full mt-2">
      <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center">
        <p className="text-[#e77e0d] font-medium ml-20">
          Proved by pro designer
        </p>
        <h1 className="text-[2rem] font-bold font-eurostile w-full xl:w-[25rem] ml-20 mb-10">
          Get Ready to Play, Explore, Conquer
        </h1>
        <p className="text-xl w-full xl:w-[-19rem] text-gray-200 ml-20 mb-5">
          Browse Our Popular Games
        </p>
        <button className="text-sm w-[10rem] py-2 rounded-full bg-gradient-to-tr from-custom-red to-custom-orange ml-20">
          Get more details
        </button>
      </div>
      <div className="flex items-center justify-center flex-1 h-full mr-20 mt-20">
        <img src={gamingImage} alt="Gaming" />
      </div>
    </div>
  );
};

export default Hero;
