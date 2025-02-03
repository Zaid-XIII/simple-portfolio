import programming from '/Programming-amico.svg'
export const MainSection = () => {
    return (
      <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Zaid <br /> I work as a
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400">Front-end developer</h1>

        <div className="flex space-x-4 mt-8 md:justify-start justify-center">
            <button className="bg-teal-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-teal-300 transition duration-300">
              Hire me
            </button>
            <button className="bg-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition duration-300 flex items-center">
            <a href="https://aquamarine-marja-64.tiiny.site/" target="_blank">
              Download CV</a>
            </button>
          </div>
      </div>

      <div className="relative mt-8 md:mt-0">
        <img src={programming} alt="Designer illustration" className="w-72 md:w-96 h-auto mx-auto" />
      </div>
    </main>
    );
  };
  
  export default MainSection;