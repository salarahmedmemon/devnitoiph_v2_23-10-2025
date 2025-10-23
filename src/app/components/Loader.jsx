"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const el = loaderRef.current;
    // show for 700ms then fade
    const tl = gsap.timeline({
      onComplete: () => {
        // fade is done — notify parent
        if (typeof onComplete === "function") onComplete();
      }
    });

    tl.to(el, { opacity: 1, duration: 0 });     // ensure visible immediately
    tl.to(el, { delay: 0.6, opacity: 0, duration: 0.6 });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-[#fff] flex items-center justify-center z-[9999]"
      style={{ opacity: 1 }}
    >
    </div>
  );
}
