import { useState } from "react";
import Image from "next/image";

const SectionFour = () => {
  const testimonials = [
    {
      img: "/img/aboutpage/sectionfour/profile01.jpeg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "@Hassan Khan",
    },
    {
      img: "/img/aboutpage/sectionfour/profile02.jpeg",
      text: "Great service! I am really impressed with the professionalism.",
      name: "@Ali Ahmed",
    },
    {
      img: "/img/aboutpage/sectionfour/profile03.jpeg",
      text: "Highly recommend them for anyone looking for quality work.",
      name: "@Sara Malik",
    },
    {
      img: "/img/aboutpage/sectionfour/profile04.jpeg",
      text: "The team was incredibly responsive and delivered on time.",
      name: "@Zain Tariq",
    },
    {
      img: "/img/aboutpage/sectionfour/profile05.jpeg",
      text: "Amazing experience! Will definitely work with them again.",
      name: "@Maryam Fatima",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[url('/img/aboutpage/sectionfour/bgImage.png')] bg-cover bg-center w-full h-[442.85px] relative flex flex-col justify-center items-center px-4">
      
      {/* TITLE */}
      <div className="relative text-center mb-10">
        <div className="w-[50vw] sm:w-[28vw] md:w-[16vw] h-[2px] sm:h-[3px] bg-[#71C1E6] absolute left-1/2 -translate-x-1/2 top-[5vw] sm:top-[20%] md:top-[18%]"></div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white pt-8 sm:pt-6">
          Testimonials
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#71C1E6] font-semibold">
          Customer Feedback
        </h2>
      </div>

      {/* SLIDER */}
      <div className="w-full max-w-[900px] flex items-center justify-between gap-5">
        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#5399B6] flex items-center justify-center rounded-lg cursor-pointer hover:opacity-80"
        >
          <img src="/img/aboutpage/sectionfour/leftArrow.png" alt="Previous" />
        </button>

        {/* CONTENT */}
        <div className="flex-1 text-center px-4">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#5399B6] mx-auto overflow-hidden border-4 border-white">
            <img
              src={testimonials[currentIndex].img}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="hidden sm:block text-white mt-4 text-[12px] sm:text-base md:text-lg max-w-[600px] mx-auto">
            {testimonials[currentIndex].text}
          </p>
          <span className="text-white block mt-3 font-semibold text-lg">
            {testimonials[currentIndex].name}
          </span>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#5399B6] flex items-center justify-center rounded-lg cursor-pointer hover:opacity-80"
        >
          <img src="/img/aboutpage/sectionfour/rightArrow.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default SectionFour;
