"use client";
import Image from "next/image";
import Header from "../Header";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { LoadContext } from "../ClientWrapper";


const SectionOne = () => {
    // 1. states/hook variables
    const { loaded } = useContext(LoadContext);
    const sectionRef = useRef(null);

    // LARGE SCREEN REFS
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const contentRef = useRef(null);
    const rightRef = useRef(null);
    const tl = useRef(null);

    useLayoutEffect(() => {
        if (!loaded || !sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (window.innerWidth > 1280) {
                tl.current = gsap.timeline({ paused: false }); // play immediately (no mouse event)

                tl.current.fromTo(
                    imgRef1.current,
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
                    0
                );
                tl.current.fromTo(
                    imgRef2.current,
                    { y: 100, x: -100, opacity: 0 },
                    { y: 0, x: 0, duration: 1.4, opacity: 1, ease: "power3.out" },
                    0
                );
                tl.current.fromTo(
                    contentRef.current,
                    { x: -150, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
                    0
                );
                tl.current.fromTo(
                    rightRef.current,
                    { x: 150, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
                    0
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, [loaded]);



    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div ref={sectionRef} className="w-full h-[472px] sm:h-[550px] md:h-[734px] pt-[50px] sm:pt-[85px] overflow-hidden">
            {/* LARGE SCREEN BACKGROUND IMAGE */}
            <div className="w-full h-[472px] sm:h-[550px] md:h-[734px] absolute top-0 left-0 blur-[4px]">
                <img src="/img/aboutpage/image.svg" alt="background image" className="w-full h-full object-cover" loading="lazy"/>
            </div>

            {/* <Header /> */}

            {/* FOR SMALL SCREENS */}
            <div className="xl:hidden w-full h-full relative z-10">
                <div className="w-[85%] h-[120px] sm:h-[149px] md:w-[58%] lg:w-[60%] md:h-[30%] lg:h-[34%] flex gap-[20px] mt-[38px] mx-auto">
                    {/* IMAGE ONE */}
                    <div className="w-[100%] h-full rounded-[10px] z-10 border border-[#4AFFF0] shadow-[0_2px_7px_0_#5FFFE4] relative group overflow-hidden cursor-pointer">
                        <img src="/img/aboutpage/image01.png" alt="image one" className="w-full h-full object-cover" loading="lazy" />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="text-white text-lg sm:text-xl font-bold">Web Developer</h2>
                        </div>
                    </div>

                    {/* IMAGE TWO */}
                    <div className="w-[100%] h-full rounded-[10px] z-10 border border-[#4AFFF0] shadow-[0_2px_7px_0_#5FFFE4] relative group overflow-hidden cursor-pointer">
                        <img src="/img/aboutpage/image02.png" alt="image two" className="w-full h-full object-cover" loading="lazy"/>
                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h2 className="text-white text-lg sm:text-xl font-bold">Forex Trading</h2>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] h-[190px] mx-auto mt-[36px] md:mt-[80px] xl:mt-0 flex flex-col items-center justify-center">
                    <button className="w-[121px] h-[38px] md:w-[150px] md:h-[48px] lg:w-[154px] lg:h-[48px] bg-white rounded-[10px] font-[600] text-[25px] lg:text-[34px] text-[#4C4886]">About</button>
                    <h1 className="font-[600] text-[48px] md:text-[55px] lg:text-[54px] text-white">Devnito</h1>
                    <p className="text-[12px] md:text-[24px] lg:text-[20px] text-center font-[300] text-white">DevNito is a leading provider of IT export services, offering custom software and SaaS solutions to businesses worldwide. With a focus on tailored excellence, transparent</p>
                    <button className="bg-white text-[#4C4886] rounded-[5px] font-[600] lg:text-[24px] px-[14px] md:px-[24px] md:py-[8px] py-[5px] mt-[16px] relative group">CONTACT US
                        <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
                    </button>
                </div>
            </div>

            {/* FOR LARGE SCREENS */}
            <div className="hidden xl:flex w-full aboutpage-section-one mx-auto h-full justify-between pt-[120px] relative">
                {/* ASTRAUNOT IMAGE */}
                <div ref={imgRef1} className="absolute w-[173.36px] h-[217.96px] top-[-3%] left-[32%]">
                    <img src="/img/aboutpage/sectionone/image01.png" alt="astrounaot image" loading="lazy" className="w-full h-full object-cover"/>
                    {/* <Image 
                        src="" alt="" placeholder="" blurDataURL="" priority={true}
                    /> */}
                </div>

                {/* ROCKET IMAGE */}
                <div ref={imgRef2} className="absolute w-[66.87px] h-[136.36px] rotate-[24deg] top-[2%] right-[18%]">
                    <img src="/img/aboutpage/sectionone/image02.png" alt="rocket image" loading="lazy" className="w-full h-full object-cover"/>
                </div>


                {/* LEFT SIDE --- CONTENT */}
                <div ref={contentRef} className="w-[595.86px] h-[361.98px] text-[#FFFFFF] ms-[93px]">
                    <button className="w-[156px] h-[66px] bg-white font-[600] text-[44px] text-[#4C4886] rounded-[10px]">About</button>
                    <h1 className="font-[600] text-[92px] leading-[100px]">Devnito</h1>
                    <p className="font-[300] text-[16px] pt-[36px] xl:w-[90%]">DevNito is a leading provider of IT export services, offering custom software and SaaS solutions to businesses worldwide. With a focus on tailored excellence, transparent collaboration, and client-centricity, we aim to elevate your business to new heights.</p>
                    <button className="w-[220px] h-[46px] bg-white mt-[32px] rounded-[5px] font-[600] text-[20px] text-[#4C4886] relative group">
                        CONTACT US
                        <span className="absolute left-1/2 -bottom-[2px] h-[3px] w-0 group-hover:w-full transition-all duration-200 ease-out -translate-x-1/2 bg-gradient-to-r from-[#1CDE63] via-[#FA1AC2] to-[#1AE4FA]"></span>
                    </button>
                </div>

                {/* RIGHT SIDE --- IMAGES */}
                <div ref={rightRef} className="w-[40%] me-[93px] relative">
                    {/* IMAGE ONE */}
                    <div className="w-[277.9px] h-[229.83px] rounded-[10px] absolute top-[-40px] right-[270px]">
                        <div className="w-full h-full rounded-[10px] z-2  border border-[#4AFFF0] shadow-[0_2px_7px_0_#5FFFE4] relative group overflow-hidden cursor-pointer">

                            {/* Image */}
                            {/* <img src="/img/aboutpage/image01.png" 
                              alt="About page image one"
                              className="w-full h-full object-cover"
                            /> */}
                            <div className="w-full h-full relative z-0">
                                {/* <Image
                                    src="/img/aboutpage/image01.png"
                                    alt="About page image one"
                                    fill="true"
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAklEQVR4AewaftIAAAIOSURBVI3BO2gTYQAH8P/33Ze75GIeTS5pGlJIayCi2BisVgfjUKJUtJuLdLEiSHBRN+tjUaE4SECcChK1hYouYgZB8LHqIq1YMYPS D:\project_01> node generateBlur.js
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAklEQVR4AewaftIAAAIOSURBVI3BO2gTYQAH8P/33Ze75GIeTS5pGlJIayCi2BisVgfjUKJUtJuLdLEiSHBRN+tjUaE4SECcChK1hYouYgZB8LHqIq1YMYrm1TbVShvzuuTyeYEOUhL198P/GB0dVRj+IRgM7lQUp5+hA5NsFmxW63Wfz3chEonEBbQx5nbSOjMkiGyORQ9HaTqdzjG0IQFX99tsY2G3G665eUwv5asUm0w47LvLhE2oW7fhgdOPQ6EQEuZKimKTn5ROCpomDOS+4QxKkL98RtknvxGwYdbr3WPSGnfKRnnEU6lg39IijhIOYhXWphurZxl0D30+0UPpDBgLQNOwRWtgh6sLYo8Hv0za3djsQpVCNyBJJ5dVNaBKEuRqFYM2GS6nGzUJeJXKvIOOXlMUIhFyLlOvJyuMlXubGna5XJDsNrwvLCJcZEPQUYcg9KZU9eL4p6njfeG+qjw0iIX+IN6uL2uOYhMWu+kJdEKyVFq79/3EB6MgXBrukkd6jCryof7J7pcf5/yKxZKl2vnb2QJnaCF+EcR6ynDkCgLDj9YDJvFm5f6LY2VGngdfzzehY2jhq9tBVS/wFJCKN8BrP9KW2uNmUShiA0MLLxwEz1Mg9wxEukVYHLoi/sC4Ok7AV6JAPQsinyaGuIo2KAhxcL6yF0SJgVcz6IByXjsA0j0DiEkiJtAJA+SvhBgvE3Gqib/4DaqGsgqKrmLuAAAAAElFTkSuQmCC"
                                /> */}
                                <img src="/img/aboutpage/image01.png" alt="About page image one" loading="lazy" className="w-full h-full object-cover" />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-black/40">
                                <h2 className="text-white text-lg sm:text-xl font-bold">Web Developer</h2>
                            </div>

                        </div>
                    </div>


                    <div className="w-[100px] h-[100px] absolute top-[150px] right-[220px] border-[5px] border-dashed border-white rounded-[10px]"></div>

                    {/* IMAGE TWO */}
                    <div className="w-[277.9px] h-[229.83px] rounded-[10px] absolute top-[210px] right-[-8px]">
                        <div className="w-full h-full rounded-[10px] border border-[#4AFFF0] shadow-[0_2px_7px_0_#5FFFE4] relative group overflow-hidden cursor-pointer">

                            {/* Image */}
                            <div className="w-full h-full relative z-0">
                                {/* <Image
                                    src="/img/aboutpage/image02.png"
                                    alt="About page image two"
                                    fill="true"
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAAAklEQVR4AewaftIAAADqSURBVAXB30vCQADA8e+2293ttpNlCJUVTKIHoef+iP7i3nsOCnoSLKMfiy3U6bRzm/b5eCK0B6U0KjZEkUYrSRT4DKzi1CpSGTA8VojYGOI0xWQZ/fE1N96a6fOEcwkWj5MAssTD7wmfXuvYakHUVNyNHNLzqRvIf2vKckX5USFq51i4httiyihccp/DwkSsHKigJbaCl+854sr4XB4luK3j4fGVvVZom2JMTN3teJotadYVYv7XMvtcYGPDxfAM2x8QdDvmRcFXtWGbSLraId43jjRJaENNXm14Kyc0bYdWkkPXws8ayZ5/VN5dB/fPDaIAAAAASUVORK5CYII="
                                /> */}
                                <img src="/img/aboutpage/image02.png" alt="About page image two" loading="lazy" className="w-full h-full object-cover" />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-black/40">
                                <h2 className="text-white text-lg sm:text-xl font-bold">Forex Trading</h2>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default SectionOne;