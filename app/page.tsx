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
            <h1 className="text-4xl font-bold mb-6">John Doe</h1>
            <h2 className="text-2xl mb-4">Mechatronics Technician & Software Developer</h2>
            <p className="text-lg mb-8">
              Bridging the gap between hardware and software to create innovative solutions.
              With expertise in both mechatronics and software development, I bring a unique
              perspective to solving complex problems in the world of automation and technology.
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
                title="Automated Sorting System"
                description="Designed and implemented an automated sorting system using computer vision and robotic arms."
                tags={["PLC", "Computer Vision", "Robotics", "Python"]}
                githubUrl="https://github.com/johndoe/automated-sorting"
              />
              <ProjectCard
                title="IoT Environmental Monitor"
                description="Developed a web-based dashboard for monitoring environmental data from IoT sensors."
                tags={["React", "Node.js", "MQTT", "Arduino"]}
                githubUrl="https://github.com/johndoe/iot-monitor"
                liveUrl="https://iot-monitor.example.com"
              />
              <ProjectCard
                title="Predictive Maintenance App"
                description="Created a mobile app for predictive maintenance of industrial equipment using machine learning."
                tags={["React Native", "TensorFlow", "Python", "AWS"]}
                githubUrl="https://github.com/johndoe/predictive-maintenance"
              />
              <ProjectCard
                title="Smart Home Automation"
                description="Implemented a smart home automation system with voice control and energy optimization."
                tags={["Raspberry Pi", "Node.js", "MQTT", "Natural Language Processing"]}
                githubUrl="https://github.com/johndoe/smart-home"
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
                <h3 className="text-xl font-semibold mb-2">Senior Mechatronics Engineer</h3>
                <p className="text-muted-foreground mb-2">TechCorp Industries | 2018 - Present</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lead the development of automated manufacturing systems</li>
                  <li>Integrate IoT solutions for real-time monitoring and control</li>
                  <li>Develop software interfaces for machine operation and data analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
                <p className="text-muted-foreground mb-2">InnoSoft Solutions | 2015 - 2018</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Developed web applications using React and Node.js</li>
                  <li>Implemented RESTful APIs for industrial control systems</li>
                  <li>Collaborated on machine learning projects for predictive maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mechatronics Intern</h3>
                <p className="text-muted-foreground mb-2">AutoTech Robotics | Summer 2014</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Assisted in the design and testing of robotic arm prototypes</li>
                  <li>Programmed PLCs for automated assembly line processes</li>
                  <li>Contributed to the development of a computer vision sorting system</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-muted/40">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg mb-8">
              Interested in collaborating or have a project in mind? I'd love to hear from you!
            </p>
            <Button asChild size="lg">
              <a href="mailto:john.doe@example.com">Contact Me</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
