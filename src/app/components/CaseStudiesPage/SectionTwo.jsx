"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        headingRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          imageRef.current,
          { x: -150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<" // start at same time
        )
        .fromTo(
          contentRef.current,
          { x: 150, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-[1050px] sm:h-[1500px] md:h-[1200px] lg:h-[798px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]"
    >
      {/* RIGHT CIRCLE */}
      <div className="w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]"></div>
      </div>

      {/* LEFT CIRCLE */}
      <div className="hidden md:block bg-white w-[50vw] h-[50vw] rounded-full p-1 absolute bottom-[0vw] left-[-20vw]">
        <div className="w-full h-full rounded-full bg-[#EEEEEE]"></div>
      </div>

      {/* HEADINGS */}
      <div
        ref={headingRef}
        className="w-[303px] h-[100.77px] border-t-[3px] lg:border-t-[5px] border-[#4C4886] absolute left-1/2 -translate-x-1/2"
      >
        <h1 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[500] text-center text-[#333333]">
          Our Company
        </h1>
        <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-[600] text-[#4C4886] text-center">
          Case Studies
        </h2>
      </div>

      {/* IMAGE */}
      <div
        ref={imageRef}
        className="lg:hidden w-[70%] h-[310px] md:w-[40%] mx-auto mt-[120px]"
      >
        <img src="/img/careerspage/image04.png" className="ms-[4%]" loading="lazy" />
      </div>

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="lg:hidden w-[92%] h-[1000px] mx-auto flex flex-col items-start sm:mt-[220px] md:mt-[40px]"
      >
        <h1 className="w-[202px] h-[40px] border-l-[3px] border-[#4C4886] text-[28px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px]">
          Case Studies
        </h1>
        <p className="text-[16px] sm:text-[20px] font-[400] pt-[26px] text-[#AAAAAA]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's stancenturies,
        </p>
        <span className="text-[12px] sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]">
          Cost-effective and Comprehensive IT Outsourcing Services:
        </span>
        <div className="w-[242px] sm:w-[400px] mt-[24px] flex flex-col gap-[20px]">
          <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
            <h3 className="text-[16px] sm:text-[24px] font-[500] text-[#4C4886]">
              .Problem Statement
            </h3>
            <p className="text-[12px] sm:text-[16px] font-[400] text-[#AAAAAA] pt-[17px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              vitae temporibus ipsam ducimus corrupti tempora dolor perspiciatis
              esse delectus, quaerat veritatis labore. Qui, sunt. Reprehenderit
              nisi reiciendis soluta debitis esse.
            </p>
          </div>

          <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
            <h3 className="text-[16px] sm:text-[24px] font-[500] text-[#4C4886]">
              .Possible Solution
            </h3>
            <p className="text-[12px] sm:text-[16px] font-[400] text-[#AAAAAA] pt-[17px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              iste modi sapiente aliquid expedita quam maiores laudantium
              tempore deserunt rem facilis hic, numquam temporibus quaerat
              dolores cum aperiam ab corrupti.
            </p>
          </div>
        </div>
      </div>

      {/* FOR LARGE SCREEN */}
      <div className="hidden lg:flex w-full h-[78%] lg:mt-[20%] xl:mt-[14%] justify-between">
        <div ref={imageRef} className="w-[511px] h-[419px] z-[1000] ms-[5%]">
          <img
            src="/img/casestudiespage/image02.png"
            className="w-full h-full object-cover ms-[4%]" loading="lazy"
          />
        </div>

        <div ref={contentRef} className="w-[660px] h-full me-[3%]">
          <h1 className="border-l-[3px] border-[#4C4886] text-[28px] font-[600] text-[#4C4886] ps-[6px]">
            Case Studies
          </h1>
          <p className="text-[16px] font-[400] mt-[20px] text-[#AAAAAA]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's stancenturies,
          </p>
          <span className="text-[16px] text-[#4C4886] block mt-[20px] font-[700]">
            Cost-effective and Comprehensive IT Outsourcing Services:
          </span>
          <div className="w-full mt-[24px] flex items-center justify-center">
            <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
              <h3 className="text-[18px] font-[500] text-[#4C4886]">
                .Problem Statement
              </h3>
              <p className="text-[12px] font-[400] text-[#AAAAAA] pt-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias voluptas ut culpa, pariatur officiis fugiat id. Natus
                sequi consectetur consequuntur quas? A, recusandae! Quibusdam
                adipisci impedit nobis doloribus sed ratione?
              </p>
            </div>

            <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
              <h3 className="text-[18px] font-[500] text-[#4C4886]">
                .Possible Solution
              </h3>
              <p className="text-[12px] font-[400] text-[#AAAAAA] pt-[17px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                minima quisquam veniam illo, at laborum debitis vel sapiente
                repudiandae obcaecati perspiciatis dolores maxime corporis in
                laboriosam nam. Animi, odit! Placeat!
              </p>
            </div>

            <div className="w-full h-[134px] sm:h-[200px] p-[10px] mt-[30px] sm:mt-0">
              <h3 className="text-[18px] font-[500] text-[#4C4886]">
                .Design Process
              </h3>
              <p className="text-[12px] font-[400] text-[#AAAAAA] pt-[17px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                deleniti aliquam commodi autem sapiente est tempore, ab eius
                eligendi dicta non eaque facilis hic officiis pariatur! Eius
                facilis numquam maxime?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
