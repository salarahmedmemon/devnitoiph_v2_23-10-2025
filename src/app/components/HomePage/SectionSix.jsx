'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../Footer';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { id: 1, q: 'Is NoCode the future of the web ?', a1: 'NoCode tools are growing fast and democratizing app building for non-developers.', a2: 'They are great for prototypes and MVPs but traditional dev still needed for complex systems.' },
  { id: 2, q: 'How secure is NoCode?', a1: 'Security depends on the platform — always check provider guarantees and best practices.', a2: 'For sensitive systems consider custom development or audited NoCode platforms.' },
  { id: 3, q: 'Can NoCode scale for businesses?', a1: 'Many NoCode platforms can scale for small-to-medium needs, but architecture matters.', a2: 'For very large or highly-custom use-cases, hybrid or custom solutions are often used.' },
  { id: 4, q: 'How fast can I build with NoCode?', a1: 'You can iterate and launch prototypes in days or weeks instead of months.', a2: 'Time-to-market is one of the biggest benefits of NoCode for startups and teams.' },
  { id: 5, q: 'Will NoCode replace developers?', a1: 'No. It lowers the barrier for many use-cases but developers remain crucial for complex logic.', a2: 'Developers and NoCode together enable faster, more maintainable solutions.' },
  { id: 6, q: 'Can NoCode scale for businesses?', a1: 'Many NoCode platforms can scale for small-to-medium needs, but architecture matters.', a2: 'For very large or highly-custom use-cases, hybrid or custom solutions are often used.' },
];

function FAQItem({ q, a1, a2, id }) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false); // keep immediate state for event listeners
  const contentRef = useRef(null);
  const iconRef = useRef(null);
  const wrapperRef = useRef(null);
  const iconTimeoutRef = useRef(null);

  // initialize content hidden & icon
  useEffect(() => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (content) {
      content.style.height = '0px';
      content.style.opacity = '0';
      content.style.visibility = 'hidden';
    }
    if (icon) icon.textContent = '+';

    return () => {
      // cleanup timeouts and GSAP tweens
      if (iconTimeoutRef.current) {
        clearTimeout(iconTimeoutRef.current);
        iconTimeoutRef.current = null;
      }
      gsap.killTweensOf(content);
      gsap.killTweensOf(icon);
    };
  }, []);

  // keep openRef synced immediately
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const openContent = () => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    // stop any ongoing tweens/timeouts
    if (iconTimeoutRef.current) {
      clearTimeout(iconTimeoutRef.current);
      iconTimeoutRef.current = null;
    }
    gsap.killTweensOf(content);
    gsap.killTweensOf(icon);

    // open animation
    content.style.visibility = 'visible';
    content.style.height = 'auto';
    const fullHeight = content.scrollHeight;
    content.style.height = '0px';

    gsap.to(content, {
      height: fullHeight,
      opacity: 1,
      duration: 0.45,
      ease: 'power2.out',
      onComplete: () => {
        content.style.height = 'auto';
      },
    });

    // icon rotate + swap to minus
    gsap.to(icon, { rotate: 90, duration: 0.18, ease: 'power2.out' });
    iconTimeoutRef.current = setTimeout(() => {
      icon.textContent = '−';
      gsap.to(icon, { rotate: 0, duration: 0.18, ease: 'power2.out' });
      iconTimeoutRef.current = null;
    }, 160);

    // update state (and immediate ref) so document listener sees it
    openRef.current = true;
    setOpen(true);
  };

  const closeContent = () => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    if (iconTimeoutRef.current) {
      clearTimeout(iconTimeoutRef.current);
      iconTimeoutRef.current = null;
    }
    gsap.killTweensOf(content);
    gsap.killTweensOf(icon);

    // freeze current height to animate to 0
    const currentHeight = content.getBoundingClientRect().height;
    content.style.height = `${currentHeight}px`;

    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: 0.38,
      ease: 'power2.in',
      onComplete: () => {
        content.style.visibility = 'hidden';
      },
    });

    // icon rotate back + swap to plus
    gsap.to(icon, { rotate: -10, duration: 0.14, ease: 'power2.in' });
    iconTimeoutRef.current = setTimeout(() => {
      icon.textContent = '+';
      gsap.to(icon, { rotate: 0, duration: 0.18, ease: 'power2.out' });
      iconTimeoutRef.current = null;
    }, 140);

    openRef.current = false;
    setOpen(false);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    if (openRef.current) closeContent();
    else openContent();
  };

  // document-level pointer listener that closes when pointer is outside wrapper rect
  useEffect(() => {
    const onPointerMove = (ev) => {
      if (!openRef.current) return;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const x = ev.clientX;
      const y = ev.clientY;

      // If pointer outside rect, close
      if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
        // extra guard: tiny delay to avoid immediate close during rapid clicks
        // but don't queue if already closing
        closeContent();
      }
    };

    // pointermove covers mouse and touch pointer types
    document.addEventListener('pointermove', onPointerMove);

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full sm:w-[45%] lg:w-[90%] lg:mx-auto mt-[2vw] p-[2px]"
    >
      {/* Border layer */}
      <div className="absolute inset-0 z-0 rounded-[10px] border-layer"></div>

      {/* Inner content */}
      <div className="relative z-10 w-full px-[20px] py-[10px] md:py-[20px] flex flex-col justify-center transition-all duration-300 backdrop-blur-[2px] rounded-[10px] bg-[#ffffff17] clip-rounded">
        <div className="flex items-center justify-between gap-4">
          <p
            className={`text-[12px] md:text-[16px] lg:text-[18px] transition-colors duration-300 ${open ? "text-green-500" : "text-white"
              }`}
          >
            {q}
          </p>

          <button
            onClick={handleIconClick}
            aria-expanded={open}
            aria-controls={`faq-content-${id}`}
            className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded cursor-pointer transition-colors duration-300 
          ${open ? "bg-green-500 text-white" : "bg-white text-[#767C9E]"}`}
          >
            <span className="text-[24px] pb-[5px]" ref={iconRef}>
              +
            </span>
          </button>
        </div>

        <div
          id={`faq-content-${id}`}
          ref={contentRef}
          className="overflow-hidden text-white"
          style={{ height: 0, opacity: 0, visibility: "hidden" }}
        >
          <p className="mt-3 text-sm">{a1}</p>
          <p className="mt-2 text-sm">{a2}</p>
        </div>
      </div>
    </div>


  );
}

const SectionSix = () => {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const iconsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (h1Ref.current) {
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
      }
      if (h2Ref.current) {
        gsap.from(h2Ref.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: h2Ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (iconsRef.current) {
        const icons = iconsRef.current.querySelectorAll('.social-icon');

        gsap.fromTo(
          icons,
          { rotation: 360, scale: 0, opacity: 0 },
          {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.4)',
            stagger: 0.12,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        const handlers = [];
        icons.forEach((icon) => {
          const handler = () => {
            gsap.killTweensOf(icon);
            gsap.fromTo(
              icon,
              { rotation: 0, scale: 1 },
              {
                rotation: 360,
                scale: 1.12,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => {
                  gsap.to(icon, { scale: 1, duration: 0.15, ease: 'power2.out' });
                },
              }
            );
          };
          icon.addEventListener('mouseenter', handler);
          handlers.push({ icon, handler });
        });

        iconsRef.current.__hoverHandlers = handlers;
      }
    }, sectionRef);

    return () => {
      const handlers = iconsRef.current?.__hoverHandlers;
      if (handlers && Array.isArray(handlers)) {
        handlers.forEach(({ icon, handler }) => {
          try {
            icon.removeEventListener('mouseenter', handler);
          } catch (e) { }
        });
      }
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="homepage-section-six w-full lg:min-h-[780px] bg-[#000C1B] section-six relative overflow-hidden">
      <div className='w-full h-[83%] bg-[#000c1bf2] absolute bottom-0'></div>

      <div className='w-[0vw] h-[0vw] rounded-full absolute top-[100px] left-[-60px] opacity-[50%] blur-circle2'></div>

      <div className="w-full h-[100px] sm:h-[150px] bg-white pt-[26px] ps-[26px] sm:pt-[39px] sm:ps-[86px]">
        <div className="w-[454px] h-[74px] homepage-section-six-heading">
          <h1 ref={h1Ref} className="border-t-[3px] border-[#4C4886] w-[50px] h-[24px] sm:w-[87px] sm:h-[42px] text-[20px] sm:text-[32px] font-[500]">FAQ's</h1>
          <h2 ref={h2Ref} className="text-[20px] sm:text-[32px] font-[600] text-[#4C4886]"> <span class="bg-gradient-to-r from-[#FA1AC2] via-[#1AE4FA] to-[#1CDE63D9] bg-clip-text text-transparent font-bold">
            Frequently
          </span>
            Asked Questions
          </h2>
        </div>
      </div>
      <div className="w-full p-5">
        {/* Mobile / Tablet Layout (stacked with flex-wrap) */}
        <div className="flex items-center justify-center sm:gap-4 flex-wrap mt-[6vw] mb-[3vw] lg:hidden">
          {faqs.map((f) => (
            <FAQItem key={f.id} id={f.id} q={f.q} a1={f.a1} a2={f.a2} />
          ))}
        </div>

        {/* Large Device Layout (2 fixed columns) */}
        <div className="hidden mx-auto homepage-section-six-faq w-full mt-[40px] lg:grid lg:grid-cols-2">

          <div className="flex flex-col">
            {faqs.slice(0, 3).map((f) => (
              <FAQItem key={f.id} id={f.id} q={f.q} a1={f.a1} a2={f.a2} />
            ))}
          </div>


          <div className="flex flex-col">
            {faqs.slice(3, 6).map((f) => (
              <FAQItem key={f.id} id={f.id} q={f.q} a1={f.a1} a2={f.a2} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-[70px]'>
        <div className='w-full h-[2px] absolute bg-gradient-to-r from-[#1AE4FA] to-[#FA1AC2]'></div>
        <Footer transparent={true} />
      </div>
    </section>
  );
};

export default SectionSix;