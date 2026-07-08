"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/Primitives";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "white";
}

interface HeroProps {
  title: string;
  description: string;
  actions: HeroAction[];
  imageLabel?: string;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero({ title, description, actions, imageLabel }: HeroProps) {
  return (
    <section className="bg-brand-purple text-white">
      <div className="container-max py-10 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="rounded-card border border-white/15 bg-white/5 p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden"
        >
          <div>
            <motion.h1 variants={item} className="text-hero mb-6">
              {title}
            </motion.h1>
            <motion.p variants={item} className="text-body-lg text-white/80 mb-8 max-w-lg">
              {description}
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-3">
              {actions.map((a) => (
                <Button key={a.label} href={a.href} variant={a.variant ?? "secondary"} size="md">
                  {a.label}
                </Button>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={item}
            className="relative"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ImagePlaceholder ratio="aspect-[4/3]" label={imageLabel} className="bg-white/10" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
