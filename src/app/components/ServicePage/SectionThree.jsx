"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceBox = ({ fname, sname, pos, image, isActive, onHover, isCarousel = false }) => {
    return (
        <div
            className={`${isCarousel ? "relative" : `absolute ${pos}`
                } w-[92px] h-[86px] lg:w-[200px] lg:h-[134px] flex flex-col items-center justify-between cursor-pointer`}
            
            // 💡 FIX: trigger image change on both hover and click
            onMouseEnter={onHover}
            onClick={onHover}
        >
            {/* Outer Box */}
            <div
                className={`w-[47px] h-[44px] lg:w-[70px] lg:h-[70px] rounded-[10px] border flex items-center justify-center transition-all duration-300
                ${isActive
                        ? "border-[#75BAFF] shadow-[0_0_4px_0_#0080FF]"
                        : "border-[#75baff9b] opacity-60"
                    }`}
            >
                <div
                    className={`w-[16px] h-[16px] lg:w-[27px] lg:h-[27px] rounded-full transition-all duration-300
                    ${isActive
                            ? "bg-[#75BAFF] shadow-[0_0_4px_0_#0080FF]"
                            : "bg-[#75baff9b] opacity-60"
                        }`}
                ></div>
            </div>

            {/* Text */}
            <div
                className={`w-[200px] h-[54px] text-[12px] lg:text-[20px] font-[600] flex flex-col items-center justify-center text-center transition-all duration-300
                ${isActive ? "text-[#75BAFF]" : "text-[#75baff9b] opacity-70"}`}
            >
                <span>{fname}</span>
                <span>{sname}</span>
            </div>
        </div>
    );
};



