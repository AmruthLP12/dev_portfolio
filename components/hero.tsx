"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "A passionate full-stack developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="mb-20 md:py-32 bg-gradient-to-br from-background via-[hsl(var(--vibrant-4)_/_0.1)] to-background">
      <div className="container mx-auto mt-0 px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm Amruth L P
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-6 h-[3rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-[hsl(var(--vibrant-2))] text-white hover:bg-[hsl(var(--vibrant-2)_/_0.8)] transition-all duration-300"
              >
                <motion.a
                  href="#contact"
                  className="group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[hsl(var(--vibrant-2))] text-[hsl(var(--vibrant-2))] hover:bg-[hsl(var(--vibrant-2)_/_0.1)] transition-all duration-300"
              >
                <motion.a
                  href="https://github.com/amruthlp12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View GitHub
                  <Github className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                </motion.a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-[hsl(var(--vibrant-1))] via-[hsl(var(--vibrant-2))] to-[hsl(var(--vibrant-3))] opacity-70 blur-2xl"></div>
          <img
            src="/Profile.png"
            alt="Your Name"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
