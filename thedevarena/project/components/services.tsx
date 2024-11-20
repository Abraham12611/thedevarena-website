"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  FileCode2,
  GanttChart,
  GitBranch,
  GraduationCap,
  LayoutDashboard,
  MessageSquareCode,
  Microscope,
} from "lucide-react";

const services = [
  {
    title: "API Documentation",
    description: "Clear, comprehensive documentation for your APIs with interactive examples and best practices",
    icon: Code2,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Technical Guides",
    description: "Step-by-step tutorials and guides that make complex features accessible",
    icon: BookOpen,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "SDK Implementation",
    description: "Detailed SDK documentation with code samples across multiple languages",
    icon: FileCode2,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Developer Portals",
    description: "Custom developer portals that showcase your API ecosystem",
    icon: LayoutDashboard,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Integration Guides",
    description: "Clear integration documentation for seamless third-party connectivity",
    icon: GitBranch,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Content Strategy",
    description: "Strategic technical content planning aligned with your product roadmap",
    icon: GanttChart,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Code Examples",
    description: "Real-world code samples that demonstrate best practices",
    icon: MessageSquareCode,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Technical Training",
    description: "Custom training materials and onboarding documentation",
    icon: GraduationCap,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "UX Writing",
    description: "Clear microcopy and UI text that enhances the developer experience",
    icon: Microscope,
    className: "md:col-span-1 md:row-span-1",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Make Your Tech Product {" "}
            <span className="gradient-text"> Easy to Love</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Trusted by fast-growing SaaS companies, developer platforms, and enterprise tools to create documentation developers love
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                ...fadeInUp,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
              className={`group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm 
                border border-border/50 hover:border-primary/50 
                transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,243,95,0.1)]
                ${service.className}`}
            >
              <div className="relative z-10">
                <div className="mb-4 inline-block p-3 rounded-lg bg-secondary/50 
                  group-hover:bg-primary/10 transition-colors duration-300"
                >
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary 
                  transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 
                  transition-colors duration-300"
                >
                  {service.description}
                </p>
              </div>
              
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                from-primary/0 via-primary/5 to-accent/0 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}