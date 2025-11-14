import { MotionValue } from "framer-motion";

type Props = {
    scrollYProgress: MotionValue;
};

const data = [
    {
        title: "Title Heading",
        items: [
            "Điền gì đó ở đây 1 dòng",
            "Điền gì đó ở đây 1 dòng",
            "Điền gì đó ở đây 1 dòng",
            "Điền gì đó ở đây 1 dòng",
        ],
    },
    {
        title: "Title Heading",
        items: [
            "Điền gì đó ở đây 1 dòng",
            "Điền gì đó ở đây 1 dòng",
            "Điền gì đó ở đây 1 dòng",
            "Điền gì đó ở đây 1 dòng",
        ],
    },
];
const Skills = ({scrollYProgress}: Props) => {
    return (
        <section className="relative h-screen w-full min-w-screen bg-[#EEEFE1]">
            <div className="container flex lg:flex-nowrap flex-wrap h-full w-full items-center gap-6">
                {data.map((e, index) => (
                    <div key={`skill-${index}`} className="w-full lg:w-1/2 md:space-y-16 space-y-12">
                        <div className="pb-4 border-b border-[#404B47]">
                            <span className="text-6xl font-semibold sm:text-[90px] lg:text-[150px]">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-lg font-semibold">
                                {e.title}
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {e.items.map((item, i) => (
                                <div key={`item-${i}`} className="flex group gap-3 in-checked:">
                                    <span className="group-hover:text-2xl duration-300 !leading-[32px] group-hover:font-semibold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
