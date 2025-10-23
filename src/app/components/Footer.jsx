"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = ({ transparent = false }) => {
  // 1. states/hook variables
  const footerRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Scroll animation for footer elements
      gsap.from(footerRef.current.querySelectorAll(".fade-in-up"), {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Hover rotation for icons
      iconRefs.current.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { rotate: "+=360", duration: 0.6, ease: "power2.inOut" });
        });
      });
    }, footerRef);

    return () => ctx.revert();
    
  }, []);

  return (
    <div
      ref={footerRef}
      className={`w-full pt-[3px] relative ${
        transparent
          ? "bg-transparent"
          : "bg-gradient-to-r from-[#1AE4FA] to-[#FA1AC2]"
      }`}
    >
      <div
    className={`w-full h-full ${
      transparent ? "bg-transparent" : "bg-[#000C1B]"
    } py-1`}
  >
      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[5%] left-[-16%] lg:top-[30%] lg:left-[0%] opacity-[24%] lg:opacity-[30%] blur-circle blur-animation'></div>
      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[40%] right-0 lg:top-[-5%] lg:right-[0%] opacity-[10%] lg:opacity-[30%] right-blur-circle'></div>
    
      <div className="w-full h-full mt-[35px] flex items-center justify-center flex-col">

        {/* Logo */}
        <img
          src="/img/homepage/footer/footerLogo.png"
          className="fade-in-up"
          alt="logo"
        />

        {/* Navigation */}
        <ul className=" fade-in-up text-white flex items-center justify-center text-[14px] sm:text-[16px] font-[500] gap-[30px] text-center pt-[48.43px]">
          <li><a>IT Resource</a></li>
          <li><a>UI/UX Design</a></li>
          <li><a>Web Animation</a></li>
          <li className="hidden sm:block"><a>Digital Marketing</a></li>
          <li className="hidden sm:block"><a>Video Animation</a></li>
        </ul>

        {/* Social Icons */}
        <div className="fade-in-up mt-[35px]">
          <div className="flex items-center justify-center gap-[10px]">
            {[
              { src: "/img/homepage/footer/twitter.png", alt: "twitter" },
              { src: "/img/homepage/footer/facebook.png", alt: "facebook" },
              { src: "/img/homepage/footer/linkedin.png", alt: "linkedin" }
            ].map((icon, idx) => (
              <div
                key={idx}
                ref={(el) => (iconRefs.current[idx] = el)}
                className="w-[40px] h-[40px] rounded-[10px] bg-amber-50 flex items-center justify-center social-icon overflow-hidden cursor-pointer"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="fade-in-up w-full h-[1px] bg-white mt-[50px]"></div>

        {/* Footer Bottom */}
        <div className="fade-in-up w-full h-[44px] bg-transparent text-white flex items-center justify-center text-[14px] sm:text-[16px] font-[400] gap-[14px] sm:gap-[30px]">
          <span>&copy; Copyright Reserved 2025</span>
          <span>|</span>
          <Link href="/terms"><span>Terms &amp; Services</span></Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
