"use client";
import Image from "next/image";
import Header from "../Header";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LoadContext } from "../ClientWrapper";


const SectionOne = () => {
  // 1. states/hook variables
  const { loaded } = useContext(LoadContext);
  const sectionRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const contentRef = useRef(null);
  const rightRef = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    if (!loaded || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // timeline setup
      tl.current = gsap.timeline();

      // only run this on desktop
      if (window.innerWidth > 1024) {
        tl.current
          .fromTo(
            imgRef1.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            0
          )
          .fromTo(
            imgRef2.current,
            { y: 100, x: -100, opacity: 0 },
            { y: 0, x: 0, duration: 1, opacity: 1, ease: "power3.out" },
            0
          )
          .fromTo(
            contentRef.current,
            { x: -150, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            0.2
          )
          .fromTo(
            rightRef.current,
            { x: 150, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
            0.2
          );
      } else {
        // for mobile - simple fade in
        tl.current.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);

  // 2. functions/methods

  // 3. return statment/jsx
  return (
    <div ref={sectionRef} className="w-full h-[514px] sm:h-[560px] md:h-[640px] xl:h-[725px] pt-[70px] sm:pt-[0px] md:pt-[20px] lg:pt-[80px]">

      <div className="w-full h-[514px] sm:h-[560px] md:h-[640px] xl:h-[725px] absolute top-0 left-0 bg-[#141d24]">
        <div className="w-full h-full opacity-65">
          <img src="/img/casestudiespage/image.png" alt="background image" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* <Header /> */}

      <div className="w-full casestudiespage-sectionone mx-auto h-full pt-[26px] sm:mt-4 lg:mt-0 xl:pt-0 relative overflow-hidden">
        <img ref={imgRef1}
          src="/img/aboutpage/sectionone/image01.png"
          className="img-top hidden lg:block absolute w-[173px] h-[217px] top-[-5%] left-[29%]" loading="lazy"
        />
        <img ref={imgRef2}
          src="/img/aboutpage/sectionone/image02.png" loading="lazy"
          className="img-left-bottom hidden lg:block absolute w-[66px] h-[136px] rotate-[28deg] top-[16%] left-[55%]"
        />
        <div className="w-full h-[80%] sm:h-full md:w-[88%] md:h-full lg:h-[84%] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mx-auto sm:mt-[80px] lg:mt-0">
          <div ref={contentRef} className="text-container w-[100%] h-full md:w-[491px] md:h-[420px] xl:h-full flex flex-col items-center lg:items-start justify-center">
            <button className="w-[125px] h-[36px] sm:w-[140px] md:w-[160px] md:h-[40px] lg:w-[198px] lg:h-[65px] bg-white text-[#4C4886] text-[24px] lg:text-[40px] font-[600] rounded-lg mt-[16px] sm:mt-0 xl:mt-0">
              OUR CASE
            </button>
            <h1 className="text-white text-center lg:text-start leading-[60px] lg:mt-[20px] w-[100vw] font-[600] text-[48px]  lg:text-[75px]  xl:text-[90px]">
              STUDIES
            </h1>
            {/* <span className="text-[24px] lg:text-[40px] lg:mt-[40px] font-[500] text-white leading-[14px]">DETAILS</span> */}
            <p className="text-white text-[12px] w-[80%] text-center lg:text-start font-[500] mt-[20px]   sm:w-[70%] sm:text-[14px]  md:w-[100%] md:text-[16px]   lg:text-[20px] lg:w-[90%]  xl:mt-[30px] xl:w-[100%]">
              We have made quality our habit. It's not something that we just strive for - we live
              by this principle every day.
            </p>
            <button className="w-[146px] h-[37px] sm:w-[200px] bg-white text-[#4C4886] text-[12px] font-[600] rounded-[5px] mt-[8px]   md:w-[207px] md:h-[44px] md:text-[20px]   xl:mt-[40px] relative group">
              Talk to our expert
              <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-200 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
            </button>
          </div>
          <div ref={rightRef} className="main-img-container w-[196px] h-[201px]    sm:w-[400px] sm:h-[100px]  xl:w-[500px]  xl:h-[200px]   flex items-center justify-center">
            <img
              src="/img/casestudiespage/image01.png"
              className="pt-0 sm:pt-[80px] md:pt-0  w-[95%] sm:w-[65%]  lg:w-[100%]" loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;