"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title animation
      gsap.from(".section-three-title", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section-three-title",
          start: "top 80%",
        },
      });

      // Projects animation alternating left/right
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -150 : 150,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ✅ Your real data
  const projects = [
    {
      heading: "GRAPHIC DESIGNING",
      items: [
        "Logo Designing",
        "FB Cover Designing",
        "Brouchers Designing",
        "CD / Cover Designing",
        "Photos Editing",
        "Web Header",
        "Sliders",
        "Branding Promotion",
      ],
      button: "Join Now",
    },
    {
      heading: "MOBILE DEVELOPMENT",
      items: [
        "Logo Designing",
        "FB Cover Designing",
        "Brouchers Designing",
        "CD / Cover Designing",
        "Photos Editing",
        "Web Header",
        "Sliders",
        "Branding Promotion",
      ],
      button: "Join Now",
    },
    {
      heading: "UI / UX DESIGNING",
      items: [
        "Logo Designing",
        "FB Cover Designing",
        "Brouchers Designing",
        "CD / Cover Designing",
        "Photos Editing",
        "Web Header",
        "Sliders",
        "Branding Promotion",
      ],
      button: "Join Now",
    },
    {
      heading: "WEB DEVELOPMENT",
      items: [
        "Logo Designing",
        "FB Cover Designing",
        "Brouchers Designing",
        "CD / Cover Designing",
        "Photos Editing",
        "Web Header",
        "Sliders",
        "Branding Promotion",
      ],
      button: "Join Now",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#0A131C] p-5 md:p-20 relative overflow-hidden"
    >

      {/* HEADINGS */}
            <div className="w-[398px] h-[44px] border-t-[3px] 
            lg:border-t-[5px] border-[#1AE4FA] 
            absolute left-1/2 -translate-x-1/2
            md:w-[400px]">
                <h1 className="text-[32px] font-[500] text-center text-white">PACKAGES We Offering</h1>
                <h2 className="text-[40px] font-[600] text-[#1AE4FA] text-center">Certified Excellence</h2>
            </div>
      {/* Gradient Box + Blurs */}
      <div className="hidden lg:block absolute top-[30%] left-1/2 -translate-x-1/2 w-[86%] h-[56%] bg-gradient-to-r from-[#FA1AC2] via-[#11AAEE] to-[#11AAEE] p-[2px] rounded-[10px]">
        <div className="w-full h-full bg-[#0A131C] rounded-[10px]"></div>
        <div className="w-[155px] h-[179px] bg-[#1AE4FA] rounded-full absolute top-[-4%] right-[-4%] blur-[250px]"></div>
        <div className="w-[155px] h-[179px] bg-[#1AE4FA] rounded-full absolute bottom-[-4%] left-[-4%] blur-[250px]"></div>
      </div>

      <div className="w-full h-full section-three-bgImage pt-[120px]">
        {/* Cards */}
        <div className="relative w-full h-full mt-4 mb-[40px] sm:mt-6 p-0 md:p-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-14">
          <img
            src="/img/aboutpage/sectionthree/rightLogo.png"
            className="hidden md:block absolute top-[-3%] right-[-4%] xl:top-[-7%] xl:right-[-1%]"
          />
          <img
            src="/img/aboutpage/sectionthree/leftLogo.png"
            className="hidden md:block absolute bottom-[-8%] left-[-4%] xl:bottom-[-14%] xl:left-[-1%]"
          />

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FA1AC2] via-[#11AAEE] to-[#1CDE63] 
                project-card group w-[100%] h-auto 
                sm:w-[40vw] md:w-[40vw]
                sm:mt-6 gradient-border rounded-lg relative overflow-hidden
                lg:w-[100%] lg:h-auto  
                p-[.8vw] sm:p-[.4vw] md:p-1 cursor-pointer"
            >
              <div className="w-full h-full bg-[#0A131C] flex flex-col p-4 xl:p-2">
                {/* Heading */}
                <h3 className="text-white text-[18px] font-[600] text-center mb-4">
                  COURSE <br/>
                  {project.heading}
                </h3>

                {/* List */}
                <ul className="list-disc text-white text-[12px] text-start space-y-2 ps-[10px] mb-4">
                  {project.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Button */}
                <button className="bg-white font-semibold w-[120px] px-2 py-1 rounded-md hover:opacity-90 transition">
                  {project.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
