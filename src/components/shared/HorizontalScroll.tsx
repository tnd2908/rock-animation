"use client";
import { useRef } from "react";
import About from "../blocks/About";
import Skills from "../blocks/Skills";
import Welcome from "../blocks/Welcome";
import { motion, useScroll, useTransform } from "framer-motion";
import { section } from "framer-motion/client";
import { ReactLenis } from "lenis/react";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const sections = [
        {
            id: 1,
            color: "bg-sky-500",
            component: (props: any) => Welcome({ ...props }),
        },
        {
            id: 2,
            color: "bg-rose-500",
            component: (props: any) => About({ ...props }),
        },
        {
            id: 3,
            color: "bg-emerald-500",
            component: (props: any) => Skills({ ...props }),
        },
        {
            id: 4,
            color: "bg-amber-500",
            component: (props: any) => Welcome({ ...props }),
        },
    ];

    return (
        <ReactLenis 
          root
          options={{
            lerp: 0.05,
            duration: 2,
          }}
        >
            <div ref={targetRef} className="font-manrope relative h-[400vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <motion.div style={{ x }} className="flex h-full w-[400vw]">
                        {sections.map((section) => (
                            <section.component
                                scrollYProgress={scrollYProgress}
                                key={section.id}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </ReactLenis>
    );
};

export default HorizontalScrollCarousel;