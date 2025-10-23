"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour = () => {
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const barsRef = useRef([]);

    useEffect(() => {
        // LEFT CONTENT ANIMATION
        gsap.fromTo(
            contentRef.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        // RIGHT IMAGE ANIMATION
        gsap.fromTo(
            imageRef.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        // PROGRESS BAR ANIMATIONS
        barsRef.current.forEach((bar) => {
            const finalWidth = bar.getAttribute("data-width");

            gsap.fromTo(
                bar,
                { width: "0%" },
                {
                    width: finalWidth,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: bar,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="w-full h-[788px] flex flex-col-reverse md:flex-row items-center justify-center bg-[#EEEEEE] relative overflow-hidden pt-[100px] md:pt-0">
            {/* Background Circles */}
            <div className="flex w-[30vw] h-[30vw] rounded-full p-[2px] bg-[#BFD6EF] absolute top-[-12vw] right-[-12vw] items-center justify-center">
                <div className="w-full h-full bg-[#E8EBEE] rounded-full"></div>
            </div>
            <div className="flex w-[40vw] h-[40vw] rounded-full p-[2px] bg-[#FFFFFF] absolute bottom-[-10vw] left-[-12vw] items-center justify-center">
                <div className="w-full h-full bg-[#E8EBEE] rounded-full"></div>
            </div>

            {/* LEFT CONTENT */}
            <div
                ref={contentRef}
                className="z-[1000] w-full md:w-[60%] h-full pt-0 p-4 sm:pt-6 md:p-20 text-center md:text-start md:pt-[160px]"
            >
                <h3 className="text-[4.5vw] sm:text-[3vw] md:text-lg">About Our Services</h3>
                <h1 className="text-[#4C4886] text-[5vw] sm:text-[4vw] md:text-[2.6vw] font-semibold">
                    Providing Your Business With A Quality IT Service Is Our Passion
                </h1>
                <p className="text-gray-500 mt-[3vw] sm:mt-[2vw] text-[3vw] sm:text-lg w-[95%]">
                    lorem ipsum is simply dummy text of the printing and typesetting
                    industry. lorem ipsum has been the industry's standard dummy text
                    over since the 1500s.
                </p>

                {/* Progress Bars */}
                {[
                    { title: "consulting", width: "90%" },
                    { title: "cloud solution", width: "75%" },
                    { title: "it service", width: "100%" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`w-full md:w-[35vw] ${index === 0 ? "mt-[3vw]" : "mt-[1vw]"
                            } mx-auto md:mx-0`}
                    >
                        <div className="flex items-center justify-between">
                            <span>{item.title}</span>
                            <span>{item.width}</span>
                        </div>
                        <div className="w-full h-[10px] bg-[#AAAAAA] mt-2 rounded-full overflow-hidden">
                            <div
                                ref={(el) => (barsRef.current[index] = el)}
                                data-width={item.width}
                                className="h-full bg-[#4C4886] rounded-full"
                            ></div>
                        </div>
                    </div>
                ))}

                <button className="bg-[#4C4886] text-white mt-10 w-[100%] text-[20px] md:w-[30%] px-5 py-[.6vw] rounded-lg">
                    learn more
                </button>
            </div>

            {/* RIGHT CONTENT (Image) */}
            <div
                ref={imageRef}
                className="z-1000 w-full md:w-[40%] flex items-center justify-center mb-[30px] md:mb-0"
            >
                <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] relative rounded-lg overflow-hidden group">
                    <img
                        src="/img/servicepage/sectionfour/image.png"
                        className="w-full h-full rounded-lg object-cover"
                        alt="Service" loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#0a131c9b] flex items-center justify-center 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[#11AAEE] text-xl sm:text-2xl font-semibold">
                            Video Animation
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;