import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const skillsData = [
  {
    category: "Mechatronics",
    skills: ["PLC Programming", "Robotics", "Sensor Integration", "Motion Control", "CAD/CAM"]
  },
  {
    category: "Software Development",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "C++"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "CI/CD", "AWS", "Arduino", "Raspberry Pi"]
  }
]

export function SkillsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-1">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

