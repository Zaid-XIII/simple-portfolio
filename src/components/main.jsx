export const MainSection = () => {
    return (
        <main className="container mx-auto px-6 py-12 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Zaid I work as a
          </h1>
          <h1 className="text-5xl font-bold mb-4 text-teal-400">Front-end developer</h1>

          <div className="flex space-x-4 mt-8">
            <button className="bg-teal-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-teal-300 transition duration-300">
              Hire me
            </button>
            <a href="https://aquamarine-marja-64.tiiny.site/" target="_blank"><button className="bg-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-700 transition duration-300 flex items-center">
              Download CV
            </button></a>
          </div>
        </div>
        
        <div className="relative">
        <img src="./public/programming-amico.svg" alt="Designer illustration" className="w-96 h-96 object-cover" />        </div>
      </main>
    );
  };
  
  export default MainSection;