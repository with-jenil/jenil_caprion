import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative min-w-[350px] md:min-w-[450px] h-[500px] snap-center select-none cursor-pointer"
    >
      <Link to={`/project/${project.slug}`} className="block h-full">
        <div className="relative h-full rounded-3xl border border-border/50 bg-card/30 backdrop-blur-md overflow-hidden hover-lift flex flex-col">
          {/* Full Image Background (Optional Style) or Top Image */}
          <div className="relative h-[250px] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10`} />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 z-20">
              <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6 px-8 flex flex-col flex-grow">
            <div className="mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480; // Approximate card width + gap
      const newScrollLeft = direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Our Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient bg-gradient-accent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Innovative solutions that drive business transformation.
            </p>
          </motion.div>

          {/* Navigation Buttons using default Button for consistency but distinct look */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 hidden md:flex"
          >
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full w-12 h-12 border-primary/20 hover:border-primary">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full w-12 h-12 border-primary/20 hover:border-primary">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Projects Horizontal Scroll */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-6 px-6 md:mx-0 md:px-0"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          {/* CTA Card inline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="min-w-[300px] md:min-w-[350px] flex items-center justify-center snap-center"
          >
            <div className="text-center p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Have a project in mind?</h3>
              <p className="text-muted-foreground mb-8">Let's discuss how we can help you build something amazing.</p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="#contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Swipe Hint or Navigation if needed, usually scroll is intuitive */}
      </div>
    </section>
  );
}
