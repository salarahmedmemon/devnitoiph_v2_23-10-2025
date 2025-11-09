'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UpdatedSectionThree = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate Title
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

      // Animate Project Cards
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
    { img: "/img/aboutpage/sectionthree/image.png", name: "Junaid Qureshi", subname: "Founder & CEO" },
    { img: "/img/aboutpage/sectionthree/image02.png", name: "Maroof Qureshi", subname: "Frontend Developer Intern" },
    { img: "/img/aboutpage/sectionthree/image03.png", name: "Abdullah Al Tayeh", subname: "Sales Executive - UAE" },
    { img: "/img/aboutpage/sectionthree/image04.png", name: "Zulfiqar Ali Abro", subname: "Sales Executive - UAE" },
    { img: "/img/aboutpage/sectionthree/image05.png", name: "Adnan Qurban", subname: "Sales Executive - UAE" },
    { img: "/img/aboutpage/sectionthree/image06.png", name: "Iqra Qureshi", subname: "UI/UX Designer | Graphic Designer Intern" },
  ];

  return (
    <div ref={sectionRef} className="projects w-full h-[1600px] sm:h-[960px] md:h-[980px] relative bg-[#0A131C] pt-[15px] sm:pt-[20px] lg:pt-[58px] overflow-hidden">
      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[4%] right-[0%] opacity-[24%] lg:opacity-[30%] right-blur-circle blur-animation'></div>
      <div className='w-[0vw] h-[0vw] rounded-full absolute bottom-[30%] left-0 opacity-[24%] lg:opacity-[30%] blur-circle blur-animation'></div>


      {/* RIGHT LOGO */}
      <img
        src="/img/aboutpage/sectionthree/rightLogo.png"
        className="w-[80px] sm:w-[100px] md:w-[140px] absolute right-image-logo top-[6px] right-[4px] md:right-[20px] xl:right-[36px]" loading="lazy"
      />
      {/* LEFT LOGO */}
      <img src="/img/aboutpage/sectionthree/leftLogo.png" 
      className='left-image-logo leftimagelogo block w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] absolute bottom-[30px] sm:bottom-[70px] md:bottom-[10px] left-0 md:left-[16px] xl:left-[36px]' />

      {/* Main glass box */}
      <div className="main-glass w-[96%] md:w-[88%] mx-auto h-[96%] sm:h-[90%] md:h-[96%] rounded-[5px] xl:rounded-[26px] border-2 xl:border border-[#4279E8]/40
                            backdrop-blur-xl opacity-96
                            shadow-[0_8px_26px_rgba(0,0,0,0.6)]
                            relative overflow-hidden">
        {/* No extra logo needed inside */}
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content w-[403px] sm:w-[90%] md:w-[90%] h-[96%] rounded-[26px] absolute top-[-24px] left-1/2 -translate-x-1/2 mt-[58px] z-1000">
        {/* Heading */}
        <h1 className="w-[200px] sm:w-[300px] mx-auto text-2xl sm:text-3xl md:text-4xl text-center border-t-3 border-[#71C1E6] text-white mt-[40px] md:mt-[60px]">
          Meet The Best
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#71C1E6] font-bold">
          Team Ever
        </h2>

        <div className="w-[92%] mx-auto mt-[40px] grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-10">
          {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FA1AC2] via-[#11AAEE] to-[#1CDE63] project-card group w-[260px] mx-auto sm:mx-0 h-[205px] sm:h-[180px] md:h-[320px] sm:w-[40vw] md:w-[25vw] xl:w-[340px] gradient-border rounded-lg relative overflow-hidden flex items-center justify-center p-[3px] cursor-pointer"
              >
                <div className="w-full h-full rounded-lg bg-[#0A131C]">

                  <img
                    src={project.img}
                    className="rounded-lg w-full h-full object-cover transition-all duration-500 group-hover:opacity-30" loading="lazy"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {project.name}
                    </span>
                    <span className="text-white text-center text-[3vw] sm:text-lg font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {project.subname}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default UpdatedSectionThree;
