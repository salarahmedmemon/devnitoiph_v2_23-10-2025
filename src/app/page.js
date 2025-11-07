"use client";

import { useContext, useLayoutEffect, useRef } from "react";
import { LoadContext } from "./components/ClientWrapper";
import SectionOne from "./components/HomePage/SectionOne";
import SectionTwo from "./components/HomePage/SectionTwo";
import {SectionFour} from "./components/HomePage/SectionFour";
import SectionFive from "./components/HomePage/SectionFive";
import SectionSix from "./components/HomePage/SectionSix";
import gsap from "gsap";
import SectionThree from "./components/HomePage/SectionThree";
import UpdatedHeader from "./components/UpdatedHeader.jsx";

const page = () => {
  // 1. states/hook variables
  const { loaded } = useContext(LoadContext);
  const sectionRef = useRef();

  useLayoutEffect(() => {
    if(!sectionRef || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      )
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);

  // 2. functions/methods

  // 3. return statement/jsx
  return (
    <div>
      <UpdatedHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  )
};

export default page;