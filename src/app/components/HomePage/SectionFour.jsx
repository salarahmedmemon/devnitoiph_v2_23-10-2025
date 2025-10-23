'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export const SectionFour = () => {
    // 1. refs
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let ctx = gsap.context(() => {
            // Heading 1
            gsap.from(h1Ref.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            // Heading 2
            gsap.from(h2Ref.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: h2Ref.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            // Button
            gsap.from(btnRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.6,
                scrollTrigger: {
                    trigger: btnRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div ref={containerRef} className="w-full h-[380px] sm:h-[640px] lg:h-[660px] xl:h-[621px] bg-[#EEEEEE] overflow-hidden relative">
            {/* RIGHT CIRCLE */}
            <div className='w-[140px] h-[140px] sm:w-[405.05px] sm:h-[405.05px] rounded-full bg-[#B7D2EF] absolute top-[-40px] right-[-40px] sm:top-[-140px] sm:right-[-180px] xl:right-[-10%] p-[2px]'>
                <div className='w-full h-full bg-gradient-to-b from-[#E7EBEE] to-[#EAECEE] rounded-full'></div>
            </div>

            {/* LEFT CIRCLE */}
            <div className='hidden sm:block w-[754px] h-[754px] rounded-full bg-[#FFF] absolute bottom-[-360px] left-[-270px] p-[2px]'>
                <div className='w-full h-full bg-gradient-to-b from-[#F3F4F5] to-[#F0F0F0] rounded-full'></div>
            </div>

            {/* MAIN HEADING */}
            <div className="flex flex-col items-center justify-center text-center">
                <h1 ref={h1Ref} className="w-[109px] h-[31px] sm:w-[198px] sm:h-[42px] text-[16px] sm:text-[32px] border-t-[3px] mt-[40px] sm:mt-[80px] border-[#4C4886]">Our Clients</h1>
                <p ref={h2Ref} className="z-[1000] font-[500] text-[12px] sm:text-[20px] text-[#333333] sm:pt-[20px]">We are ready to uplift your brand like many others in the past!</p>
            </div>

            {/* IMAGES */}
            <div className="w-[82%] mx-auto overflow-visible">

                <div className='overflow-x-hidden'>
                    <div className='w-full h-[200px] sm:min-h-[290px] sm:mt-[50px] flex items-center blur-edge'>
                        <div className="flex h-full items-center gap-5 w-max animate-slide">

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/accor.png' alt='image one' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/naugespa.png' alt='image two' loading='lazy'/>
                                </div>                                
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/jb.png' alt='image three' loading='lazy'/>
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/medisan.png' alt='image three' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px] flex items-center justify-center'>
                                    <img src='/img/homepage/sectionfour/ghol.png' alt='image four' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px] flex items-center justify-center'>
                                    <img src='/img/homepage/sectionfour/crosstex.png' alt='image five' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/accor.png' alt='image six' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/naugespa.png' alt='image seven' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/jb.png' alt='image eight' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px]'>
                                    <img src='/img/homepage/sectionfour/medisan.png' alt='image nine' loading='lazy' />
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px] flex items-center justify-center'>
                                    <img src='/img/homepage/sectionfour/ghol.png' alt='image ten' loading='lazy'/>
                                </div>
                            </div>

                            <div className='isolate w-[91px] h-[70px] sm:w-[200px] sm:h-[154px] bg-[#F5F5F5] z-[1000] flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.10),0_18px_10px_rgba(0,0,0,0.09),0_40px_24px_rgba(0,0,0,0.05),0_72px_29px_rgba(0,0,0,0.01),0_112px_31px_rgba(0,0,0,0)]'>
                                <div className='w-[112px] h-[83px] flex items-center justify-center'>
                                    <img src='/img/homepage/sectionfour/crosstex.png' alt='image eleven' loading='lazy'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* BUTTON */}
            <div className='flex justify-center'>
                <button className='w-[91px] h-[33px] sm:w-[220px] sm:h-[46px] rounded-[4px] sm:rounded-[5px] bg-[#4C4886] font-[500] sm:mt-[30px] text-[14px] sm:text-[20px] text-[#fff] relative group'>Read More
                    <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-300 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
                </button>
            </div>
        </div>
    );
};