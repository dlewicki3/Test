import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O3.css";

const O3 = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.fromTo(".anime", {
            opacity: 1,
      
        }, {
            opacity: 0,
  
            scrollTrigger: {
                trigger: ".o3",
                start: "top center",
                end: "60% center",
                scrub: true,
            }
        });
    }, []);

    return (
        <div className="o3">
            <div className="anime">SORA</div>
        </div>
    );
}

export default O3;
