"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
    // 1. states/hook variables
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
                    start: "top 100%", // when section enters viewport
                    end: "bottom 60%", // when section leaves
                },
            });

            // Headings → from top
            tl.fromTo(
                headingRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.6, ease: "power3.out" },
            );

            // Image → from left
            tl.fromTo(
                imageRef.current,
                { x: -150, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.6, ease: "power3.out" },
                0
            );

            // Content → from right
            tl.fromTo(
                contentRef.current,
                { x: 150, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.6, ease: "power3.out" },
                0
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // functions/methods

    // 3. return statement/jsx
    return (
        <div ref={sectionRef} className="w-full h-[1168px] sm:h-[1500px] lg:h-[798px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* HEADINGS */}
            <div ref={headingRef} className="w-[220px] sm:w-[303px] lg:w-[360px] h-[100.77px] border-t-[3px] border-[#4C4886] absolute left-1/2 -translate-x-1/2">
                <h1 className="text-[26px] sm:text-[38px] font-[600] text-center text-[#333333]">Our Company</h1>
                <h2 className="text-[26px] sm:text-[38px] font-[600] text-[#4C4886] text-center">Principle</h2>
            </div>

            {/* IMAGE */}
            <div ref={imageRef} className="lg:hidden w-[90%] h-[310px] md:w-[40%] mx-auto mt-[60px] sm:mt-[120px]">
                <div className="w-full h-full relative ms-[4%]">
                    <img src="/img/aboutpage/image03.png" alt="left image" loading="lazy" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* CONTENT */}
            <div ref={contentRef} className="lg:hidden w-[94%] h-[629px] mx-auto flex flex-col items-center sm:mt-[50px]">
                <h1 className="text-center w-[180px] sm:w-[202px] h-[40px] sm:border-l-[3px] border-[#4C4886] text-[24px] sm:text-[32px] font-[600] text-[#4C4886] sm:ps-[6px]">Our Principle</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[26px] text-center text-[#AAAAAA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                <span className="text-[14px] text-center sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                <div className="w-[242px] sm:w-[400px] mt-[18px] flex flex-col">
                    <div className="w-full h-[134px] sm:h-[200px] text-center p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px] font-[500] text-[#4C4886]">Tailored Excellence</h3>
                        <p className="text-[14px] sm:text-[16px] font-[400] text-[#AAAAAA] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. </p>
                    </div>

                    <div className="w-full h-[134px] sm:h-[200px] text-center p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px]  font-[500] text-[#4C4886]">Transparent Collaboration</h3>
                        <p className="text-[14px] sm:text-[16px]  font-[400] text-[#AAAAAA] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                    </div>

                    <div className="w-full h-[134px] sm:h-[200px] text-center p-[10px] mt-[30px] sm:mt-0">
                        <h3 className="text-[16px] sm:text-[24px]  font-[500] text-[#4C4886]">clients security</h3>
                        <p className="text-[14px] sm:text-[16px]  font-[400] text-[#AAAAAA] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                    </div>
                </div>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] mt-[14%] xl:mt-[200px] justify-center gap-[100px]">
                <div ref={imageRef} className="w-[511px] h-[419px] ms-[5%]">
                    <div className="w-full h-full relative ms-[4%]">
                        <img src="/img/aboutpage/image03.png" alt="left image" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div ref={contentRef} className="w-[700px] h-full me-[5%]">
                    <h1 className="border-l-[3px] border-[#4C4886] text-[28px] font-[600] text-[#4C4886] ps-[6px]">Our Principle</h1>
                    <p className="text-[16px] lg:text-[12px] font-[400] mt-[20px] text-[#666666]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                    <span className="text-[12px] text-[#4C4886] block mt-[20px] font-[700]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                    <div className="w-full mt-[24px] flex items-center justify-between">
                        <div className="w-full h-[134px]  sm:h-[200px] p-[10px]">
                            <h3 className="text-[12px] font-[500] text-[#4C4886]">Tailored Excellence</h3>
                            <p className="text-[10px] font-[400] text-[#666666] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. </p>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px]">
                            <h3 className="text-[12px] font-[500] text-[#4C4886]">Transparent Collaboration</h3>
                            <p className="text-[10px] font-[400] text-[#666666] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px] mt-[30px] sm:mt-0">
                            <h3 className="text-[12px] font-[500] text-[#4C4886]">clients security</h3>
                            <p className="text-[10px] font-[400] text-[#666666] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;