import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Bot, 
  Palette, 
  Layers, 
  Database, 
  Cloud 
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Application Development",
    description: "Scalable, high-performance web applications built with modern frameworks and best practices.",
  },
  {
    icon: Bot,
    title: "AI Automation & Workflow Engineering",
    description: "Intelligent automation solutions that streamline operations and boost productivity.",
  },
  {
    icon: Palette,
    title: "UX/UI Design & Branding",
    description: "Beautiful, intuitive interfaces that create memorable user experiences and strengthen brand identity.",
  },
  {
    icon: Layers,
    title: "Custom Web Stack Solutions",
    description: "Tailored technology stacks optimized for your specific business requirements and growth plans.",
  },
  {
    icon: Database,
    title: "Database Design & Architecture",
    description: "Robust, scalable database solutions designed for performance, security, and data integrity.",
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps Consulting",
    description: "CI/CD pipelines, cloud infrastructure, and DevOps practices for seamless deployments.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-8 h-full hover-lift cursor-pointer">
        {/* Icon Container */}
        <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:animate-glow-pulse transition-all duration-500">
          <service.icon className="w-7 h-7 text-primary-foreground" />
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-10" />
      
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
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-gradient bg-gradient-accent">Build</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
