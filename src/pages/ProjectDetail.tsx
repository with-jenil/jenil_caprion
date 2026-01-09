
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button asChild>
                    <Link to="/">Back to Home</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                {/* Background Image with Blur */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
                    style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-16 relative z-10">
                    <Button variant="ghost" className="w-fit mb-8 text-muted-foreground hover:text-foreground" asChild>
                        <Link to="/">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                        </Link>
                    </Button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-foreground">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {project.fullDescription || project.description}
                        </p>
                        <div className="mt-8">
                            {project.liveUrl && (
                                <Button size="lg" className="mr-4" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;
