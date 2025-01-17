"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { ScrollAnimation } from "./scroll-animation";

const projects = [
  {
    title: "MediConnect",
    description:
      "A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    tags: ["Next.js", "Appwrite", "TailwindCSS", "TypeScript", "twilio"],
    githubUrl: "https://github.com/AmruthLP12/mediconnect",
    liveUrl: "https://mediconnectweb.vercel.app/",
    image: "/Projects/mediconnect.png",
  },
  {
    title: "Nations Hub",
    description:
      "This application allows users to explore information about all countries on Earth, providing a rich and interactive experience. Whether you're looking for general country information, detailed statistics, or just want to admire the flags of different nations, NationsHub has got you covered.",
    tags: ["React", "JavaScript", "Rest API"],
    githubUrl: "https://github.com/AmruthLP12/Nations-Hub",
    liveUrl: "https://nations-hub.vercel.app/",
    image: "/Projects/nation hub.png",
  },
  {
    title: "Shadcn UI Addon",
    description:
      "Enhance your projects with our extended shadcn/ui component library. Free, customizable, and ready for your next application.",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "shadcn/ui"],
    githubUrl: "https://github.com/AmruthLP12/shadcnui-addon",
    liveUrl: "https://shadcnui-addon.vercel.app/",
    image: "/Projects/shadcn addons.png",
  },
  {
    title: "Landing Page",
    description:
      "A landing page is designed to be sleek, responsive, and interactive, leveraging the latest technologies to deliver a great user experience.",
    tags: ["Next.js", "AOS", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/AmruthLP12/landing-page",
    liveUrl: "https://landing-page-aos.vercel.app/",
    image: "/Projects/landing-page.png",
  },
  {
    title: "AskThisWebsite",
    description:
      "AskThisWebsite is a web application that allows users to interact with any website by simply adding `https://askthiswebsite-cwa.vercel.app/` before the website's URL. This tool provides a unique way to engage with websites and retrieve specific information.",
    tags: ["React", "JavaScript", "TailwindCSS"],
    githubUrl: "https://github.com/AmruthLP12/askthiswebsite",
    liveUrl: "https://askthiswebsite-cwa.vercel.app/",
    image: "/Projects/askthiswebsite.png",
  },
  {
    title: "Trezar",
    description:
      "Trezar is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    githubUrl: "https://github.com/AmruthLP12/trezar",
    liveUrl: "https://trezar.vercel.app/sign-in",
    image: "/Projects/trezar.png",
  },
  {
    title: "Admin DashBoard",
    description:
      "A dashboard template designed for administrators to manage users, view statistics, and monitor activities. The dashboard is fully responsive and features a clean and modern design.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
    githubUrl: "https://github.com/AmruthLP12/hotel-project",
    liveUrl: "https://hotelprojects.vercel.app/admin/dashboard",
    image: "/Projects/Admin.png",
  },
  {
    title: "Text To Image",
    description:
      "A web application that converts text descriptions into images using Hugging Face's state-of-the-art machine learning models. This tool allows users to generate images based on their textual input, providing a creative way to visualize ideas.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Hugging Face"],
    githubUrl: "https://github.com/AmruthLP12/text-to-image",
    liveUrl: "https://text2picture.vercel.app/",
    image: "/Projects/Text2image.png",
  },
  {
    title: "WebCryptGen",
    description:
      "WebCryptGen is a web application that generates cryptographically secure random tokens by utilizing video entropy from a user's webcam. This project is built using Next.js, React, and Tailwind CSS. The tokens generated can be used as one-time passwords (OTPs) or for other secure identification purposes.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Hugging Face"],
    githubUrl: "https://github.com/AmruthLP12/webcryptgen",
    liveUrl: "https://webcryptgen.vercel.app/",
    image: "/Projects/entropykey.png",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="down">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            Projects
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ScrollAnimation
                key={project.title}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Card className="flex flex-col h-full overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden group">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`bg-[hsl(var(--vibrant-${
                            (i % 5) + 1
                          })_/_0.2)] text-[hsl(var(--vibrant-${(i % 5) + 1}))]`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex justify-between w-full">
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-[hsl(var(--vibrant-4))] text-white hover:bg-[hsl(var(--vibrant-4)_/_0.8)]"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            ))}
          </AnimatePresence>
        </div>
        <ScrollAnimation direction="up">
          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="group bg-[hsl(var(--vibrant-5)_/_0.1)] hover:bg-[hsl(var(--vibrant-5)_/_0.2)]"
            >
              {showAll ? (
                <>
                  Show Less{" "}
                  <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                </>
              ) : (
                <>
                  Show More{" "}
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                </>
              )}
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
