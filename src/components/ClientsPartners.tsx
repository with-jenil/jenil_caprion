import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const partners = [
    { name: "Lokpriya", logo: <img src="/images/lokpriya.png" alt="Lokpriya" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "PackMyRx", logo: <img src="/images/pp.jpeg" alt="pp" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "PackMyRx", logo: <img src="/images/AustraliaRX.png" alt="AustraliaRX" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "PCMI", logo: <img src="/images/ikonnect.png" alt="ikonnect" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "BestRx", logo: <img src="/images/farm_drop_BG.png" alt="farm_drop_BG" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "aac", logo: <img src="/images/interpool_logo-removebg-preview.png" alt="interpool_logo-removebg-preview" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    // Duplicate for seamless loop
    { name: "Lokpriya", logo: <img src="/images/lokpriya.png" alt="Lokpriya" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "PackMyRx", logo: <img src="/images/pp.jpeg" alt="pp" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "PackMyRx", logo: <img src="/images/AustraliaRX.png" alt="AustraliaRX" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "PCMI", logo: <img src="/images/ikonnect.png" alt="ikonnect" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "BestRx", logo: <img src="/images/farm_drop_BG.png" alt="farm_drop_BG" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
    { name: "aac", logo: <img src="/images/interpool_logo-removebg-preview.png" alt="interpool_logo-removebg-preview" className="h-[40px] md:h-[50px] w-auto object-contain transition-all duration-300" /> },
];

export default function ClientsPartners() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-16 md:py-24 overflow-hidden bg-secondary/20 relative border-t border-border/40">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Background */}
            <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-5" />

            <div className="container mx-auto px-6 mb-12 flex flex-col items-center text-center relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 w-full"
                >
                    <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                        Trusted By
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Our Valued <span className="text-gradient bg-gradient-accent">Partners</span>
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-x-hidden group">
                <div className="flex gap-12 md:gap-24 items-center whitespace-nowrap py-4 animate-marquee">
                    {/* Render list twice to ensure seamless loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={`${partner.name}-${index}`}
                            className="font-bold text-muted-foreground/60 hover:text-foreground transition-colors duration-300 cursor-default flex items-center justify-center min-w-[max-content]"
                        >
                            {typeof partner.logo === 'string' ? (
                                <span className="text-2xl md:text-3xl transition-all duration-300">
                                    {partner.logo}
                                </span>
                            ) : (
                                partner.logo
                            )}
                        </div>
                    ))}
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
