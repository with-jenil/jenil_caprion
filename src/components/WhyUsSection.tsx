import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Shield, 
  Users, 
  Rocket, 
  HeartHandshake, 
  Award 
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We move fast without compromising quality. Get your MVP to market in weeks, not months.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built-in security best practices protect your data and your users from day one.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Work with a committed team of experts who understand your vision and business goals.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Tech",
    description: "We use cutting-edge technologies that scale with your growth and evolving needs.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description: "We're not just vendors—we're partners invested in your long-term success.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "50+ successful projects delivered with a 98% client satisfaction rate.",
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex gap-5 p-6 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-card/50 transition-all duration-500"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <reason.icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {reason.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-gradient bg-gradient-neon">CAPRION LABS</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to deliver solutions that drive real results.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
