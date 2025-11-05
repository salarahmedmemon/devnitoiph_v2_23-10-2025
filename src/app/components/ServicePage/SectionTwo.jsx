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
        <div ref={sectionRef} className="w-full h-[1168px] sm:h-[1200px] lg:h-[798px] bg-[#EEEEEE] overflow-hidden relative pt-[48px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* HEADINGS */}
            <div ref={headingRef} className="w-[300px] sm:w-[500px] h-[100.77px] border-t-[3px] lg:border-t-[5px] border-[#4C4886] absolute left-1/2 -translate-x-1/2">
                <h1 className="text-[28px] sm:text-[38px] lg:text-[44px] font-[500] text-center text-[#333333]">Services We Offering</h1>
                <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-[600] text-[#4C4886] text-center">Certified of Excellence</h2>
            </div>

            {/* IMAGE */}
            <div ref={imageRef} className="lg:hidden w-[90%] h-[310px] md:w-[40%] mx-auto mt-[80px] sm:mt-[120px]">
                <div className="w-full h-full relative md:ms-[4%]">
                    {/* <Image
                        src="/img/aboutpage/image03.png"
                        alt="image 03"
                        fill="true"
                        placeholder="blur"
                        className="object-cover"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAklEQVR4AewaftIAAAEpSURBVGNmQAIXLl3it7WzlbYwN/+2e/fuvwxIgIUBCI4ePaolJ/jmT2xK4AM+TUOxzfPWPpi755y64KcH/4KCgm4zAAHzgQMH2A8fPvy2o3fKX2NdARc+IwMZRmYlpRWTmm/++/P7RVNHO8eKpUt/szx79kxG4dcfQWthaSajn/80+Yyk8z6fYV3No2X3nIdTlPH9y1dPGBgYHjKvXbv2va6D/fNX/xnf2d3/ycHurZ1+8ejrlcLiDFv+Mfx6UFtb+4EBCJgYgODz58/MfHx893SzYnK4vzAyRPibpj569OjFv3///jNAATMDEDAxMQmxsLDoSGmIGShIKAgcP3Xs+pEzV46dPn16/9evX38yoAEBbk4OWXc702B+Xh55BgYGIQYGBg4GKAAAOcJxrLqJHhsAAAAASUVORK5CYII="
                    /> */}
                    <img src="/img/servicepage/sectionone/image02.png" alt="left image" loading="lazy" className="w-full h-full object-contain md:object-cover" />
                </div>
            </div>

            {/* CONTENT */}
            <div ref={contentRef} className="lg:hidden w-[94%] h-[629px] mx-auto flex flex-col items-center sm:mt-[50px]">
                <h1 className="w-[180px] sm:w-[200px] h-[40px] border-l-[3px] border-[#4C4886] text-[28px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px]">Our Services</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[26px] text-center text-[#AAAAAA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stancenturies,</p>
                <span className="text-[12px] text-center sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                <div className="w-[242px] sm:w-[400px] mt-[24px] flex flex-col">
                    <div className="w-full h-[134px] sm:h-[145px] text-center p-[10px] text-[12px]">
                        <ul>
                                <li>Hire Mobile App Developer</li>
                                <li>Hire Scrum Master in Dubai</li>
                                <li>Hire AWS Resources in Dubai</li>
                                <li>Hire QA Resource in Dubai</li>
                                <li>Hire Node.js Developer in Dubai</li>
                                <li>Hire Azure Developer in Dubai</li>
                            </ul>
                    </div>

                    <div className="w-full h-[134px] sm:h-[145px] text-center p-[10px] text-[12px]">
                        <ul>
                                <li>Hire Mobile App Developer</li>
                                <li>Hire Scrum Master in Dubai</li>
                                <li>Hire AWS Resources in Dubai</li>
                                <li>Hire QA Resource in Dubai</li>
                                <li>Hire Node.js Developer in Dubai</li>
                                <li>Hire Azure Developer in Dubai</li>
                            </ul>
                    </div>

                    <div className="w-full h-[134px] sm:h-[145px] text-center p-[10px] mt-[30px] sm:mt-0 text-[12px]">
                        <ul>
                                <li>Hire Mobile App Developer</li>
                                <li>Hire Scrum Master in Dubai</li>
                                <li>Hire AWS Resources in Dubai</li>
                                <li>Hire QA Resource in Dubai</li>
                                <li>Hire Node.js Developer in Dubai</li>
                                <li>Hire Azure Developer in Dubai</li>
                            </ul>
                    </div>
                </div>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] mt-[14%] xl:mt-[200px] justify-center gap-[100px]">
                <div ref={imageRef} className="w-[419px] h-[350px] ms-[5%]">
                    <div className="w-full h-full relative ms-[4%]">
                        {/* <Image
                            src="/img/aboutpage/image03.png"
                            alt="image 03"
                            fill="true"
                            placeholder="blur"
                            className="object-cover"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAklEQVR4AewaftIAAAEpSURBVGNmQAIXLl3it7WzlbYwN/+2e/fuvwxIgIUBCI4ePaolJ/jmT2xK4AM+TUOxzfPWPpi755y64KcH/4KCgm4zAAHzgQMH2A8fPvy2o3fKX2NdARc+IwMZRmYlpRWTmm/++/P7RVNHO8eKpUt/szx79kxG4dcfQWthaSajn/80+Yyk8z6fYV3No2X3nIdTlPH9y1dPGBgYHjKvXbv2va6D/fNX/xnf2d3/ycHurZ1+8ejrlcLiDFv+Mfx6UFtb+4EBCJgYgODz58/MfHx893SzYnK4vzAyRPibpj569OjFv3///jNAATMDEDAxMQmxsLDoSGmIGShIKAgcP3Xs+pEzV46dPn16/9evX38yoAEBbk4OWXc702B+Xh55BgYGIQYGBg4GKAAAOcJxrLqJHhsAAAAASUVORK5CYII="
                        /> */}
                        <img src="/img/servicepage/sectionone/image02.png" alt="left image" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div ref={contentRef} className="w-[700px] h-full me-[5%]">
                    <h1 className="border-l-[3px] border-[#4C4886] text-[28px] font-[600] text-[#4C4886] ps-[6px]">Our Services</h1>
                    <p className="text-[16px] font-[400] mt-[20px] text-[#AAAAAA]">When you land a sample webpage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex unde commodi a labore quidem harum, provident omnis excepturi veritatis, neque quod, recusandae quis illo velit asperiores nobis. Ea, quae aliquid!</p>
                    <span className="text-[12px] text-[#4C4886] block mt-[20px] font-[700]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                    <div className="w-full mt-[24px] flex items-center justify-between">
                        <div className="w-full h-[134px]  sm:h-[200px] p-[10px] text-[12px]">
                            <ul className="list-disc">
                                <li>Hire Mobile App Developer</li>
                                <li>Hire Scrum Master in Dubai</li>
                                <li>Hire AWS Resources in Dubai</li>
                                <li>Hire QA Resource in Dubai</li>
                                <li>Hire Node.js Developer in Dubai</li>
                                <li>Hire Azure Developer in Dubai</li>
                            </ul>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px] text-[12px]">
                            <ul className="list-disc">
                                <li>Hire Mobile App Developer</li>
                                <li>Hire Scrum Master in Dubai</li>
                                <li>Hire AWS Resources in Dubai</li>
                                <li>Hire QA Resource in Dubai</li>
                                <li>Hire Node.js Developer in Dubai</li>
                                <li>Hire Azure Developer in Dubai</li>
                            </ul>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] p-[10px] mt-[30px] sm:mt-0 text-[12px]">
                            <ul className="list-disc">
                                <li>Hire Mobile App Developer</li>
                                <li>Hire Scrum Master in Dubai</li>
                                <li>Hire AWS Resources in Dubai</li>
                                <li>Hire QA Resource in Dubai</li>
                                <li>Hire Node.js Developer in Dubai</li>
                                <li>Hire Azure Developer in Dubai</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;