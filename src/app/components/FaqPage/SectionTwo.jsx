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
                    start: "top 80%", // when section enters viewport
                    end: "bottom 60%", // when section leaves
                },
            });

            // Headings → from top
            tl.fromTo(
                headingRef.current,
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );

            // Image → from left
            tl.fromTo(
                imageRef.current,
                { x: -150, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "0" // overlap
            );

            // Content → from right
            tl.fromTo(
                contentRef.current,
                { x: 150, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "0"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div ref={sectionRef}
            className="w-full h-[940px] md:h-[700px] bg-[#EEEEEE] pt-10 overflow-hidden relative"
        >
           {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* Main content */}
            <div className="w-full mt-2 sm:mt-10 md:mt-[140px] flex flex-col md:flex-row items-center">
                {/* Left image */}
                <div ref={imageRef}
                    className="z-10 w-full md:w-[40%] flex items-center justify-center">
                    <img
                        src="/img/faqpage/faq.png"
                        className="w-[50%] md:w-[30vw]"
                        loading="lazy"
                    />
                </div>

                {/* Right text */}
                <div ref={contentRef}
                    className="w-[60%] h-[240px] pt-10 md:ps-7 flex flex-col items-center md:items-start">
                    <div className="w-[100%] sm:w-[50%] md:w-[31%] lg:w-[210px] border-l-[3px] border-[#4C4886]">
                        <h1 className="text-[8vw] sm:text-[4vw] md:text-[2.4vw] lg:text-[28px] font-[400] text-[#0A1119] text-center">
                            Technical Faqs :
                        </h1>
                    </div>
                    <p className="text-[#666666] text-center md:text-start mt-4 w-[95vw] sm:w-[90vw] md:w-[50vw] xl:w-[630px] lg:h-[332px] text-[12px] font-[400]">
                        We are an IT Outsourcing company in Dubai offering an extended range of services 
                        including End User Support, Application Investment, Cloud &amp; Infrastructure 
                        expertise. Our on-demand IT staff Outsourcing solution in Dubai specializes exclusively 
                        for digital transformation with Custom Software Development, Software Testing &amp; QA,
                        Cloud Computing, Mobile &amp; Web Development, Maintenance &amp; Support, Blockchain 
                        Consulting, Data Science.
                    </p>
                    <p className="text-[#4C4886] font-[700] mt-4 text-center md:text-start w-[90vw] text-[12px]">
                        Cost-effective and Comprehensive IT Outsourcing Services:
                    </p>
                    <div className="w-[100%] lg:w-[94%] xl:w-[85%] relative z-[50] flex flex-col md:flex-row mt-4 lg:mt-2 items-center md:items-start justify-between gap-4 md:gap-0 p-4 ps-0 text-[3vw] sm:text-[1.7vw] md:text-[1vw]">
                        <ul className="flex flex-col items-center md:items-start  text-[10px] font-[600] text-[#666666] gap-2">
                            <h2 className="text-[#4C4886] font-[700] text-[16px]">Manage</h2>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Essential IT Support</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Basic Security &amp; Monitoring</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Limited Cloud Storage</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">24/7 Email Support</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col items-center md:items-start text-[10px] font-[600] text-[#666666] gap-2">
                            <h2 className="text-[#4C4886] text-center md:text-start font-[700] text-[16px]">Build</h2>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Advanced IT Support &amp; Maintenance</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Enhanced Security &amp; Threat Detection</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Increased Cloud Storage</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">24/7 Chat &amp; Email Support</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col items-center md:items-start text-[10px] font-[600] text-[#666666] gap-2">
                            <h2 className="text-[#4C4886] text-center md:text-start font-[700] text-[16px]">Gernal</h2>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Fully Managed IT Services</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Enterprise-Level Security &amp; Backups</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">Unlimited Cloud Storage &amp; Backups</a>
                            </li>
                            <li className="md:list-disc ms-[12px]">
                                <a href="#">24/7 Priority Support (Phone, Chat, Email)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;