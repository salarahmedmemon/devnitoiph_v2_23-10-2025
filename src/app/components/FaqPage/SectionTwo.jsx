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
        <div ref={sectionRef} className="w-full h-[1200px] sm:h-[1100px] lg:h-[600px] bg-[#EEEEEE] overflow-hidden relative pt-0 md:pt-[28px]">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* IMAGE */}
            <div ref={imageRef} className="lg:hidden w-[240px] sm:w-[300px] h-[240px] md:w-[40%] mx-auto">
                <div className="w-full h-full relative ms-[4%]">
                    {/* <Image
                        src="/img/aboutpage/image03.png"
                        alt="image 03"
                        fill="true"
                        placeholder="blur"
                        className="object-cover"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAklEQVR4AewaftIAAAEpSURBVGNmQAIXLl3it7WzlbYwN/+2e/fuvwxIgIUBCI4ePaolJ/jmT2xK4AM+TUOxzfPWPpi755y64KcH/4KCgm4zAAHzgQMH2A8fPvy2o3fKX2NdARc+IwMZRmYlpRWTmm/++/P7RVNHO8eKpUt/szx79kxG4dcfQWthaSajn/80+Yyk8z6fYV3No2X3nIdTlPH9y1dPGBgYHjKvXbv2va6D/fNX/xnf2d3/ycHurZ1+8ejrlcLiDFv+Mfx6UFtb+4EBCJgYgODz58/MfHx893SzYnK4vzAyRPibpj569OjFv3///jNAATMDEDAxMQmxsLDoSGmIGShIKAgcP3Xs+pEzV46dPn16/9evX38yoAEBbk4OWXc702B+Xh55BgYGIQYGBg4GKAAAOcJxrLqJHhsAAAAASUVORK5CYII="
                    /> */}
                    <img src="/img/faqpage/faq.png" alt="left image" loading="lazy" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* CONTENT */}
            <div ref={contentRef} className="lg:hidden w-[94%] h-full mx-auto flex flex-col items-center sm:mt-[50px]">
                <h1 className="sm:border-l-[3px] border-[#4C4886] text-[26px] sm:text-[32px] font-[600] text-[#4C4886] ps-[6px]">Technical Faqs:</h1>
                <p className="text-[16px] sm:text-[20px] font-[400] pt-[26px] text-center text-[#AAAAAA]">We are an IT outsourcing company in Dubai offering an extended range of services including End User Support,
                    Application Investment, Cloud &amp; Infrastucture expertise. Our on-demand IT Staff Outsourcing solution in Dubai
                    specializes exclusively for digital transformation with Custom Software Development, Software Testing &amp;
                    QA, Cloud Computing, Mobile &amp; Web Development, Maintenance &amp; Support, Blockchain Consulting Data Science. 
                </p>
                <span className="text-[16px] sm:text-[12px] text-center sm:text-[18px] text-[#4C4886] font-[700] mt-[24px]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                <div className="w-[242px] sm:w-[400px] mt-[24px] flex flex-col">
                    <div className="w-full h-[134px] text-center p-[10px] sm:text-[12px]">
                        <h3 className="text-[#4C4886] font-[600] text-[16px]">Manage</h3>
                        <ul className="text-[14px] sm:text-[16px]">
                            <li>Essential IT Support</li>
                            <li>Basic Security &amp; Monitoring</li>
                            <li>Limited Cloud Storage</li>
                            <li>24/7 Email Support</li>
                        </ul>
                    </div>

                    <div className="w-full h-[134px] text-center p-[10px] sm:text-[12px]">
                        <h3 className="text-[#4C4886] font-[600] text-[16px]">Build</h3>
                        <ul className="text-[14px] sm:text-[16px]">
                            <li>Advanced IT Support &am; Maintenance</li>
                            <li>Enhanced Security &amp; Threat Detection</li>
                            <li>Increased Cloud Storage</li>
                            <li>24/7 Chat &amp; Email Support</li>
                        </ul>
                    </div>

                    <div className="w-full h-[134px] text-center p-[10px] sm:text-[12px] mt-[40px] sm:mt-0">
                        <h3 className="text-[#4C4886] font-[600] text-[16px]">General</h3>
                        <ul className="text-[14px] sm:text-[16px]">
                            <li>Fully Managed IT Services</li>
                            <li>Enterprise Level Security &amp; Backups</li>
                            <li>Unlimited Cloud Storage &amp; Backups</li>
                            <li>24/7 Priority Support (Phone, Chat, Email)</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* FOR LARGE SCREEN */}
            <div className="hidden lg:flex w-full h-[78%] mt-[60px] justify-center gap-[100px]">
                <div ref={imageRef} className="w-[400px] h-[350px] ms-[5%]">
                    <div className="w-full h-full relative ms-[5%]">
                        {/* <Image
                            src="/img/aboutpage/image03.png"
                            alt="image 03"
                            fill="true"
                            placeholder="blur"
                            className="object-cover"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAklEQVR4AewaftIAAAEpSURBVGNmQAIXLl3it7WzlbYwN/+2e/fuvwxIgIUBCI4ePaolJ/jmT2xK4AM+TUOxzfPWPpi755y64KcH/4KCgm4zAAHzgQMH2A8fPvy2o3fKX2NdARc+IwMZRmYlpRWTmm/++/P7RVNHO8eKpUt/szx79kxG4dcfQWthaSajn/80+Yyk8z6fYV3No2X3nIdTlPH9y1dPGBgYHjKvXbv2va6D/fNX/xnf2d3/ycHurZ1+8ejrlcLiDFv+Mfx6UFtb+4EBCJgYgODz58/MfHx893SzYnK4vzAyRPibpj569OjFv3///jNAATMDEDAxMQmxsLDoSGmIGShIKAgcP3Xs+pEzV46dPn16/9evX38yoAEBbk4OWXc702B+Xh55BgYGIQYGBg4GKAAAOcJxrLqJHhsAAAAASUVORK5CYII="
                        /> */}
                        <img src="/img/faqpage/faq.png" alt="left image" loading="lazy" className="w-full h-full object-contain" />
                    </div>
                </div>

                <div ref={contentRef} className="w-[900px] xl:w-[740px] h-full me-[5%]">
                    <h1 className="border-l-[3px] border-[#4C4886] text-[28px] font-[600] text-[#4C4886] ps-[6px]">Technical Faqs:</h1>
                    <p className="text-[16px] font-[400] mt-[20px] text-[#666]">When you land a sample webpage Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex unde commodi a labore quidem harum, provident omnis excepturi veritatis, neque quod, recusandae quis illo velit asperiores nobis. Ea, quae aliquid!</p>
                    <span className="text-[12px] lg:text-[16px] text-[#4C4886] block mt-[20px] font-[700]"> Cost-effective and Comprehensive IT Outsourcing Services:</span>
                    <div className="w-[98%] ms-[6px] mt-[24px] flex items-center justify-between gap-[14px]">
                        <div className="w-full h-[134px] sm:h-[200px] text-[16px]">
                            <h3 className="text-[#4C4886] font-[600] text-[16px] ">Manage</h3>            
                            <ul className="list-disc ps-[14px] text-[16px] text-[#666]">
                                <li>Essential IT Support</li>
                                <li>Basic Security &amp; Monitoring</li>
                                <li>Limited Cloud Storage</li>
                                <li>24/7 Email Support</li>
                            </ul>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] text-[16px]">
                            <h3 className="text-[#4C4886] font-[600] text-[16px] ">Build</h3>
                            <ul className="list-disc ps-[14px] text-[#666]">
                                <li>Advanced IT Support &am; Maintenance</li>
                                <li>Enhanced Security &amp; Threat Detection</li>
                                <li>Increased Cloud Storage</li>
                                <li>24/7 Chat &amp; Email Support</li>
                            </ul>
                        </div>

                        <div className="w-full h-[134px] sm:h-[200px] text-[16px]">
                            <h3 className="text-[#4C4886] font-[600] text-[16px]">General</h3>
                            <ul className="list-disc ps-[14px] text-[#666]">
                                <li>Fully Managed IT Services</li>
                                <li>Enterprise Level Security &amp; Backups</li>
                                <li>Unlimited Cloud Storage &amp; Backups</li>
                                <li>24/7 Priority Support (Phone, Chat, Email)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;