/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const mobileMenuRef = useRef(null);

    useGSAP(() => {
        // Initial navbar animation on load
        gsap.fromTo(navRef.current, 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
        );

        // Logo floating animation
        gsap.to(logoRef.current, {
            y: "0.5rem",
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
        });

        // Stagger animation for nav links
        gsap.fromTo(linksRef.current, 
            { y: 20, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "power3.out",
                delay: 0.8
            }
        );

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            setIsScrolled(scrolled);
            
            // Parallax effect for navbar
            gsap.to(navRef.current, {
                backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
                duration: 0.3,
                ease: "power2.out"
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLaunchApp = () => {
        // Button press animation
        gsap.to(event.target, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });

        toast.success("Initializing Ryze Engine... Coming Soon!", {
            style: {
                background: "#2d1606",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "1rem",
                fontSize: "14px",
            },
            iconTheme: {
                primary: "#ff8c37",
                secondary: "#fff",
            },
        });
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        
        if (!isMobileMenuOpen) {
            // Open animation
            gsap.fromTo(mobileMenuRef.current,
                { opacity: 0, scale: 0.8, rotationY: -90 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    rotationY: 0,
                    duration: 0.6, 
                    ease: "back.out(1.7)" 
                }
            );
            
            gsap.fromTo(mobileMenuRef.current.querySelectorAll('.mobile-link'),
                { x: -100, opacity: 0 },
                { 
                    x: 0, 
                    opacity: 1, 
                    duration: 0.8, 
                    stagger: 0.1, 
                    delay: 0.2,
                    ease: "power3.out" 
                }
            );
        }
    };

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Product", href: "#product" },
        { name: "Business", href: "#business" },
    ];

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ease-in-out ${
                isScrolled
                    ? "py-4 bg-orange-600/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "py-6 bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 group">
                    <div 
                        ref={logoRef}
                        className="w-9 h-9 bg-orange-950 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-300 shadow-md relative overflow-hidden"
                        onMouseEnter={() => {
                            gsap.to(logoRef.current, {
                                scale: 1.1,
                                rotationY: 180,
                                duration: 0.6,
                                ease: "back.out(1.7)"
                            });
                        }}
                        onMouseLeave={() => {
                            gsap.to(logoRef.current, {
                                scale: 1,
                                rotationY: 0,
                                duration: 0.6,
                                ease: "back.out(1.7)"
                            });
                        }}
                    >
                        <div className="w-3.5 h-3.5 bg-white rounded-sm rotate-45" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                        Ryze<span className="text-orange-950 not-italic">.AI</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                ref={el => linksRef.current[index] = el}
                                className="text-[11px] uppercase tracking-[0.25em] font-black text-white/90 hover:text-orange-950 transition-colors relative group"
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        y: -3,
                                        scale: 1.05,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        y: 0,
                                        scale: 1,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }}
                            >
                                {link.name}
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-950 group-hover:w-full transition-all duration-300"></div>
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={handleLaunchApp}
                        className="px-8 py-2.5 bg-orange-950 text-white text-[11px] font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-orange-950 transition-all duration-300 shadow-xl active:scale-95 relative overflow-hidden group"
                        onMouseEnter={(e) => {
                            gsap.to(e.target, {
                                scale: 1.05,
                                boxShadow: "0 25px 60px rgba(45,22,6,0.4)",
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }}
                        onMouseLeave={(e) => {
                            gsap.to(e.target, {
                                scale: 1,
                                boxShadow: "0 20px 50px rgba(45,22,6,0.3)",
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }}
                    >
                        <span className="relative z-10">Launch App</span>
                        <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div 
                    ref={mobileMenuRef}
                    className="fixed inset-0 w-full h-screen bg-linear-to-br from-orange-600 via-orange-500 to-red-500 flex flex-col p-8 md:hidden"
                    style={{ perspective: "1000px" }}
                >
                    <div className="flex justify-between items-center mb-16">
                         <div className="text-white font-black text-2xl tracking-tighter italic">RYZE.AI</div>
                         <button 
                            onClick={toggleMobileMenu} 
                            className="text-white hover:rotate-90 transition-transform duration-300"
                         >
                            <HiX size={32}/>
                         </button>
                    </div>
                    <div className="flex flex-col gap-8">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={toggleMobileMenu}
                                className="mobile-link text-5xl font-black text-orange-950/30 hover:text-white transition-all uppercase tracking-tighter transform-gpu"
                                onMouseEnter={(e) => {
                                    gsap.to(e.target, {
                                        x: 20,
                                        scale: 1.05,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }}
                                onMouseLeave={(e) => {
                                    gsap.to(e.target, {
                                        x: 0,
                                        scale: 1,
                                        duration: 0.3,
                                        ease: "power2.out"
                                    });
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button 
                            onClick={() => {
                                toggleMobileMenu();
                                handleLaunchApp();
                            }}
                            className="mobile-link mt-8 w-full py-5 bg-orange-950 text-white font-black uppercase tracking-widest rounded-2xl text-lg shadow-2xl relative overflow-hidden group"
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <span className="absolute inset-0 flex items-center justify-center text-orange-950 font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">Get Started</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;