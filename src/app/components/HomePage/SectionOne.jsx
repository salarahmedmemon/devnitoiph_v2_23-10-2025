"use client";

import Header from "../Header";
import { useContext, useLayoutEffect, useRef } from "react";
import { LoadContext } from "../ClientWrapper";
import Image from 'next/image';
import gsap from "gsap";

const SectionOne = () => {
    // 1. states/hook variables
    const { loaded } = useContext(LoadContext);
    const sectionRef = useRef();

    useLayoutEffect(() => {
        if (!loaded || !sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power3.out" }
            )
            gsap.from(".animate-text", {
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [loaded]);



    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div ref={sectionRef} className="w-full h-[240px] sm:h-[550px] md:h-[600px] lg:h-[640px] xl:h-[731px] bg-gradient-to-b from-[#31365C] to-[#0A131C] pt-[8px] sm:pt-[36.54px] overflow-hidden opacity-0">
            <div className="z-[9999]">
                <Header />
            </div>

            <div className="relative mx-auto homepage-section-one lg:flex lg:justify-between">
                <div className="z-[1000] w-[154px] h-[158px] sm:w-[420px] sm:h-[391px] text-center lg:text-start absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:ms-[80px] text-white mt-[14px] sm:mt-[30px] md:mt-[50px] lg:mt-[70px] xl:mt-[113.46px]">
                    <button className="animate-text w-full h-[30px] sm:w-[314px] sm:h-[66px] lg:w-[275px] xl:w-[314px]  rounded-[10px] bg-white text-[#4C4886] font-[600] text-[20px] sm:text-[44px] lg:text-[40px] xl:text-[44px] ">CONNECTING</button>
                    <h1 className="animate-text font-[600] text-[34px] sm:text-[66px] md:text-[74px] xl:text-[92px] pt-[26px] sm:pt-0 leading-[10px] sm:leading-[100px] xl:leading-[100px]">BRANDS</h1>
                    <span className="animate-text font-[300] text-[16px] sm:text-[30px] md:text-[40px] lg:text-[36] xl:text-[56px] leading-[40px] sm:leading-[20px] xl:leading-[55px]">WITH</span>
                    <h2 className="animate-text font-[500] text-[16px] sm:text-[34px] md:text-[36px] lg:text-[32px] xl:text-[44px] leading-0 sm:leading-[60px] xl:leading-[55px]">GLOBAL AUDIENCES</h2>
                    <button className="animate-text w-[121px] h-[29px] sm:w-[240px] xl:w-[220px] sm:h-[46px] bg-white rounded-[5px] text-[#4C4886] font-[600] text-[12px] sm:text-[24px] xl:text-[20px] mt-[20px] sm:mt-[40px] xl:mt-[89px] relative group">Talk to our expert
                        <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-200 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
                    </button>
                </div>

                <div className="images z-0 w-[400px] md:w-[600px] h-[600px] mx-auto relative lg:mt-[19.54px] lg:me-[80px] ps-[32px] overflow-hidden">

                    <div className="block lg:hidden w-[98%] h-full bg-gradient-to-b from-[#31365C]/40 to-[#0A131C]/40 absolute top-0 z-[90]"></div>

                    {/* updated code */}
                    <div className='first-column w-[168.12px] absolute top-[-200px] overflow-hidden'>
                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 91%)",
                            }}
                            className="h-[280px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 91%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 85%)",
                            }}
                            className="h-[240px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image2.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 91%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image5.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image6.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            />
                        </div>

                    </div>


                    <div className='second-column w-[168.12px] absolute top-[-200px] left-[230px] overflow-hidden'>
                        <div
                          style={{
                              clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 91%)",
                          }}
                          className="h-[280px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                          <div 
                            style={{
                              clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                            }}
                            className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                          </div>
                            
                          <div 
                            style={{
                              clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                            }}
                            className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                          </div>


                          <img
                              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                              alt="Shape Image"
                              className="w-full h-full object-cover"
                              style={{
                              clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 91%)",
                          }}
                          />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 85%)",
                            }}
                            className="h-[240px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image6.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 91%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image3.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image2.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            />
                        </div>
                    </div>

                    <div className='third-column hidden md:block w-[168.12px] absolute top-[-260px] right-[10px] overflow-hidden'>
                       <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 88%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image3.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 92%)",
                            }}
                            />
                        </div>

                       <div
                            style={{
                                clipPath: "polygon(0 0, 100% 16%, 100% 100%, 0 85%)",
                            }}
                            className="h-[240px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image5.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 16%, 100% 100%, 0 88%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 85%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image2.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 91%)",
                            }}
                            />
                        </div>

                        <div
                            style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 85%)",
                            }}
                            className="h-[320px] bg-gradient-to-b from-[#6DB7E5] to-[#6061AB] pt-[10px] pe-[10px] overflow-hidden relative">
                            
                            <div 
                              style={{
                                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[14px] h-[14px] bg-[#272D4B] absolute top-0 left-0'>

                            </div>
                            
                            <div 
                              style={{
                                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                              }}
                              className='z-[999] w-[11px] h-[16px] absolute bottom-0 right-0 bg-gradient-to-b from-[#31365C] to-[#0A131C] xl:bg-[#2A2A4A] '>

                            </div>


                            <img
                                src="/img/homepage/sectionone/image2.webp"
                                alt="Shape Image"
                                className="w-full h-full object-cover"
                                style={{
                                clipPath: "polygon(0 0, 100% 10.6%, 100% 100%, 0 91%)",
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SectionOne;