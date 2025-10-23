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

  // LARGE SCREEN REFS
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const contentRef = useRef(null);
  const rightRef = useRef(null);
  const tl = useRef(null);

  // MOBILE REFS
  // const mImg1 = useRef(null);
  // const mImg2 = useRef(null);
  // const mContent = useRef(null);
  // const mRight = useRef(null);

  useLayoutEffect(() => {
    if (!loaded || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth > 1280) {
        tl.current = gsap.timeline({ paused: true });
        tl.current.fromTo(imgRef1.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);
        tl.current.fromTo(imgRef2.current, { y: 100, x: -100, opacity: 0 }, { y: 0, x: 0, duration: 1, opacity: 1, ease: "power3.out" }, 0);
        tl.current.fromTo(contentRef.current, { x: -150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);
        tl.current.fromTo(rightRef.current, { x: 150, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0);

        const handleEnter = () => { if (tl.current.paused()) tl.current.play(); };
        sectionRef.current.addEventListener("mousemove", handleEnter);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);

  // 2. functions/methods

  // 3. return statement/jsx
  return (
    <div ref={sectionRef} className="w-full h-[450px] sm:h-[650px] lg:[844px] xl:h-[731px] pt-[14px] lg:pt-[36px]">

      <div className="w-full h-[450px] sm:h-[650px] lg:[844px] xl:h-[731px] absolute top-0 left-0 bg-gradient-to-b from-[#04080B] to-[#31365C]">
        <div className="w-full h-full opacity-80">
          <Image
            src="/img/termspage/image.png"
            alt="background image"
            fill
            placeholder="blur"
            className="object-cover"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
          />
        </div>
      </div>

      <Header />
      <div className="w-full h-full pt-0 relative overflow-hidden">

        <img ref={imgRef1}
          src="/img/aboutpage/sectionone/image01.png"
          className="img-top hidden lg:block absolute top-[-5%] left-[34%] w-[173.36px] h-[217.96px]"
        />
        <img ref={imgRef2}
          src="/img/aboutpage/sectionone/image02.png"
          className="img-left-bottom hidden lg:block absolute top-[3%] left-[57%] rotate-30 w-[66.87px] h-[136.36px] z-[50]"
        />

        <div className="w-full h-[80%] md:h-full flex flex-col-reverse lg:hidden items-center justify-center gap-0 md:gap-10 ps-25.5 pe-25.5">
          <div className="text-container w-[50vw] sm:w-[90%] h-full flex flex-col items-center justify-center">
            <button className="w-[136px] h-[36px] bg-white text-[#4C4886] text-[24px] sm:text-[3vw] md:text-[2.5vw] font-[600] rounded-[10px] mt-0 md:mt-10">
              OUT TERMS
            </button>
            <h1 className="text-white font-[600] text-[48px] sm:text-[10vw] md:text-[6.5vw] sm:leading-[10vw] md:leading-[7vw]">
              &CONDITION
            </h1>
            <p className="text-white text-[12px] font-[500] sm:text-[2.4vw] md:text-[1.5vw] w-[90vw] sm:w-[100%] md:w-[70%] text-center mt-[1vw]">
              We have made quality our habit. It's not something that we just strive for - we live
              by this principle every day.
            </p>
            <button className="w-[115px] h-[24px] sm:w-[200px] sm:h-[40px] bg-white text-[#4C4886] text-[12px] sm:text-[2.4vw] md:text-[1.2vw] font-[600] rounded-[5px] mt-4 relative group">
              VIEW ALL SERVICES
              <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
            </button>
          </div>

          <div className="main-img-container w-[234px] h-[212px] sm:w-[44vw] sm:h-full md:w-[350px] md:h-[100px] flex items-center justify-center">
            <img
              src="/img/termspage/image01.png"
              className="pt-0 sm:pt-10 md:pt-40"
            />
          </div>

        </div>

        <div className="w-[90%] h-full mx-auto flex">
          <div ref={contentRef} className="w-full h-full">
            <button className="w-[268px] h-[66px] text-[44px] bg-white text-[#4C4886] font-[600] rounded-[10px] mt-[108px]">OUR TERMS</button>
            <h1 className="text-white w-[700px] font-[600] text-[90px] leading-[100px]">&amp;CONDITION</h1>
            <p className="text-white font-[500] w-[64%] lg:w-[64%] text-[24px] mt-[10px]">
              We have made quality our habit. It's not something that we just strive for - we live
              by this principle every day.
            </p>
            <button className="w-[208px] h-[46px] bg-white text-[#4C4886] font-[600] text-[20px] rounded-[5px] mt-[35px] relative group">VIEW ALL SERVICES
              <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
            </button>

          </div>
          <div ref={rightRef} className="w-full h-[80%] flex items-center justify-center">
            <img src="/img/termspage/image01.png"
              className="w-[626.65px] h-[300px] xl:h-[468.19px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;