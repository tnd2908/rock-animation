"use client";
import { MotionValue, useTransform, motion } from "framer-motion";
import React from "react";
type Props = {
    scrollYProgress: MotionValue;
};

const Welcome = ({ scrollYProgress }: Props) => {
    const x2 = useTransform(scrollYProgress, [0.05, 0.25], ["0%", "-50%"]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.25], [1, 0]);
    // const backgroundColor = useTransform(
    //     scrollYProgress,
    //     // [0.23, 0.28],
    //     [0, 0.2],
    //     ["#D3D8C0", "#EEEFE1"]
    // );
    // const stripeWidth = useTransform(scrollYProgress, [0, 3.5], [100, 0]);

    // const maskImage = useTransform(stripeWidth, (width) =>  {
    //     return `repeating-linear-gradient(to right, 
    //         black 0% ${width-87}%, transparent ${width-87}% 3.3333333333333335%, 
    //         black 3.3333333333333335% ${width-84}%, transparent ${width-84}% 6.666666666666667%, 
    //         black 6.666666666666667% ${width-81}%, transparent ${width-81}% 10%, 
    //         black 10% ${width-78}%, transparent ${width-78}% 13.333333333333334%, 
    //         black 13.333333333333334% ${width-75}%, transparent ${width-75}% 16.666666666666668%, 
    //         black 16.666666666666668% ${width-72}%, transparent ${width-72}% 20%, 
    //         black 20% ${width-69}%, transparent ${width-69}% 23.333333333333336%, 
    //         black 23.333333333333336% ${width-66}%, transparent ${width-66}% 26.666666666666668%, 
    //         black 26.666666666666668% ${width-63}%, transparent ${width-63}% 30%, 
    //         black 30% ${width-60}%, transparent ${width-60}% 33.333333333333336%, 
    //         black 33.333333333333336% ${width-57}%, transparent ${width-57}% 36.66666666666667%, 
    //         black 36.66666666666667% ${width-54}%, transparent ${width-54}% 40%, 
    //         black 40% ${width-51}%, transparent ${width-51}% 43.333333333333336%, 
    //         black 43.333333333333336% ${width-48}%, transparent ${width-48}% 46.66666666666667%,
    //         black 46.66666666666667% ${width-45}%, transparent ${width-45}% 50%, 
    //         black 50% ${width-42}%, transparent ${width-42}% 53.333333333333336%, 
    //         black 53.333333333333336% ${width-39}%, transparent ${width-39}% 56.66666666666667%, 
    //         black 56.66666666666667% ${width-36}%, transparent ${width-36}% 60%, 
    //         black 60% ${width-33}%, transparent ${width-33}% 63.333333333333336%, 
    //         black 63.333333333333336% ${width-30}%, transparent ${width-30}% 66.66666666666667%, 
    //         black 66.66666666666667% ${width-27}%, transparent ${width-27}% 70%, 
    //         black 70% ${width-24}%, transparent ${width-24}% 73.33333333333334%, 
    //         black 73.33333333333334% ${width-21}%, transparent ${width-21}% 76.66666666666667%, 
    //         black 76.66666666666667% ${width-18}%, transparent ${width-18}% 80%, 
    //         black 80% ${width-15}%, transparent ${width-15}% 83.33333333333334%, 
    //         black 83.33333333333334% ${width-12}%, transparent ${width-12}% 86.66666666666667%, 
    //         black 86.66666666666667% ${width-9}%, transparent ${width-9}% 90%, 
    //         black 90% ${width-6}%, transparent ${width-6}% 93.33333333333334%, 
    //         black 93.33333333333334% ${width-3}%, transparent ${width-3}% 96.66666666666667%, 
    //         black 96.66666666666667% ${width}%, transparent ${width}% 100%
    //     )`
    // }
    // );

    return (
        <motion.section
            className="relative flex h-screen w-full min-w-screen flex-col justify-between overflow-hidden bg-primary">
            {/* <motion.p className="max-w-3xl text-3xl lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum rerum soluta commodi? Minus officia ab nisi eum dolorum optio nihil deserunt possimus impedit corrupti rem modi, illo ipsam perspiciatis.
            </motion.p>
            <motion.div style={{x: x2, opacity}} className="ml-auto space-y-6">
                <img className="block" src="/nhi/logo.svg" alt="" />
                <div className="flex items-center gap-5">
                    <span className="text-2xl font-semibold text-nowrap md:text-3xl lg:text-4xl">
                        Title
                    </span>
                </div>
            </motion.div> */}
            <div className="relative isolate h-full overflow-hidden from-indigo-100/20 dark:from-indigo-950/10">
                <div className="pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="max-w-2xl mx-auto">
                            <div className="max-w-lg">
                                <img
                                    alt="Your Company"
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-11 dark:hidden"
                                />
                                <img
                                    alt="Your Company"
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-11 not-dark:hidden"
                                />
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <a href="#" className="inline-flex space-x-6">
                                        <span className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white ring-1 ring-white ring-inset">
                                            What's new
                                        </span>
                                        <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-100">
                                            <span>Just shipped v1.0</span>
                                        </span>
                                    </a>
                                </div>
                                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                                    Supercharge your web app
                                </h1>
                                <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8 text-white">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-stone-500 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Documentation
                                    </a>
                                    <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                        View on GitHub <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36 dark:bg-gray-800/30 dark:shadow-indigo-400/10 dark:ring-white/5"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className="bg-light [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                                <div
                                    aria-hidden="true"
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 inset-ring inset-ring-white md:ml-20 lg:ml-36"
                                />
                                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                                    <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                        NotificationSetting.jsx
                                                    </div>
                                                    <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                                </div>
                                            </div>
                                            <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                                        </div>
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl dark:ring-white/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32 dark:from-gray-900" /> */}
            </div>
        </motion.section>
    );
};

export default Welcome;
