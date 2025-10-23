"use client";

import Header from "../components/Header";
import { useContext, useLayoutEffect, useRef } from "react";
import { LoadContext } from "../components/ClientWrapper";
import Image from "next/image";
import gsap from "gsap";
import SectionOne from "../components/AboutPage/SectionOne";
import SectionTwo from "../components/AboutPage/SectionTwo";
import SectionThree from "../components/AboutPage/SectionThree";
import {SectionFour as SF} from "../components/HomePage/SectionFour";
import SectionFour from "../components/AboutPage/SectionFour";
import SectionFive from "../components/AboutPage/SectionFive";
import Footer from "../components/Footer";

const Page = () => {
    // 1. states/hook variables
    const { loaded } = useContext(LoadContext);
    const sectionRef = useRef();

    useLayoutEffect(() => {
        if(!loaded || !sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, ease: "power3.out" }
            )
        }, sectionRef);

        return () => ctx.revert();
    }, [loaded]);

    // 2. functions/methods

    // 3. return statement/jsx
    return (
        <div className="overflow-hidden">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <div className="hidden md:block"> <SF /> </div>
            <SectionFour />
            <SectionFive />
            <Footer />
        </div>
    )
};

export default Page;