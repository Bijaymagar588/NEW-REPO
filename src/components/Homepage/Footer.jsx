import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full h-[16rem]  bg-blue-400 p-10">
      <div className="flex justify-around">
       
        <div className="flex flex-col items-start">
          <h1 className="text-white text-[2rem] font-black-ops-one mb-3">SASTRA GAMING</h1>
          <p className="text-white mb-3">Explore the ultimate gaming experience at SASTRA GAMING. </p>
          <p className = "text-white mb-3">Dive into a world of thrilling adventures, competitive gameplay, and community camaraderie.</p>
          <p className="text-white mb-3">Join us to level up your gaming passion today!</p>
          <div className="flex space-x-4 mt-3">
            <button className="text-white text-xl"><FaFacebook /></button> 
            <button className="text-white text-xl"><FaTwitter/></button>
            <button className="text-white text-xl"><IoLogoInstagram/></button>
            <button className="text-white text-xl"><IoLogoLinkedin /></button>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-white text-[1.5rem] font-eurostile mb-3">Quick Links</h1>
          <ul className="text-white space-y-2">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
        </div>

        
        <div className="flex flex-col items-start">
          <h1 className="text-white text-[1.5rem] font-eurostile mb-3">Contact Info</h1>
          <ul className="text-white space-y-2">
            <li>📞 +977 9840800929</li>
            <li>📧 sastragamingcore@gmail.com</li>
            <li>📍Putalisadak Kathmandu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
