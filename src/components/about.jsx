
const AboutSection = () => {
  const handleClickMore = (event) => {
    event.preventDefault();
    document.querySelector('.show-less').classList.remove('hidden');
    document.querySelector('.read-more-target').classList.remove('hidden');
    document.querySelector('.read-more').classList.add('hidden');
  };

  const handleClickLess = (event) => {
    event.preventDefault();
    document.querySelector('.show-less').classList.add('hidden');
    document.querySelector('.read-more-target').classList.add('hidden');
    document.querySelector('.read-more').classList.remove('hidden');
  };
  return (

    <main className="container mx-auto px-6 py-12 flex items-center justify-between">
      <div className="relative">
        <img src="./public/static assets-bro.svg" alt="Designer illustration" className="w-96 h-96 object-cover" />        </div>
    
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-4">
          About <span className="text-teal-400">me</span>

        </h1>

        <div className="flex space-x-4 mt-8">
          <div className="mt-8">
            <p className="read-more-wrap">I am a recent graduate with a degree in IT Engineering, specializing in front-end development. Throughout my academic career, I have gained a solid foundation in various front-end languages and frameworks, including HTML, CSS, JavaScript, React, and Tailwind CSS. Although I am at the beginning of my professional journey, I have invested significant time in honing my skills through both online and offline courses, covering essential and advanced aspects of front-end development.

              <span className="read-more-target hidden">My education has provided me with a robust understanding of IT principles and the practical application of front-end technologies. I am passionate about creating user-friendly and aesthetically pleasing web interfaces. My coursework and projects have equipped me with the ability to develop responsive and interactive web applications, adhering to the latest industry standards.</span>
              <a href="#" onClick={handleClickMore} className="read-more ">...<span className="text-teal-400">    Show More</span></a>
              <a href="#" onClick={handleClickLess} className="show-less hidden text-teal-400">   Show Less</a>
            </p>

          </div>
        </div>
      </div>

      </main>
  );
};

export default AboutSection;