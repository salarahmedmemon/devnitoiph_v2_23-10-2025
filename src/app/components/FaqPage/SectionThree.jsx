"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
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
  const [clicked, setClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
        
        // Left image
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

        // Right content
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
    <div className="w-full h-[400px] md:h-[740px] bg-[#0A131C]">
      {/* Header */}
      <h1 ref={leftRef} className="text-[#4C4886] pt-[6vw] text-center font-semibold text-[4vw] md:text-[2vw]">
        A Frequently Asked Question
      </h1>
      <p ref={rightRef} className="text-center text-[#656565] pt-[1vw]">
        Quick answers to questions you may have about untitled UI and billing.
      </p>

      {/* Search */}
      <div ref={leftRef} className="relative w-fit mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="bg-white py-2 md:py-[.5vw] mt-[1.5vw] rounded-lg w-[35vw] md:w-[28vw] text-gray-500 text-[2.8vw] md:text-[1.3vw] ps-[5vw] md:ps-[3.4vw]"
        />
        <img
          src="/img/faqpage/image04.png"
          className="absolute top-[4.8vw] md:top-[2.3vw] left-[1.5vw] md:left-[1vw] w-[2vw] md:w-[1.5vw]"
        />
      </div>

      {/* Category buttons */}
      <div ref={rightRef} className="mx-auto w-fit mt-[4vw] text-[#848688] text-[2.5vw] md:text-[1.5vw] flex gap-[2vw] md:gap-[1vw]">
        <button className="bg-transparent font-semibold border-[2px] px-2 rounded border-[#3D3C6D] text-[#3D3C6D]">
          General
        </button>
        <button>Build</button>
        <button>Promote</button>
        <button>Manage</button>
        <button>Integration</button>
        <button>Legal</button>
      </div>

      <hr className="text-[#828484] mt-[1vw] w-[90vw] mx-auto" />

      <h2 ref={leftRef} className="text-[#4A4682] ps-[4.4vw] pt-[.7vw] font-semibold text-[2.7vw] md:text-[1.8vw]">
        General Questions
      </h2>

      {/* Conditional Rendering */}
      {!clicked ? (
        <div ref={leftRef} className="w-[90vw] mx-auto mt-[2vw] flex flex-wrap items-center justify-center gap-4">
          {questions.map((q, i) => (
            <div
              key={i}
              onClick={() => {
                setClicked(true);
                setActiveIndex(i);
              }}
              className="w-full h-[64px] border-[2px] border-gray-300 rounded-lg relative cursor-pointer"
            >
              <img
                src="/img/faqpage/arrow.png"
                className="absolute w-[3vw] right-[1vw] top-[.7vw]"
              />
              {/* <h3 className="ps-[1vw] pt-[2vw] text-white">{q.title}</h3> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[90vw] mx-auto mt-[2vw] flex gap-4">
          {/* Left Column */}
          <div className="w-[48%] h-[240px] flex flex-col gap-6">
            {questions.map((q, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full h-[16%] md:h-[6vh] flex items-center justify-between px-[1vw] cursor-pointer rounded-lg ${
                  activeIndex === i
                    ? "bg-[#4C4886] text-white"
                    : "border-[2px] border-gray-200 text-white"
                }`}
              >
                <>
                  <h2 className="font-semibold text-[1.8vw] md:text-[1.3vw]">{q.title}</h2>
                  <img src="/img/faqpage/whitearrow.png" className="w-[4vw]" />
                </>
              </div>
            ))}
          </div>

          <div className="w-[.1vw] h-[18vw] bg-[#282D50]"></div>

          {/* Right Column */}
          <div className="w-[48%] h-full">
            <h3 className="text-[#4A4783] font-semibold text-[2.4vw] md:text-[1.6vw]">
              {questions[activeIndex].title}
            </h3>
            <p className="text-[#56585A] text-[2vw] md:text-[1vw] mt-[1vw]">
              {questions[activeIndex].content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionThree;
