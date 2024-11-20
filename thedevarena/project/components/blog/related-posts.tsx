"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const relatedPosts = [
  {
    slug: "design-systems-evolution",
    title: "The Evolution of Design Systems",
    description: "How design systems have transformed UI development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    date: "July 20, 2023",
    readingTime: "4 min read",
    category: "Design"
  },
  {
    slug: "future-of-micro-interactions",
    title: "The Future of Micro-Interactions",
    description: "Creating engaging user experiences through subtle animations",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    date: "July 18, 2023",
    readingTime: "3 min read",
    category: "UX"
  }
];

export default function RelatedPosts() {
  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <Badge
                  className="absolute top-4 left-4"
                  variant="secondary"
                >
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readingTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </Link>

            {/* Hover Gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}