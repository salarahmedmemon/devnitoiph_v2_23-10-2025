"use client";

import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useEffect, useState, useContext } from "react";
import { LoadContext } from "./ClientWrapper"; // <-- adjust path if Header is in another folder

const Header = () => {
  const { loaded } = useContext(LoadContext);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const desktopLinkRefs = useRef([]);
  const mobileLinkRefs = useRef([]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/casestudies", label: "Case Studies" },
    { href: "/careers", label: "Careers Blog" },
    { href: "/details", label: "Details" },
    { href: "/faq", label: "FAQ'S" },
  ];

  // underline hover handlers with cleanup
  useLayoutEffect(() => {
    const all = [...desktopLinkRefs.current, ...mobileLinkRefs.current].filter(Boolean);
    const handlers = [];
    all.forEach((el) => {
      const underline = el.querySelector(".underline");
      if (!underline) return;
      const onEnter = () => gsap.to(underline, { width: "100%", duration: 0.35, ease: "power2.out" });
      const onLeave = () => gsap.to(underline, { width: "0%", duration: 0.35, ease: "power2.in" });
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      handlers.push({ el, onEnter, onLeave });
    });

    return () => {
      handlers.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  // entrance animation — run ONLY after loaded === true
  // entrance animation — run ONLY after loaded === true
  useLayoutEffect(() => {
    if (!loaded) return;
    if (!headerRef.current) return;

    // Run animation ONLY on homepage
    if (pathname === "/") {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          headerRef.current,
          { x: "100%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.06,
          }
        );
      }, headerRef);

      return () => ctx.revert();
    } else {
      // On all other pages — instantly show header, no animation
      gsap.set(headerRef.current, { x: "0%", opacity: 1 });
    }
  }, [loaded, pathname]);


  // mobile menu toggle animation
  useEffect(() => {
    if (!menuRef.current) return;
    gsap.killTweensOf(menuRef.current);

    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, opacity: 1, duration: 0.45, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { x: "-120%", opacity: 0, duration: 0.45, ease: "power2.in" });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);

  return (
    <div
      ref={headerRef}
      // INITIAL hidden state so there's nothing to flash before animation runs
      className="header opacity-0 transform z-[9999] relative translate-x-[100%] will-change-transform w-[94%] md:w-[88%] lg:w-[90%] h-[41px] sm:h-[74.98px] bg-white mx-auto rounded-[10px] sm:rounded-tl-[20px] sm:rounded-bl-[20px] md:rounded-[20px] px-[20px] py-[10px] flex items-center justify-between"
    >
      {/* HAMBURGER */}
      <div className="block lg:hidden relative cursor-pointer" onClick={toggleMenu}>
        <img className="w-[16.89px] sm:w-[40px]" src="/img/homepage/hamburger.png" alt="Menu" />
        <div
          ref={menuRef}
          className="w-[100px] sm:w-[200px] top-[50px] sm:top-[80px] left-[0%] fixed bg-white z-[9999] rounded shadow-xl"
          style={{ transform: "translateX(-120%)", opacity: 0 }}
        >
          <ul className="flex flex-col items-start gap-2 sm:gap-3 z-[9999] p-2 text-[10px] sm:text-[20px]">
            {links.map(({ href, label }, index) => {
              const isActive = pathname === href;
              return (
                <li
                  key={href}
                  ref={(el) => (mobileLinkRefs.current[index] = el)}
                  className={`relative w-full cursor-pointer overflow-visible ${isActive ? "text-[#4C4886] font-semibold" : "text-[#666666]"
                    }`}
                >
                  <Link
                    href={href}
                    className="relative block w-full"
                  >
                    <span className="relative inline-block">
                      {label}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] transition-all ${isActive ? "w-full bg-[#4C4886]" : "w-0 bg-black"
                          }`}
                      ></span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>


        </div>
      </div>

      {/* LOGO */}
      <div className="block sm:hidden">
        <img className="cursor-pointer w-[105px] h-[32px]" src="/img/homepage/mobile_logo.png" alt="Logo" />
      </div>

      {/* DESKTOP LOGO */}
      <div className="hidden sm:flex w-[174px] cursor-pointer items-center justify-between">
        <img src="/img/homepage/desktop-logo/icon.svg" />
        <img src="/img/homepage/desktop-logo/heading.svg" />
      </div>

      {/* DESKTOP NAVIGATIONS */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-[2vw]">
          {links.map(({ href, label }, index) => {
            const isActive = pathname === href;
            return (
              <li
                key={href}
                ref={(el) => (desktopLinkRefs.current[index] = el)}
                className={`relative cursor-pointer py-1 overflow-visible ${isActive ? "text-[#4C4886] font-semibold" : "text-gray-700"}`}
              >
                <Link href={href} className="relative z-10 inline-block">{label}</Link>
                <span className={`underline absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] transition-all ${isActive ? "w-full bg-[#4C4886]" : "w-0 bg-black"}`}></span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CONTACT BUTTONS */}
      <div className="header-btns flex items-center gap-3">
        <button className="w-[28px] h-[26px] sm:w-[40px] sm:h-[39.44px] bg-[#4C4886] flex items-center justify-center rounded-[5px] sm:rounded-[10px] rotate-once cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path d="M16 .395C7.164.395.073 7.486.073 16.322c0 2.875.755 5.688 2.197 8.175L0 32l7.694-2.01a15.826 15.826 0 0 0 8.306 2.289h.006c8.837 0 15.928-7.09 15.928-15.927C31.934 7.486 24.843.395 16 .395Zm0 29.1a13.1 13.1 0 0 1-6.693-1.84l-.48-.285-4.57 1.193 1.219-4.46-.31-.457A13.1 13.1 0 0 1 2.9 16.322C2.9 8.66 8.338 3.223 16 3.223s13.1 5.437 13.1 13.099S23.662 29.495 16 29.495Zm7.225-9.856c-.395-.197-2.331-1.151-2.693-1.283-.36-.133-.623-.197-.886.197-.262.395-1.018 1.283-1.25 1.546-.23.263-.46.296-.854.099-.395-.197-1.667-.615-3.175-1.96-1.174-1.048-1.965-2.341-2.197-2.736-.23-.395-.024-.608.173-.805.178-.178.395-.46.592-.69.198-.23.263-.395.395-.657.133-.263.066-.493-.033-.69-.099-.197-.886-2.137-1.216-2.933-.32-.77-.646-.665-.886-.677-.229-.012-.492-.012-.755-.012-.262 0-.69.099-1.052.493-.36.395-1.384 1.35-1.384 3.293s1.416 3.826 1.613 4.092c.197.263 2.79 4.266 6.754 5.98.945.407 1.681.65 2.255.833.948.302 1.812.26 2.497.158.762-.113 2.331-.953 2.661-1.874.33-.92.33-1.71.23-1.874-.098-.164-.36-.262-.755-.46Z" />
          </svg>

          {/* <img className="hidden sm:block" src="/img/homepage/whatsapp.png" alt="WhatsApp" /> */}
          {/* <img className="block sm:hidden w-[10.98px] h-[]10.78px]" src="/img/homepage/whatsapp.png" alt="WhatsApp" /> */}
        </button>
        <button className="w-[28px] h-[26px] sm:w-[40px] sm:h-[39.44px] bg-[#4C4886] flex items-center justify-center rounded-[5px] sm:rounded-[10px] rotate-once cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6 text-white"
          >
            <path fill="#4C4886" d="M4 11.5v25c0 1.93 1.57 3.5 3.5 3.5h33c1.93 0 3.5-1.57 3.5-3.5v-25l-20 14z"/>
            <path fill="#f2f2f2" d="M44 11.5V13l-20 14L4 13v-1.5c0-1.93 1.57-3.5 3.5-3.5h33c1.93 0 3.5 1.57 3.5 3.5z"/>
            <path fill="#f2f2f2" d="M4 11.5l20 14 20-14H4z"/>
            <path fill="#f2f2f2" d="M44 36.5V13l-20 14L4 13v23.5C4 38.43 5.57 40 7.5 40h33c1.93 0 3.5-1.57 3.5-3.5z"/>
          </svg>

          {/* <img className="hidden sm:block" src="/img/homepage/gmail.png" alt="Gmail" /> */}
          {/* <img className="block sm:hidden w-[10.98px] h-[]10.78px]" src="/img/homepage/gmail.png" alt="Gmail" /> */}
        </button>
      </div>
    </div>
  );
};

export default Header;
