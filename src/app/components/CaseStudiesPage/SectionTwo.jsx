"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
        <div ref={sectionRef} className="w-full h-[1168px] sm:h-[1500px] lg:h-[748px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* HEADINGS */}
            <div ref={headingRef} className="w-[230px] sm:w-[303px] h-[100.77px] border-t-[3px] lg:border-t-[5px] border-[#4C4886] absolute left-1/2 -translate-x-1/2">
                <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-[500] text-center text-[#333333]">Our Company</h1>
                <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-[600] text-[#4C4886] text-center">Case Studies</h2>
            </div>

            {/* IMAGE */}
            <div ref={imageRef} className="lg:hidden w-[260px] sm:w-[400px] sm:h-[310px] mx-auto mt-[120px]">
                <div className="w-full h-full relative md:ms-[4%]">
                    {/* <Image
                        src="/img/aboutpage/image03.png"
                        alt="image 03"
                        fill="true"
                        placeholder="blur"
                        className="object-cover"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAklEQVR4AewaftIAAAEpSURBVGNmQAIXLl3it7WzlbYwN/+2e/fuvwxIgIUBCI4ePaolJ/jmT2xK4AM+TUOxzfPWPpi755y64KcH/4KCgm4zAAHzgQMH2A8fPvy2o3fKX2NdARc+IwMZRmYlpRWTmm/++/P7RVNHO8eKpUt/szx79kxG4dcfQWthaSajn/80+Yyk8z6fYV3No2X3nIdTlPH9y1dPGBgYHjKvXbv2va6D/fNX/xnf2d3/ycHurZ1+8ejrlcLiDFv+Mfx6UFtb+4EBCJgYgODz58/MfHx893SzYnK4vzAyRPibpj569OjFv3///jNAATMDEDAxMQmxsLDoSGmIGShIKAgcP3Xs+pEzV46dPn16/9evX38yoAEBbk4OWXc702B+Xh55BgYGIQYGBg4GKAAAOcJxrLqJHhsAAAAASUVORK5CYII="
                    /> */}
                    <img src="/img/casestudiespage/image02.png" alt="left image" loading="lazy" className="w-full h-full object-contain md:object-cover" />
                </div>
            </div>

            {/* CONTENT */}
            <div ref={contentRef} className="lg:hidden w-[94%] h-[629px] mx-auto flex flex-col items-center mt-[20px] sm:mt-[50px]">
                <h1 className="text-center w-[202px] h-[40px] sm:border-l-[3px] border-[#4C4886] text-[24px] sm:text-[32px] font-[600] text-[#4C4886] sm:ps-[6px]">Case Studies</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[10px] sm:pt-[26px] text-center text-[#AAAAAA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                <span className="text-[16px] text-center sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                <div className="w-[242px] sm:w-[400px] mt-[24px] flex flex-col gap-[20px]">
                    <div className="w-full h-[134px] sm:h-[200px] text-center p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px] font-[500] text-[#4C4886]">Problem Statement</h3>
                        <p className="text-[14px] sm:text-[16px] font-[400] text-[#AAAAAA] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. </p>
                    </div>

                    <div className="w-full h-[134px] sm:h-[200px] text-center p-[10px]">
                        <h3 className="text-[16px] sm:text-[24px]  font-[500] text-[#4C4886]">Possible Solution</h3>
                        <p className="text-[14px] sm:text-[16px]  font-[400] text-[#AAAAAA] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                    </div>

                    <div className="w-full h-[134px] sm:h-[200px] text-center p-[10px] mt-[30px] sm:mt-0">
                        <h3 className="text-[16px] sm:text-[24px]  font-[500] text-[#4C4886]">Design Process</h3>
                        <p className="text-[14px] sm:text-[16px]  font-[400] text-[#AAAAAA] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                    </div>
                </div>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] mt-[200px] justify-center gap-[100px]">
                <div ref={imageRef} className="w-[30%] xl:w-[511px] h-[419px] ms-[5%]">
                    <div className="w-[400px] xl:w-full h-full relative ms-[4%]">
                        {/* <Image
                            src="/img/aboutpage/image03.png"
                            alt="image 03"
                            fill="true"
                            placeholder="blur"
                            className="object-cover"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAklEQVR4AewaftIAAAEpSURBVGNmQAIXLl3it7WzlbYwN/+2e/fuvwxIgIUBCI4ePaolJ/jmT2xK4AM+TUOxzfPWPpi755y64KcH/4KCgm4zAAHzgQMH2A8fPvy2o3fKX2NdARc+IwMZRmYlpRWTmm/++/P7RVNHO8eKpUt/szx79kxG4dcfQWthaSajn/80+Yyk8z6fYV3No2X3nIdTlPH9y1dPGBgYHjKvXbv2va6D/fNX/xnf2d3/ycHurZ1+8ejrlcLiDFv+Mfx6UFtb+4EBCJgYgODz58/MfHx893SzYnK4vzAyRPibpj569OjFv3///jNAATMDEDAxMQmxsLDoSGmIGShIKAgcP3Xs+pEzV46dPn16/9evX38yoAEBbk4OWXc702B+Xh55BgYGIQYGBg4GKAAAOcJxrLqJHhsAAAAASUVORK5CYII="
                        /> */}
                        <img src="/img/casestudiespage/image02.png" alt="left image" loading="lazy" className="w-full h-full xl:object-contain" />
                    </div>
                </div>

                <div ref={contentRef} className="w-[70%] xl:w-[700px] h-full me-[5%]">
                    <h1 className="border-l-[3px] border-[#4C4886] text-[28px] font-[600] text-[#4C4886] ps-[6px]">Our Principle</h1>
                    <p className="text-[16px] font-[400] mt-[20px] text-[#666]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                    <span className="text-[12px] lg:text-[16px] text-[#4C4886] block mt-[20px] font-[700]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                    <div className="w-full mt-[24px] flex items-center justify-between gap-[14px]">
                        <div className="w-full h-[134px]  sm:h-[200px] ">
                            <h3 className="text-[12px] lg:text-[16px] font-[500] text-[#4C4886]">Tailored Excellence</h3>
                            <p className="text-[10px] lg:text-[16px] font-[400] text-[#666] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. </p>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] ">
                            <h3 className="text-[12px] lg:text-[16px] font-[500] text-[#4C4886]">Transparent Collaboration</h3>
                            <p className="text-[10px] lg:text-[16px] font-[400] text-[#666] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px]  mt-[30px] sm:mt-0">
                            <h3 className="text-[12px] lg:text-[16px] font-[500] text-[#4C4886]">clients security</h3>
                            <p className="text-[10px] lg:text-[16px] font-[400] text-[#666] pt-[17px]">We deliver custom software and SaaS solutions that are specifically designed to meet the unique needs of your business. Our team ensures excellence in every aspect of our services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;