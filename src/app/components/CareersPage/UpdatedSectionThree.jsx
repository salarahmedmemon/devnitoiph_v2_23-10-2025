"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    // 1. states/hook variables
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Title animation
            gsap.from(".section-three-title", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".section-three-title",
                    start: "top 80%",
                },
            });

            // Projects animation alternating left/right
            gsap.utils.toArray(".project-card").forEach((card, i) => {
                gsap.from(card, {
                    x: i % 2 === 0 ? -150 : 150,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        { img: "/img/careerspage/sectionthree/image01.png" },
        { img: "/img/careerspage/sectionthree/image02.png" },
        { img: "/img/careerspage/sectionthree/image03.png" },
        { img: "/img/careerspage/sectionthree/image04.png" },
    ];




    return (
        <div ref={sectionRef} className="projects updatedsectionthree w-full h-[1360px] sm:h-[1100px] lg:h-[700px] relative bg-[#0A131C] pt-[15px] sm:pt-[20px] lg:pt-[58px] overflow-hidden">
            {/* RIGHT LOGO */}
            <img
                src="/img/aboutpage/sectionthree/rightLogo.png"
                className="w-[80px] sm:w-[100px] md:w-[140px] absolute right-image-logo top-[6px] right-[4px] md:right-[20px] xl:right-[36px]" loading="lazy"
            />
            {/* LEFT LOGO */}
            <img src="/img/aboutpage/sectionthree/leftLogo.png"
                className='left-image-logo block w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] absolute bottom-[30px] sm:bottom-[0px] md:bottom-[10px] left-0 md:left-[16px] xl:left-[36px]' />

            {/* Main glass box */}
            <div className="main-glass updatedsectionthreeglass w-[96%] md:w-[94%] mx-auto h-[97%] lg:h-[94%] rounded-[5px] xl:rounded-[26px] border-2 xl:border border-[#4279E8]/40
                            backdrop-blur-xl opacity-96
                            shadow-[0_8px_26px_rgba(0,0,0,0.6)]
                            relative overflow-hidden">
                {/* No extra logo needed inside */}
            </div>

            {/* MAIN CONTENT */}
            <div className="main-content w-[403px] sm:w-[90%] md:w-[90%] h-[96%] rounded-[26px] absolute top-[-24px] left-1/2 -translate-x-1/2 mt-[58px] z-1000">
                {/* Heading */}
                <h1 className="w-[160px] md:w-[260px] mx-auto mt-[40px] lg:mt-[60px] text-2xl sm:text-3xl md:text-4xl text-center border-t-[3px] border-[#71C1E6] text-white">
                    See Our
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-[#71C1E6] font-bold">
                    Latest Blog
                </h2>

                <div className="w-full mt-[20px] grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#FA1AC2] via-[#11AAEE] to-[#1CDE63] 
                            project-card group w-[260px] mx-auto sm:mx-0 sm:w-full h-[270px] sm:h-[400px] sm:mt-6
                            gradient-border rounded-lg relative overflow-hidden  
                            p-[2px] md:p-[3px] cursor-pointer"
                        >

                            <div className="w-full h-full bg-[#0A131C] rounded-lg flex flex-col items-center justify-center 
                            p-[5px] xl:p-[10px]">

                                <div className="w-full h-full">
                                    <div className="w-full h-[130px] sm:h-[200px] md:h-[180px] lg:h-[190px] xl:h-[200px]">
                                        <img
                                            src={project.img} loading="lazy"
                                            className="w-full h-full transition-all duration-500 group-hover:opacity-30 rounded-t-lg"
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-full mt-[10px]">
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center justify-between gap-[3px] text-white">
                                            <img src="/img/careerspage/author.png" className="w-[3vw] lg:w-[20px]" loading="lazy" />
                                            <span className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">|</span>
                                            <span className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">Author</span>
                                        </span>
                                        <span className="flex items-center justify-between gap-[3px] text-white">
                                            <img src="/img/careerspage/image06.png" className="w-[3vw] lg:w-[20px]" loading="lazy" />
                                            <span className="text-[8px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">|</span>
                                            <span className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[12px] xl:text-[14px]">1 Jan 2025</span>
                                        </span>
                                    </div>
                                    <h4 className="w-[100%] xl:w-[200px] font-semibold text-[14px] md:text-[18px] lg:text-[16px] text-white mt-[10px] sm:mt-[17px]">Few Words "Can Refer To A Phrase"</h4>
                                    <p className="text-[#928D9B] text-[12px] md:text-[16px] lg:text-[14px] mt-[6px] sm:mt-[14px]">Lorem ipsum is simply dummy text</p>
                                    <button className="bg-white text-[#755E9D] w-[67px] h-[24px] sm:w-[70px] sm:h-[22px] rounded-[3px] text-[12px] mt-[14px]">Read More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionThree;