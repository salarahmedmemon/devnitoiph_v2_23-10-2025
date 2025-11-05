'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext } from 'react';
import { LoadContext } from '../ClientWrapper';
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
    // 1. states/hook variables
    const { loaded } = useContext(LoadContext);
    const links = [
        { href: '#', text: 'Digital Branding & Communication' },
        { href: '#', text: 'Web Development' },
        { href: '#', text: 'Video Animation' },
        { href: '#', text: 'Digital Marketing' },
        { href: '#', text: 'IT Resource' },
        { href: '#', text: 'UI/UX Design' },
        { href: '#', text: 'Mobile App Development' },
        { href: '#', text: 'E-Commerce Web Development' },
        { href: '#', text: 'Emerging Tech Development' },
    ];
    const contentData = [
        {
            title: 'Digital Branding & Communication',
            image: '/img/homepage/sectiontwo/digitalbranding.png',
            description: `Climb the ladder of success by accumulating more leads and sales with 
      our digital marketing services. We will help you achieve a substaintial ROI in a 
      little time with search engine optimization, social media marketing, and Google Ads with 
      our tried and tested strategies.`,
            listTitle: 'Creating Branding & Communication Agency for Curious Minds:',
            listItemsDesktop: {
                col1: [
                    'Social Media Marketing (SMM)',
                    'Search Engine Optimization (SEO)',
                    'Content Marketing',
                    'Public Relation (PR)'
                ],
                col2: [
                    'Social Media Optimization (SMO)',
                    'Conversion Rate Optimization (CRO)',
                    'Online Reputation Management (ORM)',
                    'Online Translation Services'
                ],
                col3: [
                    'Pay Per Click (PPC)',
                    'Email Marketing',
                    'App Store Optimization (ASO)'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Social Media Marketing (SMM)',
                    'Search Engine Optimization (SEO)',
                    'Content Marketing',
                    'Public Relation (PR)'
                ],
                col2: [
                    'Social Media Optimization (SMO)',
                    'Conversion Rate Optimization (CRO)',
                    'Online Reputation Management (ORM)',
                    'Online Translation Services'
                ]
            },
        },
        {
            title: 'Web Development',
            image: '/img/homepage/sectiontwo/webdevelopment.png',
            description: `Get an edge over your competitors and boost your profitability with magnetic web experiences
      Digital Gravity is the choice of the UAE's leading brands for website design and web 
      development services in Dubai. Whether it's custom web development or Wordpress and
      web development, we make sure you get the best of both worlds in the form of a responsive,
      secure, and high-performance website.`,
            listTitle: 'We provide the following Web Development Services in the UAE:',
            listItemsDesktop: {
                col1: [
                    'Wordpress Development',
                    'Sitecore Development',
                    'ASP.NET Development',
                    'Ibexa DXP',
                    'Angular js Development'
                ],
                col2: [
                    'SharePoint Development',
                    'PHP Development',
                    'CMS Development',
                    'Laravel Development',
                    'Website Maintenance Services',
                ],
                col3: [
                    'Enterprise Development',
                    'Joomla Development',
                    'Drupal Development',
                    'Python Web App Development'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Wordpress Development',
                    'Sitecore Development',
                    'ASP.NET Development',
                    'Ibexa DXP',
                    'Angular js Development'
                ],
                col2: [
                    'SharePoint Development',
                    'PHP Development',
                    'CMS Development',
                    'Laravel Development',
                    'Website Maintenance Services',
                ]
            }
        },
        {
            title: 'Video Animation',
            image: '/img/homepage/sectiontwo/va.jpeg',
            description: `Create bewitching videos for your brand and enthrall your prospective customers.
      Digital Gravity is the best video production company in Dubai you can choose to make 
      yourself look and sound awesome. We create everything you need from explainer videos to 
      sales videos, product videos, branding videos, and a lot more in exactly the way you
      envisioned them.`,
            listTitle: 'Compelling, Aesthetically Appealing & Immersive Video Animation:',
            listItemsDesktop: {
                col1: [
                    'Explainer Video Production',
                    '3D Architectural Walkthrughts',
                    'Whiteboard Animation Video'
                ],
                col2: [
                    'Product Demo Animation',
                    'Medical Animation Studio'
                ],
                col3: [
                    'Video Game Trailer',
                    'Character Animation Video'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Explainer Video Production',
                    '3D Architectural Walkthrughts',
                    'Whiteboard Animation Video'
                ],
                col2: [
                    'Product Demo Animation',
                    'Medical Animation Studio'
                ]
            }
        },
        {
            title: 'Digital Marketing',
            image: '/img/homepage/sectiontwo/digitalmarketing.png',
            description: `Climb the ladder of success by accumulating more leads and sales with 
      our digital marketing services. We will help you achieve a substantial ROI in a little 
      time with search engine optimization, social media marketing, and Google ads with our 
      tried and tested strategies.`,
            listTitle: 'Communicable & Captivating Digital Marketing Services in the UAE:',
            listItemsDesktop: {
                col1: [
                    'Social Media Marketing (SMM)',
                    'Search Engine Optimization (SEO)',
                    'Content Marketing',
                    'Public Reaction (PR)'
                ],
                col2: [
                    'Social Media Optimization (SMO)',
                    'Conversion Rate Optimization (CRO)',
                    'Online Reputation Management (ORM)',
                    'Online Translation Services'
                ],
                col3: [
                    'Pay Per Click (PPC)',
                    'Email Marketing',
                    'App Store Optimization (ASO)'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Social Media Marketing (SMM)',
                    'Search Engine Optimization (SEO)',
                    'Content Marketing',
                    'Public Reaction (PR)'
                ],
                col2: [
                    'Social Media Optimization (SMO)',
                    'Conversion Rate Optimization (CRO)',
                    'Online Reputation Management (ORM)',
                    'Online Translation Services'
                ]
            }
        },
        {
            title: 'IT Resource',
            image: '/img/homepage/sectiontwo/computer.png',
            description: `We are an IT outsourcing company in Dubai offering an extended range of services including End User Support, Application Investment, Cloud & Infrastructure expertise. Our on-demand IT staff outsourcing solution in Dubai specializes exclusively for digital transformation with Custom Software Development, Software Testing & QA, Cloud Computing, Mobile & Web Development, Maintenance & Support, Blockchain Consulting, Data Science, Internet of Things, UI/UX Design, MVP Development, Nearshore/Offshore Software Development.`,
            listTitle: ' Cost-effective and Comprehensive IT Outsourcing Services:',
            listItemsDesktop: {
                col1: [
                    'Hire Mobile App Developer',
                    'Hire Scrum Master in Dubai',
                    'Hire AWS Resources in Dubai',
                    'Hire QA Resources in Dubai',
                    'Hire Node.js Developer in Dubai',
                    'Hire Azure Developer in Dubai',
                ],
                col2: [
                    'Hire React JS Developers in Dubai',
                    'Hire React Native Developers in Dubai',
                    'Hire Sharepoint Developers in Dubai',
                    'Hire Dynamics 365 Developers in Dubai',
                    'Hire Project Managers in Dubai'
                ],
                col3: [
                    'Hire Dot Net Developers in Dubai',
                    'Hire RPA in Dubai',
                    '3D Google Maps Integration',
                    'MarTech Consulting',
                    'Digital Cloud Transformation Solutions'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Hire Mobile App Developer',
                    'Hire Scrum Master in Dubai',
                    'Hire AWS Resources in Dubai',
                    'Hire QA Resources in Dubai',
                    'Hire Node.js Developer in Dubai',
                    'Hire Azure Developer in Dubai',
                ],
                col2: [
                    'Hire React JS Developers in Dubai',
                    'Hire React Native Developers in Dubai',
                    'Hire Sharepoint Developers in Dubai',
                    'Hire Dynamics 365 Developers in Dubai',
                    'Hire Project Managers in Dubai'
                ]
            },
        },
        {
            title: 'UI/UX Design',
            image: '/img/homepage/sectiontwo/uiuxdesign.png',
            description: `Get bespoke user experience that meet all your design needs. 
      We take pride in crafting stunning user interfaces that make it fun for your 
      audience to intract with your brand and come back in the future for more. Whether 
      it's a mobile app or a website, Digital Gravity's team of UX/UI designers is the best you 
      can hire for UX/UI design services in Dubai.`,
            listTitle: 'A Creative UI/UX Design Agency in Dubai with Business Centric Approach:',
            listItemsDesktop: {
                col1: [
                    'PSD To Responnsive HTML',
                    'UX Design Workshop',
                    'Responsive Web Design'
                ],
                col2: [
                    'UX Design',
                    'Landing Page Design',
                ],
                col3: [
                    'UX Audit',
                    'Graphic Design'
                ]
            },
            listItemsMobile: {
                col1: [
                    'PSD To Responnsive HTML',
                    'UX Design Workshop',
                    'Responsive Web Design'
                ],
                col2: [
                    'UX Design',
                    'Landing Page Design',
                ]
            }
        },
        {
            title: 'Mobile App Development',
            image: '/img/homepage/sectiontwo/mobileappdevelopment.png',
            description: `Leverage the power of mobile solutions and create a personalized marketing channel for your audience.
      Digital Gravity offers comprehensive mobile app development services 
      for iOS and Android devices. In the form of native and cross-platform applications, we carve out interfaces that win 
      hearts and accelerate your growth.`,
            listTitle: 'Innovative & Ingenious Mobile App Development Solutions in Dubai:',
            listItemsDesktop: {
                col1: [
                    'Hybrid Apps',
                    'Android App Development',
                    'IOS App Development'
                ],
                col2: [
                    'React Native Apps',
                    'Flutter Apps'
                ],
                col3: [
                    'Progressive Web Apps',
                    'Ruby on Rails (ROR) Development'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Hybrid Apps',
                    'Android App Development',
                    'IOS App Development'
                ],
                col2: [
                    'React Native Apps',
                    'Flutter Apps'
                ]
            }
        },
        {
            title: 'E-Commerce Web Development',
            image: '/img/homepage/sectiontwo/ecommercedevelopment.png',
            description: `Robust, sales-driven, and inituitive eCommerce solutions for online business yearning to scale in a 
      competitive digital landscape. Digital Gravity is recognized as the top eCommerce web development 
      company in Dubai with a team of tech-savvy professionals, who can integrate both simple and complex features into
      your online store.`,
            listTitle: 'You can recieve the following Ecommerce Web Development Services:',
            listItemsDesktop: {
                col1: [
                    'Woo Commerce Development',
                    'Big Commerce Development'
                ],
                col2: [
                    'Miraki Development',
                    'Shopify Ecommerce Development'
                ],
                col3: [
                    'Magento Ecommerce Development',
                    'Shopify Plus Ecommerce Development'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Woo Commerce Development',
                    'Big Commerce Development'
                ],
                col2: [
                    'Miraki Development',
                    'Shopify Ecommerce Development'
                ]
            }
        },
        {
            title: 'Emerging Tech Development',
            image: '/img/homepage/sectiontwo/emergingtechdevelopment.png',
            description: `Emerging technology is a team generally used to describe a new technology, but it may also refer to the
      continuing development of an existing technology; It can have slightly different meaning when used in different areas, such as media, business, science, or education.`,
            listTitle: 'Emerging technology include a variety of technologies such as:',
            listItemsDesktop: {
                col1: [
                    'Educational Technology',
                    'Biotechnology',
                    'Quantum Computing',
                    'Advanced Artificial Intelligence (AAI)'
                ],
                col2: [
                    'Information Technology',
                    'Robotics',
                    'Neurotechnology'
                ],
                col3: [
                    'Nanotechnology',
                    'Climate Intervention Technologies',
                    'Communication'
                ]
            },
            listItemsMobile: {
                col1: [
                    'Educational Technology',
                    'Biotechnology',
                    'Quantum Computing',
                    'Advanced Artificial Intelligence (AAI)'
                ],
                col2: [
                    'Information Technology',
                    'Robotics',
                    'Neurotechnology'
                ]
            }
        },
    ];
    const [activeIndex, setActiveIndex] = useState(4); // Initially IT Resource
    const [translateX, setTranslateX] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isCentering, setIsCentering] = useState(false);
    const navListRef = useRef(null);
    const animationFrameId = useRef(null);
    const animationSpeed = 1;
    const pauseAnimation = () => setAnimating(false);
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const secondColRef = useRef(null);
    const thirdColRef = useRef(null);
    const [image, setImage] = useState(contentData[activeIndex].image);
    const imageRef = useRef(null);

    const currentContent = contentData[activeIndex];

    // ✅ Loader-driven animation
    useEffect(() => {
        if (!loaded || !containerRef.current) return;

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(h1Ref.current, { y: 0, opacity: 1, duration: 0.6 })
                .from(h2Ref.current, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");

            if (imageRef.current) {
                tl.from(imageRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,
                }, "-=0.4");
            }

            if (secondColRef.current) {
                tl.from(secondColRef.current, {
                    x: 60,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.4");
            }

            if (thirdColRef.current) {
                tl.from(thirdColRef.current, {
                    x: 60,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.3");
            }
        }, containerRef);

        return () => ctx.revert();
    }, [loaded]);

    // ✅ Image fade swap on activeIndex change
    useEffect(() => {
        if (!contentData[activeIndex]) return;

        const newImage = contentData[activeIndex].image;
        const img = new window.Image();
        img.src = newImage;

        img.onload = () => {
            gsap.to(imageRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    setImage(newImage);
                    gsap.fromTo(imageRef.current,
                        { opacity: 0, scale: 0.95 },
                        { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
                    );
                },
            });
        };
    }, [activeIndex]);

    // ✅ Scroll animations for headings
    useEffect(() => {
        if (!containerRef.current) return;

        let ctx = gsap.context(() => {
            gsap.from(h1Ref.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: { trigger: h1Ref.current, start: 'top 80%' }
            });

            gsap.from(h2Ref.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: { trigger: h2Ref.current, start: 'top 80%' }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // ✅ Auto scroll loop for nav
    useEffect(() => {
        if (isCentering || !animating) return;

        const listWidth = navListRef.current?.scrollWidth / 4 || 0;
        const step = () => {
            setTranslateX((prev) => {
                let next = prev - animationSpeed;
                if (Math.abs(next) > listWidth) return 0;
                return next;
            });
            animationFrameId.current = requestAnimationFrame(step);
        };
        animationFrameId.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId.current);
    }, [animating, isCentering]);

    // ✅ Initial centering on mount
    useEffect(() => {
        if (!navListRef.current) return;
        const container = navListRef.current.parentElement;
        const containerWidth = container.offsetWidth;
        const linksElements = navListRef.current.querySelectorAll("li");
        const activeLink = linksElements[activeIndex];
        if (!activeLink) return;
        const linkCenter = activeLink.offsetLeft + activeLink.offsetWidth / 2;
        const targetTranslateX = linkCenter - containerWidth / 2;
        setTranslateX(-targetTranslateX);
    }, []);

    // ✅ Scroll animations for content cols
    useEffect(() => {
        if (secondColRef.current) {
            gsap.fromTo(secondColRef.current,
                { x: 150, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                    scrollTrigger: { trigger: secondColRef.current, start: 'top 80%' }
                }
            );
        }
        if (thirdColRef.current) {
            gsap.fromTo(thirdColRef.current,
                { x: 150, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.15,
                    scrollTrigger: { trigger: thirdColRef.current, start: 'top 80%' }
                }
            );
        }
        return () => { ScrollTrigger.getAll().forEach(st => st.kill()); };
    }, []);

    // 2. functions/methods
    const handleClick = (index) => {
        if (!navListRef.current) return;
        setAnimating(false);
        setIsCentering(true);
        setActiveIndex(index);

        const container = navListRef.current.parentElement;
        const containerWidth = container.offsetWidth;
        const linksElements = navListRef.current.querySelectorAll("li");
        const clickedLink = linksElements[index];
        if (!clickedLink) return;

        const linkCenter = clickedLink.offsetLeft + clickedLink.offsetWidth / 2;
        const targetTranslateX = linkCenter - containerWidth / 2;

        const animationDuration = 800;
        const fps = 60;
        const totalFrames = (animationDuration / 1000) * fps;
        let frame = 0;

        const startTranslateX = translateX;
        const deltaX = -targetTranslateX - startTranslateX;

        const animateToCenter = () => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const currentTranslateX = startTranslateX + deltaX * easeProgress;
            setTranslateX(currentTranslateX);
            if (frame < totalFrames) {
                animationFrameId.current = requestAnimationFrame(animateToCenter);
            } else {
                setIsCentering(false);
                setAnimating(false);
            }
        };

        animationFrameId.current = requestAnimationFrame(animateToCenter);
    };

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div ref={containerRef} className="w-full h-[600px] sm:h-[1300px] lg:h-[850px] overflow-hidden relative bg-[#EEEEEE]">

            {/* RIGHT CIRCLE */}
            <div className='homepage-sectionone-rightcircle w-[140px] sm:w-[300px] lg:w-[405.06px] h-[140px] sm:h-[300px] lg:h-[405.06px] rounded-full bg-[#BAD3EF] absolute top-[-20px] right-[-60px] sm:top-[-50px] lg:top-[16px] sm:right-[-150px] lg:right-[-200px] xl:left-[85%] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#E2E8EE] to-[#E9EBEE]'></div>
            </div>

            {/* LEFT CIRCLE */}
            <div className='w-[185.26px] h-[185.26px] sm:w-[400px] sm:h-[400px] lg:w-[754px] lg:h-[754px] rounded-full bg-[#fff] absolute bottom-[-20px] left-[-40px] sm:bottom-[-30px] sm:left-[-160px] lg:bottom-[-200px] lg:left-[-160px] p-[3px]'>
                <div className='w-full h-full rounded-full bg-gradient-to-b from-[#F2F3F5] to-[#F1F2F2]'></div>
            </div>

            {/* HEADING */}
            <div className="flex flex-col items-center justify-center pt-[15px] sm:pt-[50px] md:pt-[70px]">
                <div className="w-[186px] h-[31px] sm:w-[352px] sm:h-[42px] border-t-[3px] sm:border-t-[5px] md:border-t-[3px] flex items-center justify-center border-[#4C4886]">
                    <h1 ref={h1Ref} className="font-[500] opacity-100 text-[16px] sm:text-[32px] text-[#0A1119]">Services We Offering</h1>
                </div>
                <h2 ref={h2Ref} className="w-[202px] opacity-100 h-[14px] sm:w-[399px] sm:h-[28px] text-[20px] sm:text-[40px] font-[600] text-center text-[#4C4886]">Certified Excellence</h2>
            </div>

            {/* NAVIGATIONS */}
            <div className="nav-wrapper w-full sm:w-[768px] lg:w-[1024px] xl:w-[1280px] h-[40px] sm:h-[60px] mt-[24px] sm:mt-[70px] lg:mt-[60px] xl:mt-[50px] mx-auto overflow-hidden relative"
            style={{
                WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
            }}
            >
                
                <ul
                    className="nav-list flex whitespace-nowrap gap-[20px] text-[8px] sm:text-[20px] md:text-[18px] lg:text-[14px] xl:text-[12px] absolute top-0"
                    ref={navListRef}
                    onMouseEnter={pauseAnimation}
                    style={{
                        transform: `translateX(${translateX}px)`,
                        transition: isCentering ? 'none' : 'transform 0.5s ease',
                    }}
                >
                    {[...links, ...links].map((link, i) => (
                        <li
                            key={i}
                            className={`nav-item inline-block cursor-pointer ${i % links.length === activeIndex
                                ? 'text-[12px] sm:text-[26px] md:text-[22px] xl:text-[20px] font-[500] h-[30px] leading-[18px] cursor-pointer'
                                : 'text-[#ADADAD] h-[30px] leading-[22px] cursor-pointer'
                                }`}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!isCentering) handleClick(i % links.length);
                                }}
                                className="px-2 py-1 whitespace-nowrap inline-block"
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* MAIN CONTENT WITH IMAGE */}
            {/* {currentContent && ( */}
            <div className="w-full sm:w-[640px] lg:w-[940px] xl:w-[1262px] h-[344px] z-[2000] mt-[0px] sm:mt-[20px] lg:mt-[95px] mx-auto flex flex-col lg:flex-row gap-[5px] sm:gap-[20px]">
                {/* FIRST COLUMN FOR IMAGES IN JUST SMALL DEVICES sm - md */}
                <div className="flex justify-center lg:hidden">
                    <div className="w-[290px] h-[173px] sm:w-[600px] lg:w-[350px] xl:w-[550px] sm:h-[400px] lg:h-[240px] xl:h-[344px] z-[1000]">
                        <div className='w-full h-full relative'>
                            <Image
                                ref={imageRef}
                                src={image}
                                fill
                                placeholder="blur"
                                blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA=="
                                alt="service"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* FIRST COLUMN FOR IMAGES IN JUST FOR LARGE DEVICES */}
                <div className="hidden lg:block w-[600px] lg:w-[350px] xl:w-[550px] h-[400px] lg:h-[240px] xl:h-[344px] z-[1000]">
                    <img ref={imageRef} src={image} alt='image' className='w-full h-full object-contain' />
                    {/* <div className='w-full h-full relative'>
                        <Image
                            ref={imageRef}
                            src={image}
                            fill
                            placeholder='blur'
                            alt="service"
                            className="object-cover"
                            blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBA=="

                        />
                    </div> */}
                </div>

                {/* SECOND COLUMN FOR CONTENT */}
                <div ref={secondColRef} className="z-[1000] w-[98%] h-[161px] sm:w-[640px] sm:h-[341px] ms-[10px] sm:ms-[10px] md:ms-[30px] flex flex-col">
                    <h2 className="text-[16px] sm:text-[26px] lg:text-[24px] xl:text-[28px] font-[400] text-[#0A1119] border-l-[3px] border-[#4C4886] ps-[5px]"> {currentContent.title}</h2>

                    <p className="text-[8px] sm:text-[16px] lg:text-[12px] font-[400] pt-[20px] text-[#666666] pe-[14px] sm:pe-0">{currentContent.description}</p>

                    <span className="text-[8px] sm:text-[16px] lg:text-[12px] font-[700] text-[#4C4886] pt-[10px] sm:pt-[20px]">{currentContent.listTitle}</span>

                    {/* LIST ITEMS FOR DESKTOP */}
                    <ul className="hidden lg:flex w-[780px] lg:w-[580px] xl:w-[640px] md:h-[115px] z-[1000] pt-[30px] md:pt-[60px] lg:pt-[20px] list-disc list-inside items-center justify-between xl:gap-[20px] flex-wrap">
                        {Array.isArray(currentContent.listItemsDesktop)
                            ? currentContent.listItemsDesktop.map((item, i) => (
                                <li key={i} className="text-[14px] lg:text-[10px] font-[600] text-[#666666]">{item}</li>
                            ))
                            : Object.entries(currentContent.listItemsDesktop).map(([colKey, colItems], colIndex) => (
                                <div key={colIndex} className="w-[260px] lg:w-[174px] h-[115px] flex flex-col items-center justify-center lg:gap-[5px]">
                                    <ul className="list-disc text-[13px] lg:text-[10px] font-[600] text-[#666666]">
                                        {colItems.map((item, i) => (
                                            <li key={i} className="mt-1">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </ul>

                    {/* LIST ITEMS FOR MOBILE */}
                    <ul className="flex lg:hidden sm:w-[620px] ps-[14px] lg:w-[580px] xl:w-[640px] md:h-[115px] z-[1000] pt-[30px] md:pt-[60px] lg:pt-[20px] list-disc list-inside items-center justify-baseline gap-[10px] sm:gap-[60px] xl:gap-[20px] flex-wrap">
                        {Array.isArray(currentContent.listItemsMobile)
                            ? currentContent.listItemsMobile.map((item, i) => (
                                <li key={i} className="text-[14px] lg:text-[10px] font-[600] text-[#666666]">{item}</li>
                            ))
                            : Object.entries(currentContent.listItemsMobile).map(([colKey, colItems], colIndex) => (
                                <div key={colIndex} className="lg:w-[174px] md:h-[115px] flex flex-col items-center justify-center lg:gap-[5px] pe-[14px] sm:pe-0">
                                    <ul className="list-disc text-[7px] sm:text-[16px] md:text-[13px] lg:text-[10px] font-[600] text-[#666666]">
                                        {colItems.map((item, i) => (
                                            <li key={i} className="mt-1">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </ul>
                </div>

                {/* THIRD COLUMN FOR NAVIGATION */}
                <div ref={thirdColRef} className="hidden lg:flex w-[32px] h-[344px] items-center justify-center z-[1000]">
                    <div className='w-full h-[176px] rounded-[20px] bg-[#EEEEEE] py-[6px] px-[11px] flex flex-col gap-[10px] shadow-[-1px_0px_5px_0px_rgba(0,0,0,0.05)]'>
                        {contentData.map((_, idx) => (
                            <div key={idx} className={`w-[10px] h-[10px] rounded-full ${idx === activeIndex ? 'bg-blue-950' : 'bg-transparent border'}`}></div>
                        ))}
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

export default SectionTwo;