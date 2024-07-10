import c from '../../images/c.png';

const Hero = () => {
  return (
    
    <div
      className="flex flex-col items-center justify-center  bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${c})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 " />
      
      <div className="relative z-10 text-center mt-20">
        <h1 className="text-4xl mb-5 mt-20 font-black-ops-one text-gradient-to-tr from-custom-red to-custom-orange">
          Welcome to the Sastra Gaming Foundation!
        </h1>
        <p className="text-xl mb-8 font-black-ops-one text-white">
          Where passion meets gaming excellence!
        </p>
        <button className="bg-white text-gray-800 font-black-ops-one px-6 py-3 rounded hover:bg-gray-200">
          <a href="../">Upcoming Games</a>
        </button>
      </div>
      
      <div className="relative z-10 about-details text-center mx-auto py-12 px-5 md:px-20 lg:px-40 mb-10">
        <p className="text-lg mb-5 text-white font-medium font-black-ops-one">
          <span className="">
            Welcome to Sastra Gaming Foundation,
          </span>{""}
          where gaming passion meets innovation and community! We're dedicated
          to elevating the gaming experience and fostering a vibrant gaming
          community.
        </p>
        <p className="text-lg mb-5 text-white font-medium font-black-ops-one">
          At Sastra Gaming Foundation, we're all about supporting gamers and
          game developers alike. We provide a platform that showcases the latest
          in gaming technology, offers resources for aspiring developers, and
          hosts exciting events and tournaments.
        </p>
        <p className="text-lg text-white font-medium font-black-ops-one">
          Our mission is simple: to make gaming more accessible and enjoyable
          for everyone while championing the incredible talent within our
          community. When you engage with us, you're not just participating in
          gaming events - you're also contributing to the growth and
          sustainability of the gaming industry.
        </p>
      </div>
    </div>
  );
};

export default Hero;
