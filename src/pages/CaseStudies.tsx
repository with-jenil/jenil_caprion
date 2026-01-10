import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, FileText, Palette, Rocket, Code } from "lucide-react";

const CaseStudies = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            {/* <Navbar /> */}

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                            Our Work
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Case <span className="text-gradient bg-gradient-accent">Studies</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore how we've helped our partners achieve their goals through innovative solutions and strategic design.
                        </p>
                    </motion.div>


                </div>

                {/* WORK PROCESS SECTION */}
                <div className="mt-10 md:mt-32 relative">
                    <div className="text-center mb-16 md:mb-24">
                        {/* <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif">
                            OUR <span className="italic font-light">WORK</span> <span className="text-gradient bg-gradient-accent">PROCESS</span>
                        </h2> */}
                        {/* Decorative dots for title */}
                        <motion.div
                            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-[20%] w-3 h-3 rounded-full bg-primary/40 blur-sm hidden lg:block"
                        />
                        <motion.div
                            animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-full left-[15%] w-2 h-2 rounded-full bg-accent/40 blur-sm hidden lg:block"
                        />
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* ZigZag Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                                <path
                                    d="M 100 50 L 300 150 L 500 50 L 700 150 L 900 50"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="8 8"
                                    className="text-primary/30"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {[
                                {
                                    step: 1,
                                    title: "DISCOVERY PHASE",
                                    desc: "We begin by getting to know you and your business.",
                                    icon: <Search className="w-6 h-6" />
                                },
                                {
                                    step: 2,
                                    title: "PLANNING AND STRATEGY",
                                    desc: "We develop a comprehensive plan and strategy for your website.",
                                    icon: <FileText className="w-6 h-6" />
                                },
                                {
                                    step: 3,
                                    title: "DESIGN AND WIREFRAMING",
                                    desc: "Our talented design team brings your vision to life.",
                                    icon: <Palette className="w-6 h-6" />
                                },
                                {
                                    step: 4,
                                    title: "DEVELOPMENT",
                                    desc: "Using the latest technologies our developers bring the design to life.",
                                    icon: <Code className="w-6 h-6" />
                                },
                                {
                                    step: 5,
                                    title: "LAUNCH AND SUPPORT",
                                    desc: "After launching, we provide ongoing support to assess everything runs smoothly.",
                                    icon: <Rocket className="w-6 h-6" />
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col items-center text-center group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                                >
                                    {/* Icon Circle */}
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors duration-300 shadow-sm">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/80 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300 ring-4 ring-background">
                                            {item.icon}
                                        </div>
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-lg border-2 border-background">
                                            {item.step}
                                        </div>
                                    </div>

                                    <h3 className="font-display font-bold text-lg mb-3 px-2 min-h-[3rem] flex items-center justify-center uppercase tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed px-2 max-w-[200px]">
                                        {item.desc}
                                    </p>

                                    {/* Mobile connector line (visual only) */}
                                    {index < 4 && (
                                        <div className="md:hidden w-[2px] h-12 border-l-2 border-dotted border-primary/20 my-4" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default CaseStudies;
