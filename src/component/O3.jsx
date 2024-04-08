import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import "./O3.css";

gsap.registerPlugin(ScrollTrigger);

const O3 = () => {

  useEffect(() => {
    gsap.fromTo(".anime", {
      opacity: 1,
    }, {
      opacity: 0,
      y: 0, // Przywrócenie pozycji pojawionego elementu
      scrollTrigger: {
        trigger: ".k3",
        duration: 2, // Zwiększenie czasu trwania animacji
        start: "200px top", // Animacja rozpocznie się, gdy górna krawędź .k3 będzie w centrum widoku
        end: "60%", // Animacja zakończy się, gdy dolna krawędź .k3 będzie w centrum widoku
        scrub: true,
        markers: true,
      }
    });
  }, []);

  return (
    <div className="o3">
      <div className="k3">
        <div className="anime">SORA</div>
      </div>

    </div>
  );
}

export default O3;