'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const circleRefsDesktop = useRef([]);
    const circleRefsMobile = useRef([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // Headings
            gsap.fromTo(
                h1Ref.current,
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: h1Ref.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                h2Ref.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: h2Ref.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Circle animation setup
            const setupCircleAnimation = (circleArray) => {
                let activeIndex = null;

                const animateRandomCircle = () => {
                    const allCircles = circleArray.filter(Boolean);
                    if (allCircles.length === 0) return;

                    // hide previous
                    if (activeIndex !== null && allCircles[activeIndex]) {
                        gsap.to(allCircles[activeIndex], {
                            scale: 0,
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.inOut",
                        });
                    }

                    // pick new one
                    let newIndex = activeIndex;
                    while (newIndex === activeIndex) {
                        newIndex = Math.floor(Math.random() * allCircles.length);
                    }
                    activeIndex = newIndex;

                    if (!allCircles[newIndex]) return; // ✅ safety check
                    gsap.fromTo(
                        allCircles[newIndex],
                        { scale: 0, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.4,
                            ease: "back.out(1.7)",
                        }
                    );
                };

                const interval = setInterval(animateRandomCircle, 4500);

                // ✅ cleanup correctly
                return () => clearInterval(interval);
            };

            // Run for both groups
            const cleanupDesktop = setupCircleAnimation(circleRefsDesktop.current);
            const cleanupMobile = setupCircleAnimation(circleRefsMobile.current);

            // ✅ cleanup both on unmount
            return () => {
                cleanupDesktop?.();
                cleanupMobile?.();
            };
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="projects w-full h-[856px] sm:h-[790px] lg:h-[980px] relative bg-[#0A131C] pt-[15px] sm:pt-[20px] lg:pt-[58px] overflow-hidden">
            {/* Background image (sharp outside, blurred inside glass) */}
            {/* RIGHT LOGO */}
            <img src="/img/aboutpage/sectionthree/rightlogo.png" className='right-image-logo block w-[60px] sm:w-[80px] md:w-[100px] lg:w-[144px] absolute top-[14px] lg:top-[40px] left-[85%] rotate-50' />
            {/* LEFT LOGO */}
            <img src="/img/aboutpage/sectionthree/leftlogo.png" className='left-image-logo block w-[80px] sm:w-[100px] md:w-[120px] lg:w-[200px] absolute bottom-0 lg:bottom-[26px] left-[2%] lg:left-[1%] rotate-y-140 rotate-100' />


            {/* Main glass box */}
            <div className="main-glass w-[96%] md:w-[88%] mx-auto h-[826px] sm:h-[740px] lg:h-[800px] xl:h-[800px] rounded-[5px] xl:rounded-[26px] border-2 xl:border border-[#4279E8]/40
                            backdrop-blur-xl opacity-96
                            shadow-[0_8px_26px_rgba(0,0,0,0.6)]
                            relative overflow-hidden">
                {/* No extra logo needed inside */}
            </div>

            {/* MAIN CONTENT */}
            <div className="main-content w-[403px] sm:w-[90%] md:w-[90%] h-[873px] rounded-[26px] absolute top-[-24px] left-1/2 -translate-x-1/2 mt-[58px] z-1000">
                {/* HEADING */}
                <div className="w-[76px] h-[39px] sm:w-[120px] lg:w-[169px] sm:h-[90px] mx-auto text-center md:mt-0  lg:mt-[100px] border-t-[3px] border-[#77CCF3]">
                    <h1 ref={h1Ref} className="font-500 text-[12px] sm:text-[18px] lg:text-[22px] text-[#FFFFFF]">Our Work</h1>
                    <h2 ref={h2Ref} className="text-[#77CCF3] text-[16px] sm:text-[20px] lg:text-[26px] font-600">Portfolio</h2>
                </div>

                {/* PROJECTS SHOWCASE FOR DESKTOP */}
                <div className="desktop-projects w-[94%] hidden lg:flex mx-auto lg:mt-[50px] flex-wrap md:gap-[8px]">
                    {/* PROJECT ONE */}
                    <div className="project-one w-[20%] h-[260px] lg:h-[350px] p-[2px] gradient-border group">

                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectone.png')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefsDesktop.current[0] = el)}
                                className="w-[10vw] sm:w-[5vw] lg:w-[80px] h-[10vw] sm:h-[5vw] lg:h-[80px] rounded-full bg-[#ebebeb46] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>


                            {/* OVERLAY */}
                            <div className="w-0 h-0 bg-black absolute bottom-0 right-0 pt-[50px] opacity-0 transition-all duration-500 ease-in-out rounded-tl-full group-hover:w-full group-hover:h-[238px] group-hover:opacity-80">
                                <h3 className="font-500 text-[18px] xl:text-[20px] text-[#FFFFFF] absolute right-[8px] xl:right-[14px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[5px] xl:right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] text-[#CCCCCC] absolute lg:left-[36px] xl:left-[50px] mt-[68px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT TWO */}
                    <div className="project-two w-[40%] h-[150px] lg:h-[190px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projecttwo.jpg')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefsDesktop.current[1] = el)}
                                className="w-[10vw] sm:w-[5vw] lg:w-[80px] h-[10vw] sm:h-[5vw] lg:h-[80px] rounded-full bg-[#ebebeb46] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0
                    transition-all duration-500 ease-in-out
                    group-hover:w-[54%] group-hover:h-full group-hover:opacity-80
                    bg-[#000] rounded-tl-full pt-[40px] xl:pt-[50px] ">

                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[8px] xl:right-[24px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[5px] xl:right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] xl:w-[90%] text-[8px] text-right text-[#CCCCCC] absolute left-[30px] xl:left-[10px] mt-[54px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT THREE */}
                    <div className="project-three w-[38%] h-[260px] lg:h-[350px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectthree.jpg')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefsDesktop.current[2] = el)}
                                className="w-[10vw] sm:w-[5vw] lg:w-[80px] h-[10vw] sm:h-[5vw] lg:h-[80px] rounded-full bg-[#ebebeb46] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            {/* OVERLAY */}
                            <div className="w-0 h-0 group-hover:w-[70%] xl:group-hover:w-[55%] group-hover:h-[70%] bg-[#000] absolute bottom-0 right-0 opacity-0
                    transition-all duration-500 ease-in-out pt-[80px] xl:pt-[50px] group-hover:opacity-80 rounded-tl-full">
                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[30px] xl:right-[14px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] xl:text-[10px] text-[#CCCCCC] absolute left-[50px] mt-[68px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT FOUR */}
                    <div className="project-four w-[20%] h-[130px] lg:h-[200px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfour.png')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefsDesktop.current[3] = el)}
                                className="w-[10vw] sm:w-[5vw] lg:w-[80px] h-[10vw] sm:h-[5vw] lg:h-[80px] rounded-full bg-[#ebebeb46] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            {/* OVERLAY */}
                            <div className="overlay w-0 h-0 group-hover:w-[70%] group-hover:h-[80%] bg-[#000] absolute bottom-0 right-0 pt-[50px] xl:pt-[40px] group-hover:opacity-[80%] rounded-tl-full opacity-0
                    transition-all duration-500 ease-in-out">
                                <h3 className="font-[500] text-[10px] xl:text-[12px] text-[#FFFFFF] absolute right-[20px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[7px] xl:text-[9px] mt-[16px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] xl:w-[90%] text-[5px] xl:text-[8px] text-[#CCCCCC] absolute left-[20px] xl:left-[21px] mt-[34px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi.</p>
                                <span className="text-[6px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[6px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT FIVE */}
                    <div className="project-five w-[40%] h-[240px] lg:h-[360px] p-[2px] mt-[-110px] lg:mt-[-160px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfive.jpg')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefsDesktop.current[4] = el)}
                                className="w-[10vw] sm:w-[5vw] lg:w-[80px] h-[10vw] sm:h-[5vw] lg:h-[80px] rounded-full bg-[#ebebeb46] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0
                    transition-all duration-500 ease-in-out
                    group-hover:w-[70%] group-hover:h-[80%] group-hover:opacity-80
                    bg-[#000] rounded-tl-full pt-[80px]">

                                <h3 className="font-[500] text-[20px] text-[#FFFFFF] absolute right-[30px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[90%] xl:w-[80%] text-[10px] xl:text-[12px] text-right text-[#CCCCCC] absolute left-[10px] xl:left-[50px] mt-[80px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                    {/* PROJECT SIX */}
                    <div className="project-six w-[38%] lg:h-[200px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectsix.png')] bg-cover bg-center relative">
                            <div
                                ref={(el) => (circleRefsDesktop.current[5] = el)}
                                className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-14 sm:top-2 right-14 sm:right-5 flex items-center justify-center opacity-0 scale-0"
                            >
                                <div className="w-full h-full rounded-full bg-white"></div>
                            </div>
                            {/* OVERLAY */}
                            <div className="w-0 h-0 group-hover:w-[50%] group-hover:h-full bg-[#000] absolute bottom-0 right-0 opacity-0
                    transition-all duration-500 ease-in-out pt-[46px] group-hover:opacity-80 rounded-tl-full">
                                <h3 className="font-[500] text-[18px] xl:text-[20px] text-[#FFFFFF] absolute right-[8px] xl:right-[14px]">Printing Media</h3>
                                <h4 className="text-[#1AE4FA] text-[12px] mt-[24px] xl:mt-[30px] absolute right-[14px]">Short Detail Here</h4>
                                <p className="w-[80%] text-[8px] text-[#CCCCCC] absolute left-[36px] xl:left-[50px] mt-[50px] xl:mt-[55px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] left-[18px]">Visit Main Link</span>
                                <span className="text-[10px] text-[#CCCCCC] absolute bottom-[16px] right-[18px]">More Info</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECTS SHOWCASE FOR MOBILE */}
                <div className="flex justify-center lg:hidden w-[84.5%] mx-auto mt-[16px] sm:mt-0 gap-[6px] sm:gap-[10px] flex-wrap">
                    {/* PROJECT ONE */}
                    <div className="project-one w-[80%] h-[119px] sm:w-[33%] sm:h-[280px] p-[2px] gradient-border group">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectone.png')] bg-cover bg-center relative">
                            <div
                            ref={(el) => (circleRefsMobile.current[0] = el)}
                            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-[4%] right-[2%] flex items-center justify-center opacity-0 scale-0"
                            >
                            <div className="w-full h-full rounded-full bg-white"></div>
                            </div>

                            {/* OVERLAY */}
                            <div className="group-hover:w-[60%] sm:group-hover:w-full group-hover:h-full sm:group-hover:h-[80%] md:group-hover:h-[200px] bg-[#000] absolute bottom-0 right-0 pt-[50px] group-hover:opacity-80 rounded-tl-full w-0 h-0 opacity-0 transition-all duration-500 ease-in-out z-10">
                            <h3 className="font-[500] text-[12px] text-[#FFFFFF] absolute top-[10px] sm:top-[40px] right-[14px]">Printing Media</h3>
                            <h4 className="text-[#1AE4FA] text-[8px] absolute top-[26px] sm:top-[56px] right-[14px]">Short Detail Here</h4>
                            <p className="w-[76%] sm:w-[80%] md:w-[80%] text-[6px] md:text-[8px] text-[#CCCCCC] absolute top-[40px] sm:top-[80px] right-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.</p>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] left-[40px] sm:left-[30px]">Visit Main Link</span>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] right-[10px]">More Info</span>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT TWO */}
                    <div className="project-two w-[80%] h-[119px] sm:w-[64%] sm:h-[160px] p-[2px] gradient-border group overflow-hidden">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projecttwo.jpg')] bg-cover bg-center relative">
                            <div
                            ref={(el) => (circleRefsMobile.current[1] = el)}
                            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-[4%] right-[2%] flex items-center justify-center opacity-0 scale-0"
                            >
                            <div className="w-full h-full rounded-full bg-white"></div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute bottom-0 right-0 pt-[50px] bg-[#000] rounded-tl-full w-0 h-0 opacity-0 z-10 transition-all duration-500 ease-in-out 
                                            group-hover:w-[60%] sm:group-hover:w-[70%] md:group-hover:w-[50%] group-hover:h-full sm:group-hover:h-full group-hover:opacity-80">
                            <h3 className="font-[500] text-[12px] text-[#FFFFFF] absolute top-[10px] sm:top-[40px] right-[14px]">Printing Media</h3>
                            <h4 className="text-[#1AE4FA] text-[8px] absolute top-[26px] sm:top-[56px] right-[14px]">Short Detail Here</h4>
                            <p className="w-[76%] sm:w-[80%] md:w-[80%] text-[6px] md:text-[8px] text-[#CCCCCC] absolute top-[40px] sm:top-[80px] right-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.
                            </p>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] left-[40px] sm:left-[30px]">Visit Main Link</span>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] right-[10px]">More Info</span>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT THREE */}
                    <div className="project-three w-[80%] h-[119px] sm:w-[33%] sm:h-[120px] p-[2px] gradient-border group overflow-hidden relative">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfour.png')] bg-cover bg-center relative">
                            <div
                            ref={(el) => (circleRefsMobile.current[2] = el)}
                            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-[4%] right-[2%] flex items-center justify-center opacity-0 scale-0"
                            >
                            <div className="w-full h-full rounded-full bg-white"></div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0 bg-black rounded-tl-full pt-[50px] z-10 transition-all duration-500 ease-in-out
                                            group-hover:w-[60%] sm:group-hover:w-full md:group-hover:w-[96%] group-hover:h-full sm:group-hover:h-full group-hover:opacity-80">
                            <h3 className="font-[500] text-[12px] text-white absolute top-[10px] sm:top-[10px] right-[14px]">
                                Printing Media
                            </h3>
                            <h4 className="text-[#1AE4FA] text-[8px] absolute top-[26px] sm:top-[26px] right-[14px]">
                                Short Detail Here
                            </h4>
                            <p className="w-[76%] sm:w-[80%] md:w-[80%] text-[6px] md:text-[8px] text-[#CCCCCC] absolute top-[40px] sm:top-[40px] right-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.
                            </p>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] left-[40px] sm:left-[30px]">
                                Visit Main Link
                            </span>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] right-[10px]">
                                More Info
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT FOUR */}
                    <div className="project-four w-[80%] h-[119px] sm:w-[64%] sm:h-[240px] sm:mt-[-120px] p-[2px] gradient-border group overflow-hidden relative">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectthree.jpg')] bg-cover bg-center relative">
                            <div
                            ref={(el) => (circleRefsMobile.current[3] = el)}
                            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-[4%] right-[2%] flex items-center justify-center opacity-0 scale-0"
                            >
                            <div className="w-full h-full rounded-full bg-white"></div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0 bg-black rounded-tl-full pt-[50px] z-10 transition-all duration-500 ease-in-out
                                            group-hover:w-[60%] group-hover:h-full sm:group-hover:h-[80%] md:group-hover:h-[200px] group-hover:opacity-80">
                            <h3 className="font-[500] text-[12px] text-white absolute top-[10px] sm:top-[40px] right-[14px]">
                                Printing Media
                            </h3>
                            <h4 className="text-[#1AE4FA] text-[8px] absolute top-[26px] sm:top-[56px] right-[14px]">
                                Short Detail Here
                            </h4>
                            <p className="w-[76%] sm:w-[80%] md:w-[80%] text-[6px] md:text-[8px] text-[#CCCCCC] absolute top-[40px] sm:top-[80px] right-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.
                            </p>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] left-[40px] sm:left-[30px]">
                                Visit Main Link
                            </span>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] right-[10px]">
                                More Info
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT FIVE */}
                    <div className="project-five w-[80%] h-[119px] sm:w-[49%] sm:h-[185px] sm:mt-0 p-[2px] gradient-border group overflow-hidden relative">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectsix.png')] bg-cover bg-center relative">
                            <div
                            ref={(el) => (circleRefsMobile.current[4] = el)}
                            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-[4%] right-[2%] flex items-center justify-center opacity-0 scale-0"
                            >
                            <div className="w-full h-full rounded-full bg-white"></div>
                            </div>

                            {/* OVERLAY */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0 bg-black rounded-tl-full pt-[50px] z-10 transition-all duration-500 ease-in-out
                                            group-hover:w-[60%] sm:group-hover:w-full md:group-hover:w-[80%] group-hover:h-full sm:group-hover:h-full group-hover:opacity-80">
                            <h3 className="font-[500] text-[12px] text-white absolute top-[10px] sm:top-[40px] right-[14px]">
                                Printing Media
                            </h3>
                            <h4 className="text-[#1AE4FA] text-[8px] absolute top-[26px] sm:top-[56px] right-[14px]">
                                Short Detail Here
                            </h4>
                            <p className="w-[76%] sm:w-[80%] md:w-[80%] text-[6px] md:text-[8px] text-[#CCCCCC] absolute top-[40px] sm:top-[80px] right-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.
                            </p>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] left-[40px] sm:left-[30px]">
                                Visit Main Link
                            </span>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] right-[10px]">
                                More Info
                            </span>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT SIX */}
                    <div className="project-six w-[80%] h-[119px] sm:w-[48%] sm:h-[185px] sm:mt-0 p-[2px] gradient-border group overflow-hidden relative">
                        <div className="w-full h-full bg-[url('/img/homepage/sectionthree/projectfive.jpg')] bg-cover bg-center relative">
                            <div
                            ref={(el) => (circleRefsMobile.current[5] = el)}
                            className="w-[10vw] sm:w-[5vw] h-[10vw] sm:h-[5vw] rounded-full bg-[#ebebeb46] p-2 absolute top-[4%] right-[2%] flex items-center justify-center opacity-0 scale-0"
                            >
                            <div className="w-full h-full rounded-full bg-white"></div>
                            </div>

                            {/* ✅ FIXED OVERLAY */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 opacity-0 bg-black rounded-tl-full pt-[50px] z-10 transition-all duration-500 ease-in-out
                                            group-hover:w-[60%] sm:group-hover:w-full md:group-hover:w-[80%] group-hover:h-full sm:group-hover:h-full group-hover:opacity-80">
                            <h3 className="font-[500] text-[12px] text-white absolute top-[10px] sm:top-[40px] right-[14px]">
                                Printing Media
                            </h3>
                            <h4 className="text-[#1AE4FA] text-[8px] absolute top-[26px] sm:top-[56px] right-[14px]">
                                Short Detail Here
                            </h4>
                            <p className="w-[76%] sm:w-[80%] md:w-[80%] text-[6px] md:text-[8px] text-[#CCCCCC] absolute top-[40px] sm:top-[80px] right-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi praesentium? Doloremque excepturi sit eaque exercitationem officiis, eligendi quasi nam ea dolore.
                            </p>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] left-[40px] sm:left-[30px]">
                                Visit Main Link
                            </span>
                            <span className="text-[7px] sm:text-[6px] text-[#CCCCCC] absolute bottom-[8px] right-[10px]">
                                More Info
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;