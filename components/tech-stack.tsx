'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollAnimation } from './scroll-animation'

const techCategories = [
  {
    name: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
    icon: '💻',
  },
  {
    name: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Vue.js', 'Express.js', 'React Native'],
    icon: '🛠️',
  },
  {
    name: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    icon: '🗄️',
  },
  {
    name: 'Tools & Platforms',
    items: ['Git', 'Docker', 'Webpack', 'VSCode', 'Appwrite', 'Vercel'],
    icon: '🔧',
  },
  {
    name: 'UI & Design',
    items: ['TailwindCSS', 'ShadCN', 'Lucide Icons', 'Radix UI'],
    icon: '🎨',
  },
]

export default function TechStack() {
  return (
    <section className="py-20 bg-[hsl(var(--vibrant-5)_/_0.1)]">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="fade">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech Stack</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <ScrollAnimation key={category.name} direction={index % 2 === 0 ? 'left' : 'right'}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <span className="mr-2 text-3xl">{category.icon}</span>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm py-1 px-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

