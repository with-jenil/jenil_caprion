import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "SaaS Platform",
    description: "Real-time financial analytics dashboard with AI-powered insights and automated reporting.",
    tags: ["React", "Node.js", "PostgreSQL", "AI/ML"],
    gradient: "from-emerald-500/20 to-teal-600/20",
  },
  {
    title: "E-Commerce Engine",
    category: "Web Application",
    description: "Scalable e-commerce platform with custom checkout flows and inventory management.",
    tags: ["Next.js", "Stripe", "MongoDB", "AWS"],
    gradient: "from-teal-500/20 to-cyan-600/20",
  },
  {
    title: "Healthcare Portal",
    category: "Enterprise Solution",
    description: "HIPAA-compliant patient management system with telehealth integration.",
    tags: ["TypeScript", "GraphQL", "Docker", "Azure"],
    gradient: "from-green-500/20 to-emerald-600/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden hover-lift">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative p-8">
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {project.category}
            </span>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
          </div>

          <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
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
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient bg-gradient-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into some of the transformative solutions we've built for our clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="neon-outline" size="lg" className="group" asChild>
            <a href="#contact">
              Discuss Your Project
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
