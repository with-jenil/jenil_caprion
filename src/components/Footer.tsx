import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@caprionlabs.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "AI Automation", href: "#services" },
      { name: "UX/UI Design", href: "#services" },
      { name: "DevOps", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#why-us" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.a
              href="#"
              className="font-display text-2xl font-bold tracking-tight inline-block mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-foreground">CAPRION</span>
              <span className="text-primary"> LABS</span>
            </motion.a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Your partner in SaaS development and intelligent digital solutions. 
              Building smarter, scaling faster.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 CAPRION LABS. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <a 
              href="mailto:contact@caprionlabs.com" 
              className="hover:text-primary transition-colors"
            >
              contact@caprionlabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
