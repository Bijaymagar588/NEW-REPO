import b from '../../images/b.jpg';

const Hero = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-end py-20  bg-cover bg-center"
      style={{ backgroundImage: `url(${b})` }} 
    >
      <div className="w-90 mr-20 mt-20">
        <form
          id="contact-form"
          action=""
          method="POST"
          className="space-y-4 bg-white p-5 rounded-lg shadow-md mt-10 mb-10 " 
        >
          <input
            type="hidden"
            name="access_key"
            value="989f27e1-a22e-416b-b3d0-79fef50fbf77"
          />
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-80 px-1 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1 block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-80 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-80 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
