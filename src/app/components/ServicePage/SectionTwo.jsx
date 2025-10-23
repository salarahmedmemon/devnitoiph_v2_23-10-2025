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
            className="w-full h-[782px] bg-[#EEEEEE] pt-10 overflow-hidden relative"
        >
           {/* RIGHT CIRCLE */}
            <div className='w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[-140px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>
            {/* LEFT CIRCLE */}
            <div className="bg-white w-[50vw] h-[50vw] rounded-full p-1 absolute bottom-[-14vw] left-[-10vw]">
                <div className="w-full h-full rounded-full bg-[#EEEEEE]"></div>
            </div>

            {/* Heading */}
            <div ref={headingRef} className="relative z-[50] mx-auto">
                <div className="w-[60%] sm:w-[40%] md:w-[24%] mx-auto border-t-4 border-[#4C4886]">
                    <h1 className="text-[6vw] sm:text-[4vw] md:text-[2.4vw] text-center">
                        Services We Offering
                    </h1>
                </div>
                <h2 className="text-[7vw] sm:text-[5vw] md:text-[3vw] text-center text-[#4C4886] font-semibold">
                    Certified of Excellence
                </h2>
            </div>

            {/* Main content */}
            <div className="w-full mt-[60px] flex flex-col md:flex-row items-center">
                {/* Left image */}
                <div ref={imageRef}
                    className="z-10 w-full md:w-[40%] h-full flex items-center justify-center">
                    <img
                        src="/img/servicepage/sectionone/image02.png"
                        className="w-[80vw] sm:w-[60vw] md:w-[30vw]" loading="lazy"
                    />
                </div>

                {/* Right text */}
                <div ref={contentRef}
                    className="w-[60%] h-full pt-10 md:ps-7 flex flex-col items-center md:items-start">
                    <div className="w-[80%] sm:w-[45%] md:w-[24%] border-l-4 border-[#4C4886]">
                        <h1 className="text-[8vw] sm:text-[4vw] md:text-[2.4vw] text-center">
                            Our Services
                        </h1>
                    </div>
                    <p className="text-gray-500 text-center md:text-start mt-4 w-[95vw] sm:w-[90vw] md:w-[50vw] text-[3vw] sm:text-[2.4vw] md:text-[1.2vw]">
                        when you land on a sample webpage or open an email template and see
                        content beginning with "lorem ipsum", the page creator placed that
                        apparent gibberish there on purpose. Page layout looks artists use
                        lorem ipsum, also known as placeholder copy.
                    </p>
                    <p className="text-[#4C4886] font-semibold mt-4 text-center md:text-start w-[90vw] text-[3.2vw] sm:text-[2.4vw] md:text-[1.4vw]">
                        Cost-effective and Comprehensive IT Outsourcing Services:
                    </p>
                    <div className="w-[90vw] relative z-[50] md:w-full flex flex-col sm:flex-row mt-4 items-center md:items-start justify-between gap-4 md:gap-0 p-4 text-[3vw] sm:text-[1.7vw] md:text-[1vw]">
                        <ul className="flex flex-col gap-2">
                            <li className="list-disc">
                                <a href="#">Hire Mobile App Developer</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Scrum Master in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire AWS Resources in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire QA Resources in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Node.js Developer in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Azure Developer in Dubai</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="list-disc">
                                <a href="#">Hire Mobile App Developer</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Scrum Master in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire AWS Resources in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire QA Resources in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Node.js Developer in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Azure Developer in Dubai</a>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="list-disc">
                                <a href="#">Hire Mobile App Developer</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Scrum Master in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire AWS Resources in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire QA Resources in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Node.js Developer in Dubai</a>
                            </li>
                            <li className="list-disc">
                                <a href="#">Hire Azure Developer in Dubai</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;