const SectionThree = () => {
    const serviceList = [
        {
            fname: "Mobile",
            sname: "App Development",
            key: "Mobile App Development",
            img: "/img/servicepage/sectionthree/mobileapp.png",
        },
        {
            fname: "IT",
            sname: "Resource",
            key: "IT Resource",
            img: "/img/servicepage/sectionthree/itresource.png",
        },
        {
            fname: "E-Commerce",
            sname: "Web Development",
            key: "E-Commerce Web Development",
            img: "/img/servicepage/sectionthree/ecommerce.png",
        },
        {
            fname: "UI/UX",
            sname: "Design",
            key: "UI/UX Design",
            img: "/img/servicepage/sectionthree/uiux.png",
        },
        {
            fname: "Emerging",
            sname: "Tech Development",
            key: "Emerging Tech Development",
            img: "/img/servicepage/sectionthree/emerging.png",
        },
        {
            fname: "Digital Branding &",
            sname: "Communication",
            key: "Digital Branding & Communication",
            img: "/img/servicepage/sectionthree/dbc.png",
        },
        {
            fname: "Website",
            sname: "Development",
            key: "Website Development",
            img: "/img/servicepage/sectionthree/webdevelopment.png",
        },
        {
            fname: "Video",
            sname: "Animation",
            key: "Video Animation",
            img: "/img/servicepage/sectionthree/video.png",
        },
        {
            fname: "Digital",
            sname: "Branding",
            key: "Digital Branding",
            img: "/img/servicepage/sectionthree/marketing.png",
        },
    ];
    const [activeImage, setActiveImage] = useState(
        "/img/servicepage/sectionthree/mobileapp.png"
    );
    const [activeBox, setActiveBox] = useState("Mobile App Development");
    const [activeIndex, setActiveIndex] = useState(0);
    const activeService = serviceList[activeIndex];
    const carouselRef = useRef(null);

    const serviceImages = {
        "Mobile App Development": "/img/servicepage/sectionthree/mobileapp.png",
        "IT Resource": "/img/servicepage/sectionthree/itresource.png",
        "E-Commerce Web Development": "/img/servicepage/sectionthree/ecommerce.png",
        "UI/UX Design": "/img/servicepage/sectionthree/uiux.png",
        "Emerging Tech Development": "/img/servicepage/sectionthree/emerging.png",
        "Digital Branding & Communication": "/img/servicepage/sectionthree/dbc.png",
        "Website Development": "/img/servicepage/sectionthree/webdevelopment.png",
        "Video Animation": "/img/servicepage/sectionthree/video.png",
        "Digital Branding": "/img/servicepage/sectionthree/marketing.png",
    };

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -50 || velocity < -500) {
            // Swipe Left → Next
            setActiveIndex((prev) => (prev + 1) % serviceList.length);
        } else if (offset > 50 || velocity > 500) {
            // Swipe Right → Prev
            setActiveIndex((prev) =>
                prev === 0 ? serviceList.length - 1 : prev - 1
            );
        }
    };






    return (
        <div className="w-full h-[810px] lg:h-[1240px] flex items-center justify-center bg-[#0A131C] overflow-hidden">
            <div className="w-[80%] servicepage-sectionthree mx-auto h-[50%] relative">
                {/* WHITE SHADOW BEHIND IMAGE */}
                <div className="w-[220px] h-[476px] lg:w-[330px] lg:h-[654px] absolute bottom-[60px] sm:bottom-[-80px] lg:bottom-[-160px] left-1/2 -translate-x-1/2 z-5 rounded-[40px] shadow-[0_0_80px_30px_rgba(255,255,255,0.35)]"></div>

                {/* IMAGE FRAME */}
                <div className="md:hidden w-[210px] h-[476px] lg:w-[340px] lg:h-[660px] absolute bottom-[60px] sm:bottom-[-80px] lg:bottom-[-160px] left-1/2 -translate-x-1/2 z-10 overflow-hidden rounded-[30px]">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeService.img}
                            src={activeService.img}
                            alt={activeService.key}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="w-full h-full object-cover rounded-[30px]"
                            loading="lazy"
                        />
                    </AnimatePresence>
                </div>
                {/* IMAGE FRAME */}
                <div className="hidden md:block w-[210px] h-[476px] lg:w-[340px] lg:h-[660px] absolute bottom-[60px] sm:bottom-[-80px] lg:bottom-[-160px] left-1/2 -translate-x-1/2 z-10 overflow-hidden rounded-[30px]">
                <AnimatePresence mode="wait">
                    <motion.img
                    key={activeImage} // 🔥 fixed here
                    src={activeImage}
                    alt={activeBox}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full h-full object-cover rounded-[30px]"
                    loading="lazy"
                    />
                </AnimatePresence>
                </div>


                {/* CIRCLE BACKGROUND */}
                <div className="w-[481px] h-[481px] lg:w-[783px] lg:h-[783px] rounded-full absolute bottom-[-80%] lg:bottom-[-100%] left-1/2 -translate-x-1/2 opacity-[30%] bg-gradient-to-r to-[#EEEEEE4D] via-[#33333300] from-[#EEEEEE4D]"></div>

                {/* DESKTOP/TABLET SERVICE BOXES (unchanged layout) */}
                <div className="hidden sm:block">
                    {/* === Existing Service Boxes === */}
                    {/* Keep all your original <ServiceBox ... /> code here exactly as before */}
                    <ServiceBox
                        fname="Mobile"
                        sname="App Development"
                        pos="top-[-160px] xl:top-[-180px] left-1/2 -translate-x-1/2"
                        image={serviceImages["Mobile App Development"]}
                        isActive={activeBox === "Mobile App Development"}
                        onHover={() => {
                            setActiveImage(serviceImages["Mobile App Development"]);
                            setActiveBox("Mobile App Development");
                        }}
                    />

                    <ServiceBox
                        fname="IT"
                        sname="Resource"
                        pos="top-[-60px] lg:top-[0px] left-[0px] xl:top-[-40px] xl:left-[100px]"
                        image={serviceImages["IT Resource"]}
                        isActive={activeBox === "IT Resource"}
                        onHover={() => {
                            setActiveImage(serviceImages["IT Resource"]);
                            setActiveBox("IT Resource");
                        }}
                    />

                    <ServiceBox
                        fname="UI/UX"
                        sname="Design"
                        pos="top-[-60px] lg:top-[0px] right-[0px] xl:top-[-40px] xl:right-[100px]"
                        image={serviceImages["UI/UX Design"]}
                        isActive={activeBox === "UI/UX Design"}
                        onHover={() => {
                            setActiveImage(serviceImages["UI/UX Design"]);
                            setActiveBox("UI/UX Design");
                        }}
                    />

                    <ServiceBox
                        fname="E-Commerce"
                        sname="Web Development"
                        pos="top-[120px] lg:top-[240px] xl:top-[200px] left-[-40px] xl:left-[40px]"
                        image={serviceImages["E-Commerce Web Development"]}
                        isActive={activeBox === "E-Commerce Web Development"}
                        onHover={() => {
                            setActiveImage(serviceImages["E-Commerce Web Development"]);
                            setActiveBox("E-Commerce Web Development");
                        }}
                    />
 
                    <ServiceBox
                        fname="Emerging"
                        sname="Tech Development"
                        pos="top-[120px] lg:top-[240px] xl:top-[200px] right-[-40px] xl:right-[40px]"
                        image={serviceImages["Emerging Tech Development"]}
                        isActive={activeBox === "Emerging Tech Development"}
                        onHover={() => {
                            setActiveImage(serviceImages["Emerging Tech Development"]);
                            setActiveBox("Emerging Tech Development");
                        }}
                    />

                    <ServiceBox
                        fname="Digital Branding &"
                        sname="Communication"
                        pos="top-[300px] lg:top-[460px] xl:top-[460px] left-[-40px] xl:left-[0px]"
                        image={serviceImages["Digital Branding & Communication"]}
                        isActive={activeBox === "Digital Branding & Communication"}
                        onHover={() => {
                            setActiveImage(serviceImages["Digital Branding & Communication"]);
                            setActiveBox("Digital Branding & Communication");
                        }}
                    />

                    <ServiceBox
                        fname="Website"
                        sname="Development"
                        pos="top-[300px] lg:top-[460px] xl:top-[460px] right-[-40px] xl:right-[0px]"
                        image={serviceImages["Website Development"]}
                        isActive={activeBox === "Website Development"}
                        onHover={() => {
                            setActiveImage(serviceImages["Website Development"]);
                            setActiveBox("Website Development");
                        }}
                    />

                    <ServiceBox
                        fname="Video"
                        sname="Animation"
                        pos="top-[470px] lg:top-[670px] left-[0px] xl:top-[700px] xl:left-[200px]"
                        image={serviceImages["Video Animation"]}
                        isActive={activeBox === "Video Animation"}
                        onHover={() => {
                            setActiveImage(serviceImages["Video Animation"]);
                            setActiveBox("Video Animation");
                        }}
                    />

                    <ServiceBox
                        fname="Digital"
                        sname="Branding"
                        pos="top-[470px] lg:top-[670px] right-[0px] xl:top-[700px] xl:right-[200px]"
                        image={serviceImages["Digital Branding"]}
                        isActive={activeBox === "Digital Branding"}
                        onHover={() => {
                            setActiveImage(serviceImages["Digital Branding"]);
                            setActiveBox("Digital Branding");
                        }}
                    />
                </div>

                {/* MOBILE CAROUSEL */}
                {/* MOBILE CAROUSEL */}
                <div className="sm:hidden absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-full h-[150px] flex items-center justify-center overflow-hidden">
                    <motion.div
                        key={activeIndex}
                        className="flex gap-4 items-center justify-center"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        {[-1, 0, 1].map((offset) => {
                            const index = (activeIndex + offset + serviceList.length) % serviceList.length;
                            const service = serviceList[index];
                            const isActive = offset === 0;

                            return (
                                <motion.div
                                    key={service.key}
                                    className="flex-shrink-0"
                                    animate={{
                                        scale: isActive ? 1.2 : 0.9,
                                        opacity: isActive ? 1 : 0.5,
                                        y: isActive ? -10 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => {
                                        if (offset === 1) {
                                            // Move forward
                                            setActiveIndex((prev) => (prev + 1) % serviceList.length);
                                        } else if (offset === -1) {
                                            // Move backward
                                            setActiveIndex((prev) =>
                                                prev === 0 ? serviceList.length - 1 : prev - 1
                                            );
                                        }
                                    }}
                                >
                                    <ServiceBox
                                        fname={service.fname}
                                        sname={service.sname}
                                        isActive={isActive}
                                        isCarousel={true}
                                    />

                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default SectionThree;