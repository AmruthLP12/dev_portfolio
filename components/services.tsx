'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Layout, Server, Globe, Smartphone, Database } from 'lucide-react'
import { ScrollAnimation } from './scroll-animation'

const services = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern frontend frameworks and libraries.',
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
    icon: <Server className="h-8 w-8" />,
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end development of web applications, from the user interface to the server and database.',
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces for web and mobile applications.',
    icon: <Layout className="h-8 w-8" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Creating native and cross-platform mobile applications for iOS and Android devices.',
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database structures for efficient data storage and retrieval.',
    icon: <Database className="h-8 w-8" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[hsl(var(--vibrant-2)_/_0.1)]">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Services</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={service.title} direction={['left', 'up', 'right'][index % 3] as 'left' | 'up' | 'right'}>
              <Card className="h-full bg-background/50 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2 text-[hsl(var(--vibrant-3))]">{service.icon}</span>
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

