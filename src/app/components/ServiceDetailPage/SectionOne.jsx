"use client";
import Image from "next/image";
import Header from "../Header";
import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LoadContext } from "../ClientWrapper";

const SectionOne = () => {
  // 1. states/hook variables
  // Context + Refs
  const { loaded } = useContext(LoadContext);
  const sectionRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const contentRef = useRef(null);
  const rightRef = useRef(null);
  const tl = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  // Animation on page load
  useLayoutEffect(() => {
    // Only run on client and when section exists.
    if (!sectionRef.current) return;

    // If `loaded` is explicitly false, skip until it becomes true.
    // But allow the animation to run if `loaded` is undefined (defensive).
    if (typeof loaded !== "undefined" && loaded === false) return;

    const ctx = gsap.context(() => {
      // Create timeline only for large screens (same behavior as original)
      if (window.innerWidth > 1280) {
        // create timeline (not automatically played)
        tl.current = gsap.timeline({ paused: true });

        tl.current.fromTo(
          imgRef1.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0
        );
        tl.current.fromTo(
          imgRef2.current,
          { y: 100, x: -100, opacity: 0 },
          { y: 0, x: 0, duration: 1, opacity: 1, ease: "power3.out" },
          0
        );
        tl.current.fromTo(
          contentRef.current,
          { x: -150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0
        );
        tl.current.fromTo(
          rightRef.current,
          { x: 150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          0
        );

        // Play the timeline in the next paint frame (safer for layout measurement)
        // keep the small 300ms delay you had originally
        rafRef.current = requestAnimationFrame(() => {
          timeoutRef.current = setTimeout(() => {
            if (tl.current && tl.current.play) {
              try {
                tl.current.play();
              } catch (e) {
                // fallback: if play fails, try to set progress to 1 so animation visible
                tl.current.progress(1);
              }
            }
          }, 300);
        });
      } else {
        // For smaller screens we can still animate but with simpler approach (optional)
        // Keep behavior identical to original by not animating on small screens.
      }
    }, sectionRef);

    return () => {
      // cleanup
      ctx.revert();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (tl.current) {
        try {
          tl.current.kill();
        } catch (e) { }
      }
    };
  }, [loaded]); // keep loaded so animation runs when it turns true

  // 2. functions/methods

  // 3. return statment/jsx
  return (
    <div ref={sectionRef} className="bg-[url('/img/servicedetailspage/bgimage.png')] bg-cover bg-center w-full h-[514px] sm:h-[560px] md:h-[640px] xl:h-[725px] pt-[9px] md:pt-[20px] xl:pt-[30px]">
      <Header />
      <div className="w-full h-full pt-[26px] sm:pt-0 relative overflow-hidden">
        <img ref={imgRef1}
          src="/img/aboutpage/sectionone/image01.png" loading="lazy"
          className="img-top hidden lg:block absolute w-[173px] h-[217px] top-[-5%] left-[29%]"
        />
        <img ref={imgRef2}
          src="/img/aboutpage/sectionone/image02.png" loading="lazy"
          className="img-left-bottom hidden lg:block absolute w-[66px] h-[136px] rotate-[28deg] top-[2%] left-[60%]"
        />
        <div className="w-full h-[80%] sm:h-full md:w-[88%] md:h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mx-auto">
          <div ref={contentRef} className="text-container w-[100%] h-full md:w-[491px] md:h-[420px] xl:h-full flex flex-col items-center lg:items-start justify-center">
            <button className="w-[125px] h-[36px] sm:w-[140px] md:w-[160px] md:h-[40px] lg:w-[198px] lg:h-[65px] bg-white text-[#4C4886] text-[24px] lg:text-[40px] font-[600] rounded-lg mt-[16px] sm:mt-0 xl:mt-0">
              LET'S SEE
            </button>
            <h1 className="text-white leading-[60px] lg:mt-[10px] font-[600] text-[48px] lg:text-[90px]">
              SERVICES
            </h1>
            <span className="text-[24px] lg:text-[40px] lg:mt-[40px] font-[500] text-white leading-[14px]">DETAILS</span>
            <p className="text-white text-[12px] w-[80%] text-center lg:text-start font-[500] mt-[20px]   sm:w-[70%] sm:text-[14px]  md:w-[100%] md:text-[16px]   lg:text-[20px] lg:w-[90%]  xl:mt-[30px]">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </p>
            <button className="w-[146px] h-[46px] sm:w-[200px] sm:h-[37px] bg-white text-[#4C4886] text-[12px] font-[600] rounded-[5px] mt-[8px]   md:w-[207px] md:h-[44px] md:text-[20px]   xl:mt-[40px] relative group">
              Talk to our expert
              <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-200 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
            </button>
          </div>
          <div ref={rightRef} className="main-img-container w-[196px] h-[201px]    sm:w-[400px] sm:h-[100px]  xl:w-[500px]  xl:h-[200px]   flex items-center justify-center">
            <img
              src="/img/servicedetailspage/image02.png" loading="lazy"
              className="pt-0 sm:pt-[80px] md:pt-0  w-[95%] sm:w-[65%]  lg:w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;