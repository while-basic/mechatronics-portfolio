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
    title: "Data Center Infrastructure",
    description: "Maintained critical data center infrastructure with 100% uptime, managing preventive maintenance and system monitoring.",
    imageUrl: "/gallery/t5.jpeg",
    tags: ["Infrastructure", "CMMS", "Maintenance"]
  },
  {
    id: 2,
    title: "Industrial Automation",
    description: "Implemented and maintained automated manufacturing systems, including HMI interfaces and electronic sensors.",
    imageUrl: "/gallery/automation.jpg",
    tags: ["Automation", "HMI", "PLC"]
  },
  {
    id: 3,
    title: "Electronics Manufacturing",
    description: "Performed quality assurance and testing for low voltage electronic products, ensuring high manufacturing standards.",
    imageUrl: "/gallery/electronics.jpg",
    tags: ["Quality Control", "Electronics", "Testing"]
  },
  {
    id: 4,
    title: "Preventive Maintenance",
    description: "Developed and executed comprehensive preventive maintenance programs for industrial equipment and systems.",
    imageUrl: "/gallery/datacenter.jpg",
    tags: ["Maintenance", "Documentation", "CMMS"]
  },
  {
    id: 5,
    title: "Electrical Wiring",
    description: "Installed and maintained high voltage electrical wiring systems, ensuring safe and efficient operation.",
    imageUrl: "/gallery/wiring-1.jpg",
    tags: ["Electrical", "Wiring", "Power Distribution"]
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
