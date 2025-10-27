"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  // 1. states/hook variables
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
    <div ref={sectionRef} className="w-full bg-[#0A131C] p-5 md:p-20 relative overflow-hidden">
      <div className="hidden aboutpage-section-three md:block absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] h-[84%] bg-gradient-to-r from-[#FA1AC2] via-[#11AAEE] to-[#11AAEE] p-[2px] rounded-[10px]">
        <div className="w-full h-full bg-[#0A131C] rounded-[10px]"></div>
        <div className="w-[155px] h-[179px] bg-[#1AE4FA] rounded-full absolute top-[-4%] right-[-4%] blur-[250px]"></div>
        <div className="w-[155px] h-[179px] bg-[#1AE4FA] rounded-full absolute bottom-[-4%] left-[-4%] blur-[250px]"></div>
      </div>

      <div className="w-full aboutpage-section-three mx-auto h-full section-three-bgImage pt-2 sm:pt-4 md:pt-6">

        <div className="relative section-three-title mt-[20px] md:mt-[40px]">
          {/* <div className="w-[59vw] sm:w-[40vw] md:w-[20vw] h-1 bg-[#71C1E6] absolute left-[15.7%] sm:left-[28.5%] md:left-[38.5%] top-[5vw] sm:top-[20%] md:top-[18%]"></div> */}
          <h1 className="w-[160px] md:w-[260px] mx-auto text-2xl sm:text-3xl md:text-4xl text-center pt-[10px] border-t-[3px] border-[#71C1E6] text-white">
            See Our
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#71C1E6] font-bold">
            Latest Blog
          </h2>
        </div>


        <div className="relative w-full mt-4 sm:mt-6 md:mt-0 p-0 md:p-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <img
            src="/img/aboutpage/sectionthree/rightLogo.png"
            className="hidden md:block absolute top-[-18%] lg:top-[-200px] right-[-60px] lg:right-[-50px] xl:right-[-30px]" loading="lazy"
          />

          <img
            src="/img/aboutpage/sectionthree/leftLogo.png" loading="lazy"
            className="hidden md:block absolute bottom-[-40px] left-[-60px] lg:bottom-[-13%] lg:left-[-50px] xl:left-[-30px]"
          />

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#FA1AC2] via-[#11AAEE] to-[#1CDE63] 
              project-card group w-full h-[240px] sm:h-[340px] xl:h-[400px] sm:mt-6
              gradient-border rounded-lg relative overflow-hidden  
              p-[.8vw] sm:p-[.4vw] md:p-1 cursor-pointer"
            >
              <div className="w-full h-full bg-[#0A131C] flex flex-col 
              p-[5px] xl:p-[10px] text-white text-center">
                <h3 className="font-[600] text-[12px] sm:text-[16px] xl:text-[20px]">COURSE</h3>
                <h4 className="font-[600] text-[12px] sm:text-[16px] xl:text-[20px]">{project.heading}</h4>

                <ul className="list-disc mt-[20px] sm:mt-[40px] text-start ms-[20px] sm:ms-[40px] text-[10px] sm:text-[14px] xl:text-[16px]">
                  {project.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <button className="w-[50px] sm:w-[90px] h-[20px] sm:h-[28px] rounded-[3px] bg-white text-[#4C4886] mt-[20px] ms-[10px] sm:ms-[20px] text-[10px] sm:text-[12px]">Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;