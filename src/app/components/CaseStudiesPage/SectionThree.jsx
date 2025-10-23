"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const topRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      topRef.current,
      { y: -150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: topRef.current,
          start: "top 80%",
        },
      }
    );

    // Paragraph animation
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
        },
      }
    );

    // Box area animation
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
        },
      }
    );
  }, []);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="w-full h-[1900px] md:h-[1300px] lg:min-h-[1000px] bg-[#0A131C] p-5 sm:p-20">
      <div className="w-[99%] h-full md:h-auto gradient-border rounded-[1vw] p-1 mx-auto">
        <div className="w-full h-full bg-[#0A131C] rounded-[1vw] text-white">
          {/* Top Section */}
          <div
            className={`transition-all duration-700 ease-in-out ${isExpanded ? "-translate-y-[80px] md:-translate-y-[64px]" : "translate-y-0"
              }`}
          >
            <div
              ref={topRef}
              className="text-center w-[40vw] sm:w-[34vw] md:w-[14vw] mx-auto pt-[100px] sm:pt-[120px]"
            >
              <h1 className="text-[24px] sm:text-[5vw] md:text-[2.4vw] border-t-3 border-t-[#77CCF3]">
                Our Design
              </h1>
              <h2 className="text-[32px] sm:text-[4.9vw] md:text-[3.2vw] leading-[6vw] sm:leading-[4vw] md:leading-[3vw] text-[#77CCF3] font-semibold">
                Process
              </h2>
            </div>

            <p
              ref={leftRef}
              className="text-center p-6 sm:p-10 text-gray-300 max-w-[900px] mx-auto"
            >
              Lorem ipsum is simply dummy text of the printing and typsetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, When an unknown printer took a gallery of
              type and scrambled it to make a type speciman book.
            </p>

            <hr className="w-[90%] py-4 mx-auto border-gray-700" />
          </div>

          {/* Expandable Box Section */}
          <div className="flex justify-center">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`w-[50%] md:w-[80%] lg:w-[94%] gradient-border mx-auto rounded-lg p-[3px] mt-[40px] mb-[70px] transition-all duration-700 ease-in-out cursor-pointer ${isExpanded ? "scale-y-[1.15]" : "scale-y-[1]"
                }`}
              style={{ transformOrigin: "center center" }}
            >
              <div
                ref={rightRef}
                className="w-full bg-[#0A131C] rounded-lg pt-6 md:p-8 flex items-start justify-between gap-6 flex-wrap"
              >
                {[
                  {
                    img: "image01.png",
                    title: "Creative Design",
                    text: "We focus on crafting visually engaging and user-friendly designs.",
                  },
                  {
                    img: "image02.png",
                    title: "Research & Strategy",
                    text: "We analyze user behavior and market trends to guide design direction.",
                  },
                  {
                    img: "image03.png",
                    title: "Development",
                    text: "We bring designs to life with seamless, responsive front-end code.",
                  },
                  {
                    img: "image04.png",
                    title: "Testing & Delivery",
                    text: "We ensure performance, usability, and accessibility across platforms.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center w-[250px] text-center space-y-4"
                  >
                    <div className="w-[189px] h-[189px] rounded-lg overflow-hidden gradient-border p-[3px]">
                      <img
                        src={`/img/casestudiespage/sectionthree/${item.img}`}
                        className="w-full h-full rounded-lg object-cover" loading="lazy"
                        alt={item.title}
                      />
                    </div>

                    {/* Text appears when expanded */}
                    <div
                      className={`transition-all mx-auto w-[70%] duration-700 ease-in-out overflow-hidden ${isExpanded
                          ? "opacity-100 max-h-[300px] translate-y-0"
                          : "opacity-0 max-h-0 translate-y-4"
                        }`}
                    >
                      <h3 className="text-[18px] text-white font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-gray-300 leading-relaxed text-center md:text-start">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;