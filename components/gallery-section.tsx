import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface GalleryItem {
  id: number
  title: string
  description: string
  imageUrl: string
  tags: string[]
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Automated Assembly Line",
    description: "Designed and implemented an automated assembly line for electronic components, increasing production efficiency by 40%.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Automation", "PLC", "Robotics"]
  },
  {
    id: 2,
    title: "Smart Factory Monitoring System",
    description: "Developed a real-time monitoring system for factory equipment, reducing downtime by 25% through predictive maintenance.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["IoT", "Data Analytics", "Web Development"]
  },
  {
    id: 3,
    title: "Robotic Arm for Precision Manufacturing",
    description: "Programmed and integrated a robotic arm for high-precision manufacturing tasks, improving product quality and consistency.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Robotics", "Motion Control", "Computer Vision"]
  },
  {
    id: 4,
    title: "Energy Management System",
    description: "Created an intelligent energy management system for industrial facilities, resulting in a 20% reduction in energy consumption.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    tags: ["Energy Efficiency", "Machine Learning", "SCADA"]
  }
]

export function GallerySection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {galleryItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={300}
            height={200}
            className="w-full object-cover"
          />
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4">{item.description}</CardDescription>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

