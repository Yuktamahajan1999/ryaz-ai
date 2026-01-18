// App.jsx
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './Components/Navbar.jsx';
import Hero from './Sections/Hero.jsx';
import Features from './Sections/Features.jsx';
import Product from './Sections/Product.jsx';
import Business from './Sections/Business.jsx';
import Footer from './Components/Footer.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef();

  useGSAP(() => {
    const sections = gsap.utils.toArray('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 100, scale: 0.95 }, 
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 40%",
            scrub: 2, 
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    gsap.to('.marquee-content', {
      xPercent: -20, 
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    gsap.to('.blur-ball', {
      y: (i) => i === 0 ? -100 : 100,
      x: (i) => i === 0 ? 50 : -50,
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 3,
      }
    });

    gsap.to('.navbar', {
      backgroundColor: 'rgba(255, 95, 31, 0.1)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      scrollTrigger: {
        trigger: 'main',
        start: 'top -100',
        toggleActions: 'play none none reverse',
      },
    });

  }, { scope: appRef });

  return (
    <main ref={appRef} className="relative min-h-screen text-white overflow-x-hidden bg-[#ff5f1f]">
      
      {/* GENTLE RAIN STYLE BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-br from-[#ff5f1f] via-[#ff7518] to-[#e65100]" />
        
        <div className="blur-ball absolute top-[-5%] left-[-10%] w-[80vw] h-[80vw] bg-white/10 rounded-full blur-[150px]" />
        <div className="blur-ball absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-black/5 rounded-full blur-[120px]" />
      </div>

      <Navbar className="navbar fixed top-0 w-full z-50" />

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <section id="home"> <Hero /> </section>
        <section id="features" className="py-20"> <Features /> </section>
        <section id="product" className="py-20"> <Product /> </section>
        <section id="business" className="py-20"> <Business /> </section>
        <Footer />
      </div>
    </main>
  );
}