'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const reviews = [
  {
    name: 'John Doe',
    avatar: '/avatar1.jpg',
    company: 'Tech Co.',
    review: 'Excellent work! Delivered the project on time and exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    avatar: '/avatar2.jpg',
    company: 'Design Studio',
    review: 'Great communication and problem-solving skills. Would definitely work with again.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    avatar: '/avatar3.jpg',
    company: 'Startup Inc.',
    review: 'Highly skilled developer with a keen eye for detail. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Sarah Lee',
    avatar: '/avatar4.jpg',
    company: 'E-commerce Solutions',
    review: 'Impressive work on our e-commerce platform. Improved performance and user experience significantly.',
    rating: 5,
  },
]

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-20 bg-[hsl(var(--vibrant-1)_/_0.1)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Client Reviews</h2>
        <div className="relative max-w-2xl mx-auto">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={reviews[currentReview].avatar} alt={reviews[currentReview].name} />
                    <AvatarFallback>{reviews[currentReview].name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{reviews[currentReview].name}</p>
                    <p className="text-sm text-muted-foreground">{reviews[currentReview].company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{reviews[currentReview].review}</p>
                <div className="flex">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[hsl(var(--vibrant-3))] text-[hsl(var(--vibrant-3))]" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevReview}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextReview}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

