import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ subtitle, title, className, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-24", align === "center" ? "text-center" : "text-left", className)}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase block mb-6 opacity-60"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl lg:text-7xl text-white leading-none font-light tracking-tighter"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className={cn("h-px bg-primary/30 mt-12", align === "center" ? "mx-auto" : "ml-0")}
      />
    </div>
  );
}
