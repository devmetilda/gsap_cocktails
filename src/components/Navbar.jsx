import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navLinks } from "../constants/index.jsx";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "top top",
                end: "bottom+=100 top",
                scrub: true,
            },
        });

        navTween.fromTo(
            "nav",
            { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
            {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)",
                ease: "power1.out",
            }
        );
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <div className="container mx-auto flex items-center justify-between p-4">
                <a href="/" className="flex items-center gap-2 text-white font-bold text-lg">
                    <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
                    Velvet Pour
                </a>

                <ul className="flex gap-4 text-white">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="hover:underline">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
