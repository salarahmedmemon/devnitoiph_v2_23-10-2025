"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFive = () => {
    const titleRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        // Title from Left
        gsap.fromTo(
            titleRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        // Form from Right
        gsap.fromTo(
            formRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="w-full h-[802px] bg-[#EEEEEE] relative overflow-hidden">
            {/* //? RIGHT CIRCLE */}
            <div className='w-[180px] sm:w-[300px] lg:w-[405.06px] h-[180px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[16px] xl:top-[-14px] sm:right-[-150px] lg:right-[-200px] xl:right-[-6vw] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* //? Left Circle */}
            <div className="w-[96vw] h-[96vw] sm:w-[60vw] sm:h-[60vw] md:w-[45vw] md:h-[45vw] lg:w-[754px] lg:h-[754px] bg-white rounded-full absolute bottom-[-10vw] md:bottom-[-15vw] left-[-24vw] sm:left-[-20vw] md:left-[-10vw] p-1">
                <div className="w-full h-full bg-[#EEEEEE] rounded-full"></div>
            </div>

            {/*  //? TITLE */}
            <div ref={titleRef} className="title relative text-center mt-[26px] mb-4">
                {/* <div className="w-[60vw] sm:w-[35vw] md:w-[22vw] h-[.8vw] sm:h-[.3vw] md:h-[.2vw] bg-[#4C4886] absolute left-1/2 -translate-x-1/2 top-[5vw] sm:top-[20%] md:top-[18%]"></div> */}
                <h1 className="w-[240px] sm:w-[360px] mx-auto text-2xl sm:text-3xl md:text-4xl border-t-[3px] border-[#4C4886]">
                    Ask For The Custom
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#4C4886] font-semibold">
                    Service And Package
                </h2>
            </div>

            {/*  //? Form */}
            <form
                ref={formRef}
                className="form w-full md:w-[80%] lg:w-[900px] mx-auto flex flex-wrap gap-8 p-4 mt-[40px] lg:mt-[100px] relative z-[100]"
            >
                <input
                    className="w-full md:w-[830px] lg:w-[400px] h-[54px] lg:h-[64px] rounded-lg ps-4 border-[2px] text-[22px] border-[#AAAAAA] text-[#AAAAAA]"
                    placeholder="Enter Your Email:"
                    type="text"
                />
                <input
                    className="w-full md:w-[830px] lg:w-[400px] h-[54px] lg:h-[64px] rounded-lg ps-4 border-[2px] text-[22px] border-[#AAAAAA] text-[#AAAAAA]"
                    placeholder="Enter Your Phone No:"
                    type="text"
                />

                <input
                    className="z-10 w-full md:w-[830px] lg:w-[400px] h-[54px] lg:h-[64px] rounded-lg ps-4 border-[2px] text-[22px] border-[#AAAAAA] text-[#AAAAAA]"
                    placeholder="Select Package:"
                    type="text"
                />
                
                    <input
                        className="w-full md:w-[830px] lg:w-[400px] h-[54px] lg:h-[64px] rounded-lg ps-4 border-[2px] text-[22px] border-[#AAAAAA] text-[#AAAAAA]"
                        placeholder="Date: 20/Feb/2025"
                        type="text"
                    />
                    
                    <textarea
                        className="z-10 w-full md:w-[830px] h-[165px] rounded-lg ps-4 border-[2px] text-[22px] border-[#AAAAAA] text-[#AAAAAA]"
                        placeholder="Enter Your Messages:"
                    ></textarea>
                    
                    <div className="z-10 w-full md:w-[830px] flex items-start">
                        <button className="w-full md:w-[180px] h-[50px] text-[22px] bg-[#4C4886] mb-[30px] text-white rounded-lg font-semibold border-2 border-[#ACACAD]">
                            Send Message
                        </button>
                    </div>
            </form>
        </div>
    );
};

export default SectionFive;