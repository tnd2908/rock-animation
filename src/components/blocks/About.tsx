"use client";
import { motion, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

const paragraphs = [
    {
        title: "TITLE 1",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum rerum soluta commodi? Minus officia ab nisi eum dolorum optio nihil deserunt possimus impedit corrupti rem modi, illo ipsam perspiciatis.",
    },
    {
        title: "TITLE 2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum rerum soluta commodi? Minus officia ab nisi eum dolorum optio nihil deserunt possimus impedit corrupti rem modi, illo ipsam perspiciatis.",
    },
];
type Props = {
    scrollYProgress: MotionValue;
};
const About = ({scrollYProgress}: Props) => {
    const opacity = useTransform(scrollYProgress, [0, 0.25], ["0", "1"]);
    const scale = useTransform(scrollYProgress, [0.15, 0.4], ["1.3", "1"]);
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.25],
        [
            "ellipse(70% 70% at 0% 50%)", 
            "ellipse(0% 70% at 0% 50%)",
        ]
    );
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.23, 0.28],
        ["#D3D8C0", "#EEEFE1"]
    );
    const stripeWidth = useTransform(scrollYProgress, [0.35, 3.85], [100, 0]);

    const maskImage = useTransform(stripeWidth, (width) =>  {
        return `repeating-linear-gradient(to right, 
            black 0% ${width-87}%, transparent ${width-87}% 3.3333333333333335%, 
            black 3.3333333333333335% ${width-84}%, transparent ${width-84}% 6.666666666666667%, 
            black 6.666666666666667% ${width-81}%, transparent ${width-81}% 10%, 
            black 10% ${width-78}%, transparent ${width-78}% 13.333333333333334%, 
            black 13.333333333333334% ${width-75}%, transparent ${width-75}% 16.666666666666668%, 
            black 16.666666666666668% ${width-72}%, transparent ${width-72}% 20%, 
            black 20% ${width-69}%, transparent ${width-69}% 23.333333333333336%, 
            black 23.333333333333336% ${width-66}%, transparent ${width-66}% 26.666666666666668%, 
            black 26.666666666666668% ${width-63}%, transparent ${width-63}% 30%, 
            black 30% ${width-60}%, transparent ${width-60}% 33.333333333333336%, 
            black 33.333333333333336% ${width-57}%, transparent ${width-57}% 36.66666666666667%, 
            black 36.66666666666667% ${width-54}%, transparent ${width-54}% 40%, 
            black 40% ${width-51}%, transparent ${width-51}% 43.333333333333336%, 
            black 43.333333333333336% ${width-48}%, transparent ${width-48}% 46.66666666666667%,
            black 46.66666666666667% ${width-45}%, transparent ${width-45}% 50%, 
            black 50% ${width-42}%, transparent ${width-42}% 53.333333333333336%, 
            black 53.333333333333336% ${width-39}%, transparent ${width-39}% 56.66666666666667%, 
            black 56.66666666666667% ${width-36}%, transparent ${width-36}% 60%, 
            black 60% ${width-33}%, transparent ${width-33}% 63.333333333333336%, 
            black 63.333333333333336% ${width-30}%, transparent ${width-30}% 66.66666666666667%, 
            black 66.66666666666667% ${width-27}%, transparent ${width-27}% 70%, 
            black 70% ${width-24}%, transparent ${width-24}% 73.33333333333334%, 
            black 73.33333333333334% ${width-21}%, transparent ${width-21}% 76.66666666666667%, 
            black 76.66666666666667% ${width-18}%, transparent ${width-18}% 80%, 
            black 80% ${width-15}%, transparent ${width-15}% 83.33333333333334%, 
            black 83.33333333333334% ${width-12}%, transparent ${width-12}% 86.66666666666667%, 
            black 86.66666666666667% ${width-9}%, transparent ${width-9}% 90%, 
            black 90% ${width-6}%, transparent ${width-6}% 93.33333333333334%, 
            black 93.33333333333334% ${width-3}%, transparent ${width-3}% 96.66666666666667%, 
            black 96.66666666666667% ${width}%, transparent ${width}% 100%
        )`
    }
    );

    return (
        <motion.section 
            className="relative h-screen w-full min-w-screen bg-light"
            style={{
                maskImage,
            }}
        >
            <motion.div
                style={{
                    // clipPath: `ellipse(40% 50% at 0% 50%)`,
                    clipPath,
                    // backgroundColor
                }}
                className="absolute top-0 left-0 z-10 h-screen w-1/2 bg-[#D3D8C0]"></motion.div>
            {/* <Image width={1200} height={1200} className='block object-cover fixed w-[300px] -z-10 right-0  h-full' src="/nhi/nhi.png" alt="Nhi" /> */}
            <div className="grid-cols-12 md:grid">
                <div className="col-span-7 container mr-0 flex flex-col justify-between pt-24 pb-16 2xl:pt-40">
                    <motion.p
                        // style={{opacity, x: y3}}
                        className="text-2xl lg:text-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, odit blanditiis! Voluptatum ab esse fugit voluptates a atque, aliquam iure architecto, reprehenderit doloremque, iusto asperiores dolorum nostrum voluptate quasi quod.
                    </motion.p>
                    <div className="grid grid-cols-6 gap-6">
                        {paragraphs.map((paragraph, i) => (
                            <motion.div
                                style={{ opacity}}
                                key={paragraph.title}
                                className="col-span-full space-y-4 lg:col-span-3">
                                <h2 className="text-xl sm:text-2xl">
                                    {paragraph.title}
                                </h2>
                                <p>{paragraph.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* <div>
                        <Image
                            width={500}
                            height={500}
                            className="size-[150px]"
                            src="/image-2.jpeg"
                            alt="nhi"
                        />
                    </div> */}
                </div>
                <div className="relative col-span-5 col-start-8 h-screen w-full overflow-hidden bg-black">
                    <motion.img
                        style={{scale}}
                        width={1200}
                        height={1200}
                        className="absolute block h-full w-full object-cover"
                        src="/image-1.jpeg"
                        alt="Nhi"
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default About;
