"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Search, Code, CheckCircle, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const UpdatedSectionThree = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMediumUp, setIsMediumUp] = useState(false);

  const topRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // ✅ Detect md breakpoint
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => setIsMediumUp(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // ✅ GSAP animations
  useEffect(() => {
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

  // ✅ Hover control
  const handleMouseEnter = () => {
    if (isMediumUp) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (isMediumUp) setIsExpanded(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#0A131C] p-5 sm:p-20 transition-all duration-700 ease-in-out">
      <div className="w-[99%] casestudypage-sectionthree gradient-border rounded-[1vw] p-1 mx-auto">
        <div className="w-full bg-[#0A131C] rounded-[1vw] text-white">
          {/* Top Section */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              isExpanded
                ? "-translate-y-[80px] md:-translate-y-[64px]"
                : "translate-y-0"
            }`}
          >
            <div
              ref={topRef}
              className="text-center w-[180px] sm:w-[300px] mx-auto pt-[40px] sm:pt-[120px]"
            >
              <h1 className="text-[26px] sm:text-[5vw] md:text-[2.4vw] lg:text-[44px] border-t-3 border-t-[#77CCF3]">
                Our Design
              </h1>
              <h2 className="text-[26px] sm:text-[4.9vw] md:text-[3.2vw] lg:text-[50px] leading-[6vw] sm:leading-[4vw] md:leading-[3vw] text-[#77CCF3] font-semibold">
                Process
              </h2>
            </div>

            <p
              ref={leftRef}
              className="text-center text-[16px] p-6 sm:p-10 text-gray-300 max-w-[900px] mx-auto"
            >
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book.
            </p>

            <hr className="w-[90%] py-4 mx-auto border-gray-700" />
          </div>

          {/* Expandable Box Section */}
          <div className="flex justify-center">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`w-[220px] md:w-[600px] lg:w-[94%] xl:w-[98%] gradient-border mx-auto rounded-lg p-[3px] mt-[0px] sm:mt-[40px] mb-[70px] transition-all duration-700 ease-in-out cursor-pointer ${
                isExpanded ? "scale-y-[1]" : "scale-y-[1]"
              }`}
              style={{ transformOrigin: "center center" }}
            >
              <div
                ref={rightRef}
                className="w-full bg-[#0A131C] rounded-lg pt-6 lg:p-8 pb-[20px] flex items-start justify-between gap-[10px] xl:gap-0 flex-wrap transition-all duration-700 ease-in-out"
              >
                {[
                  {
                    icon: <Brain className="w-16 h-16 text-[#77CCF3]" />,
                    title: "Creative Design",
                    text: "We focus on crafting visually engaging and user-friendly designs.",
                  },
                  {
                    icon: <Search className="w-16 h-16 text-[#77CCF3]" />,
                    title: "Research & Strategy",
                    text: "We analyze user behavior and market trends to guide design direction.",
                  },
                  {
                    icon: <Code className="w-16 h-16 text-[#77CCF3]" />,
                    title: "Development",
                    text: "We bring designs to life with seamless, responsive front-end code.",
                  },
                  {
                    icon: <CheckCircle className="w-16 h-16 text-[#77CCF3]" />,
                    title: "Testing & Delivery",
                    text: "We ensure performance, usability, and accessibility across platforms.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center w-[250px] gap-0 text-center space-y-4 transition-all duration-700 ease-in-out"
                  >
                    {/* Icon */}
                    <div className="w-[189px] h-[189px] rounded-lg overflow-hidden gradient-border p-[3px] flex items-center justify-center">
                      <div className="w-full h-full bg-[#0A131C] rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    {/* Expanding Text */}
                    <div
                      className={`transition-all mx-auto w-[70%] duration-700 ease-in-out overflow-hidden ${
                        isMediumUp
                          ? isExpanded
                            ? "opacity-100 max-h-[300px] translate-y-0"
                            : "opacity-0 max-h-0 translate-y-4"
                          : "opacity-100 max-h-[300px] translate-y-0"
                      }`}
                    >
                      <h3 className="text-[18px] text-white font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-gray-300 leading-relaxed text-center">
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

export default UpdatedSectionThree;
