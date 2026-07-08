"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HomeHero() {
  return (
    <section className="bg-brand-lavender py-10 md:py-16">
      <div className="container-max">
        <div className="bg-brand-purple text-white rounded-card border border-brand-purple-light p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-card">
          {/* Background grid lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={container} 
            className="max-w-3xl relative z-10"
          >
            <motion.h1 variants={item} className="text-h1 mb-6">
              Grow your business with proven digital strategies
            </motion.h1>
            <motion.p variants={item} className="text-body-lg text-white/80 mb-8 max-w-xl">
              VASP Digital helps local and small businesses in London and the GTA get more leads through SEO, local search visibility, paid advertising, and better websites. We focus on what matters: your growth.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Button href="/contact" variant="white" size="lg">
                Book a call
              </Button>
              <Button href="/services/seo" variant="secondary" size="lg">
                Free audit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
