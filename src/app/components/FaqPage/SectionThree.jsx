"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const questions = [
  {
    title: "Why SEO Is Important For All Business",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "How to Build an Effective Website",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Best Practices for Marketing",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const SectionThree = () => {
  // ✅ Set clicked = true by default so content shows immediately
  const [clicked, setClicked] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ show first question by default

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left image animation
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Right content animation
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="homepage-section-six w-full h-[800px] md:h-[740px] bg-[#0A131C] relative">
      <div className="w-full h-full absolute bottom-0 bg-[#0a131cf5]"></div>
      <div className="w-full faqpage-sectionthree mx-auto z-[9999] relative">
        {/* Heading */}
        <h1
          ref={leftRef}
          className="text-[#4C4886] pt-[60px] text-center font-[500] text-[20px] sm:text-[28px]"
        >
          A Frequently Asked Question
        </h1>
        <p
          ref={rightRef}
          className="text-center text-[#656565] text-[16px] font-[500] pt-[1vw]"
        >
          Quick answers to questions you may have about untitled UI and billing.
        </p>

        {/* Search */}
        <div ref={leftRef} className="relative w-fit mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-white mt-[30px] rounded-lg w-[300px] sm:w-[447px] h-[46px] px-[40px] py-[10px] text-[20px] text-[#CCCCCC] font-[400]"
          />
          <img
            src="/img/faqpage/image04.png"
            className="absolute top-[43px] left-[10px] w-[20px] h-[20px]"
          />
        </div>

        {/* Category buttons */}
        <div
          ref={rightRef}
          className="mx-auto w-fit mt-[60px] text-[16px] flex gap-[20px] text-[#AAAAAA]"
        >
          <button className="bg-transparent w-[70px] sm:w-[120px] h-[30px] sm:border-[2px] sm:px-[20px] rounded-[5px] sm:rounded-[10px] border-[#4C4886] text-[#4C4886] font-[500]">
            General
          </button>
          <button>Build</button>
          <button>Promote</button>
          <button>Integration</button>
          <button>Legal</button>
        </div>

        <hr className="text-[#828484] mt-[1vw] w-[94%] mx-auto" />

        <h2
          ref={leftRef}
          className="text-[#4A4682] ps-[20px] sm:ps-[44px] pt-[20px] font-[500] text-[24px]"
        >
          General Questions
        </h2>

        {/* ✅ Show content immediately */}
        <div className="w-[94%] mx-auto mt-[40px] flex flex-col md:flex-row md:gap-[40px]">
          {/* Left Column */}
          <div className="w-[97%] md:w-[48%] h-[240px] flex flex-col gap-6">
            {questions.map((q, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full h-[16%] md:h-[6vh] flex items-center justify-between px-[20px] cursor-pointer rounded-lg ${
                  activeIndex === i
                    ? "bg-[#4C4886] text-white"
                    : "border-[2px] border-gray-200 text-white"
                }`}
              >
                <>
                  <h2 className="font-semibold text-[12px] md:text-[16px]">
                    {q.title}
                  </h2>
                  <img src="/img/faqpage/whitearrow.png" className="w-[26px]" />
                </>
              </div>
            ))}
          </div>

          <div className="hidden md:block w-[5px] h-[240px] bg-[#282D50]"></div>

          {/* Right Column */}
          <div className="w-[97%] md:w-[48%] h-full">
            <h3 className="text-[#4A4783] font-[500] text-[16px] md:text-[20px]">
              {questions[activeIndex].title}
            </h3>
            <p className="text-[#56585A] text-[12px] md:text-[18px] mt-[20px]">
              {questions[activeIndex].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
