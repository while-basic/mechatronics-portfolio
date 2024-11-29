import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { SkillsSection } from '@/components/skills-section'
import { Button } from '@/components/ui/button'
import { GallerySection } from '@/components/gallery-section'
import { AudioSection } from '@/components/audio-section'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="about" className="py-24 px-6 bg-muted/40">
          <div className="container mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold mb-6">Christopher Celaya</h1>
            <h2 className="text-2xl mb-4">Software Developer & Mechatronic Technician</h2>
            <p className="text-lg mb-8">
              Results-driven and innovative technician with extensive experience in computer 
              science. Expertise in software development and project management, 
              complemented by a strong background in preventive maintenance and industrial 
              manufacturing. Seeking a challenging position to apply technical skills toward the 
              growth and success of a forward-thinking organization.
            </p>
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </section>

        <section id="skills" className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <SkillsSection />
          </div>
        </section>

        <section id="projects" className="py-24 px-6 bg-muted/40">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                title="Data Center Infrastructure Management"
                description="Maintained and operated critical data center infrastructure, ensuring 100% uptime while managing preventive maintenance schedules."
                tags={["CMMS", "Preventive Maintenance", "Infrastructure", "Documentation"]}
              />
              <ProjectCard
                title="Industrial Automation Systems"
                description="Developed and maintained automated manufacturing systems including HMI interfaces, sensors, and control systems."
                tags={["PLC", "HMI", "Automation", "Electronic Sensors"]}
              />
              <ProjectCard
                title="Quality Assurance Systems"
                description="Implemented quality control processes for low voltage electronic products, including testing procedures and documentation systems."
                tags={["Quality Control", "Electronic Testing", "Documentation", "Process Improvement"]}
              />
              <ProjectCard
                title="Maintenance Management System"
                description="Utilized and optimized CMMS for scheduling and tracking maintenance tasks across facility equipment."
                tags={["CMMS", "Process Management", "Documentation", "Maintenance Planning"]}
              />
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Work Gallery</h2>
            <GallerySection />
          </div>
        </section>

        <section id="audio" className="py-24 px-6 bg-muted/40">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Audio Projects</h2>
            <AudioSection />
          </div>
        </section>

        <section id="experience" className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Center Technician II</h3>
                <p className="text-muted-foreground mb-2">T5 Data Centers - San Antonio, Texas | 2021 - 2022</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maintain and operate both critical and non-critical data center infrastructure, equipment, and systems</li>
                  <li>Collaborate with a team of Critical Facilities Technician (CFT) to ensure total availability (100% uptime) while minimizing risks</li>
                  <li>Utilize a Computerized Maintenance Management System (CMMS) for managing scheduled and unscheduled data center tasks</li>
                  <li>Conduct preventive maintenance on electrical and mechanical equipment within the data center</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mechatronics Technician</h3>
                <p className="text-muted-foreground mb-2">CN Wire - Santa Teresa, New Mexico | 2018 - 2021</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Troubleshoot, maintain, and perform repairs and installations on factory equipment</li>
                  <li>Interpret diagrams, schematics, and electrical code specification</li>
                  <li>Install and repair electrical commutators, electronic sensors, and Human Machine Interface (HMI) touch panels</li>
                  <li>Maintain a number of cooling, compression and emulsion systems required for the facility to maintain operation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Wiring Technician | Quality Assurance</h3>
                <p className="text-muted-foreground mb-2">Schneider Electric - El Paso, Texas | 2016 - 2017</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Troubleshoot electrical and electromechanical operations</li>
                  <li>Interpret point-to-point diagrams, bill of materials, and wiring schematics</li>
                  <li>Collaborate with engineering and assembly teams to resolve problems</li>
                  <li>Oversee testing and assembly of low voltage electronic products for clients</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-muted/40">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg mb-8">
              Based in El Paso, Texas. Let's collaborate on your next project!
            </p>
            <Button asChild size="lg">
              <a href="mailto:chris@chriscelaya.xyz">Contact Me</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
