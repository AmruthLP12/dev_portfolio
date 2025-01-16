'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { ScrollAnimation } from './scroll-animation'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of Project 1',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.com',
    image: '/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'A brief description of Project 2',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.com',
    image: '/project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'A brief description of Project 3',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.com',
    image: '/project3.jpg',
  },
  {
    title: 'Project 4',
    description: 'A brief description of Project 4',
    tags: ['React Native', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/yourusername/project4',
    liveUrl: 'https://project4.com',
    image: '/project4.jpg',
  },
  {
    title: 'Project 5',
    description: 'A brief description of Project 5',
    tags: ['Angular', 'NestJS', 'MySQL'],
    githubUrl: 'https://github.com/yourusername/project5',
    liveUrl: 'https://project5.com',
    image: '/project5.jpg',
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="down">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Projects</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ScrollAnimation key={project.title} direction={index % 2 === 0 ? 'left' : 'right'}>
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
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`bg-[hsl(var(--vibrant-${(i % 5) + 1})_/_0.2)] text-[hsl(var(--vibrant-${(i % 5) + 1}))]`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex justify-between w-full">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button asChild size="sm" className="bg-[hsl(var(--vibrant-4))] text-white hover:bg-[hsl(var(--vibrant-4)_/_0.8)]">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
                  Show Less <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                </>
              ) : (
                <>
                  Show More <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-[2px] transition-transform" />
                </>
              )}
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

