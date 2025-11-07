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

  useLayoutEffect(() => {
    if (!loaded || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth > 1280) {
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

        // 👇 instead of waiting for mousemove, just play after a small delay
        gsap.delayedCall(0.5, () => {
          tl.current.play();
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);


  // 2. functions/methods

  // 3. return statement/jsx
  return (
    <div ref={sectionRef} className="w-full h-[450px] sm:h-[650px] lg:[844px] xl:h-[731px] pt-[70px] sm:pt-[120px] lg:pt-[80px]">

      <div className="w-full h-[450px] sm:h-[650px] lg:[844px] xl:h-[731px] absolute top-0 left-0 bg-[#04080B]">
        <div className="w-full h-full opacity-90">
          {/* <Image
            src="/img/faqpage/background-image.png"
            alt="background image"
            fill
            placeholder="blur"
            className="object-cover"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
          /> */}
          <img src="/img/faqpage/background-image.png" alt="background image" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* <Header /> */}
      <div className="w-full mx-auto fagpage-sectionone h-full pt-0 relative overflow-hidden">

        <img ref={imgRef1}
          src="/img/aboutpage/sectionone/image01.png" loading="lazy"
          className="img-top hidden lg:block absolute top-[-5%] left-[43%] w-[14%] xl:w-[173.36px] xl:h-[217.96px]"
        />
        <img ref={imgRef2}
          src="/img/aboutpage/sectionone/image02.png" loading="lazy"
          className="img-left-bottom hidden lg:block absolute top-[7%] right-[28%] w-[5%] xl:w-[66.87px] xl:h-[136.36px] z-[50] rotate-[24deg]"
        />

        <div className="w-full h-[80%] md:h-full flex flex-col-reverse lg:hidden items-center justify-center gap-0 md:gap-10 ps-25.5 pe-25.5">
          <div className="text-container w-[50vw] sm:w-[90%] h-full flex flex-col items-center justify-center">
            <button className="w-[136px] h-[36px] bg-white text-[#4C4886] text-[24px] sm:text-[3vw] md:text-[2.5vw] font-[600] rounded-[10px] mt-0  md:mt-10">
              OUR FAQ:S
            </button>
            <h1 className="text-white font-[600] text-[48px] sm:text-[10vw] md:text-[6.5vw] leading-[44px] sm:leading-[10vw] md:leading-[7vw]">
              QUESTIONS
            </h1>
            <p className="text-white text-[12px] font-[500] sm:text-[2.4vw] md:text-[1.5vw] w-[90vw] sm:w-[100%] md:w-[70%] text-center mt-[1vw]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className="w-[115px] h-[24px] sm:w-[200px] sm:h-[40px] bg-white text-[#4C4886] text-[12px] sm:text-[2.4vw] md:text-[18px] font-[600] rounded-[5px] mt-4 relative group">
              Talk to our experts
              <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
            </button>
          </div>

          <div className="main-img-container w-[190px] sm:w-[300px] md:w-[300px] md:h-[100px] flex items-center justify-center">
            <img
              src="/img/faqpage/image01.png"
              className="pt-[35px] sm:pt-10 md:pt-40 object-contain"
              loading="lazy"
            />
          </div>

        </div>

        {/* FOR LARGE DEVICES */}
        <div className="hidden w-[90%] h-full mx-auto lg:flex justify-between">
          <div ref={contentRef} className="w-full h-full">
            <button className="w-[256px] h-[66px] text-[44px] bg-white text-[#4C4886] font-[600] rounded-[10px] mt-[90px] xl:mt-[140px]">OUR FAQ:S</button>
            <h1 className="text-white font-[600] text-[92px] leading-[100px]">QUESTION</h1>
            <p className="text-white font-[500] w-[64%] lg:w-[80%] text-[20px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className="w-[208px] h-[46px] bg-white text-[#4C4886] font-[600] rounded-[5px] mt-[35px] relative group">Talk to our experts
              <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
            </button>

          </div>
          <div ref={rightRef} className="w-full h-[80%] flex items-center justify-end">
            <img src="/img/faqpage/image01.png"
              className="w-[300px] h-[300px] xl:w-[461.51px] xl:h-[461.51px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;