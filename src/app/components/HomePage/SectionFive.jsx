'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const counters = [
    { id: 'clients', label: 'Total Clients', value: 2000, suffix: '+' },
    { id: 'revenue', label: 'Total Revenue', value: 2000, suffix: '+' },
    { id: 'orders', label: 'Total Orders', value: 25000, suffix: '+' },
    { id: 'artists', label: 'Artists', value: 12000, suffix: '+' },
];

const SectionFive = () => {
    // 1. states/hook variables
    const sectionRef = useRef(null);
    const h1Ref = useRef(null);
    const counterRefs = useRef({});

    // responsive formatter
    const formatNumberResponsive = (num, decimals = 0) => {
        const width = window.innerWidth;
        const value = decimals > 0 ? Number(num).toFixed(decimals) : Math.floor(num);

        if (width >= 768) {
            // md and above: show k if >= 1000
            if (value >= 1000) {
                return (value / 1000).toFixed(0) + 'k';
            }
        }
        // mobile: full number with commas
        return Number(value).toLocaleString();
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate H1
            gsap.from(h1Ref.current, {
                x: 100,
                opacity: 0,
                duration: 0.9,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            // Animate counters
            counters.forEach((c) => {
                const el = counterRefs.current[c.id];
                if (!el) return;

                const obj = { value: 0 };

                gsap.to(obj, {
                    value: c.value,
                    duration: 1.6,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        once: true,
                    },
                    onUpdate: () => {
                        const decimals = c.decimals ?? 0;
                        el.textContent =
                            formatNumberResponsive(obj.value, decimals) + (c.suffix || '');
                    },
                    onComplete: () => {
                        const decimals = c.decimals ?? 0;
                        el.textContent =
                            formatNumberResponsive(c.value, decimals) + (c.suffix || '');
                    },
                });
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    // 3. return statement/jsx
    return (
        <div
            ref={sectionRef}
            className="w-full min-h-[200px] sm:min-h-[318px] bg-[#0A1119] pt-[22px] sm:pt-[40px] xl:pt-[78px] relative pb-[20px] sm:mb-0 overflow-hidden"
        >
            <div className="hidden md:block w-0 h-0 rounded-full absolute top-[-100px] left-[43%] -translate-x-1/2 opacity-[50%]  blur-circle"></div>
            <div className="hidden md:block w-0 h-0 rounded-full absolute top-[20%] left-[-80px] opacity-[50%] blur-circle1"></div>

            <h1
                ref={h1Ref}
                className="w-[215px] h-[31px] sm:w-[409px] sm:h-[42px] mx-auto text-center border-t-[3px] border-[#fff] text-[16px] sm:text-[32px] font-[500] text-[#fff]"
            >
                Progress &amp; Its Indicators
            </h1>

            <div className="w-full flex items-center justify-center flex-wrap gap-[20px] mt-[22px] sm:mt-[40px] xl:mt-[50px]">
                {counters.map((c) => (
                    <div
                        key={c.id}
                        className="relative p-[2px] bg-gradient-to-b from-[#FA1AC2] via-[#1AE4FA] to-[#1CDE63D9] w-[100px] h-[70px] sm:w-[140px] sm:h-[70px] xl:w-[171px] md:h-[97px] backdrop-blur-[34.2px] rounded-[10px]"
                    >
                        <div className="bg-[#0A1119] text-white w-[100%] h-[100%] ps-[10px] lg:ps-[26px] flex flex-col items-start justify-center gap-2 rounded-[10px]">
                            <span className="text-[12px] md:text-[16px]">{c.label}</span>
                            <span
                                ref={(el) => (counterRefs.current[c.id] = el)}
                                className="font-[600] text-[20px] "
                                aria-live="polite"
                            >
                                {c.decimals
                                    ? c.value.toFixed(c.decimals)
                                    : Math.floor(c.value).toLocaleString()}
                                {c.suffix ?? ''}
                            </span>
                        </div>
                    </div>
                ))}

                {/* Example progress bar for ETH item (optional visual) */}
                <div className="relative p-[2px] bg-gradient-to-b from-[#FA1AC2] via-[#1AE4FA] to-[#1CDE63D9] w-[100px] h-[70px] sm:w-[140px] sm:h-[70px] xl:w-[171px] md:h-[97px] rounded-[10px]">
                    <div className="bg-[#0A1119] w-[100%] h-[100%] text-white ps-[10px] lg:ps-[26px] flex flex-col items-start justify-center gap-5 rounded-[10px]">
                        <span className="text-[12px] md:text-[16px]">3.5 ETH</span>
                        <img
                            src="/img/homepage/network.png"
                            className="w-[90%] object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionFive;
