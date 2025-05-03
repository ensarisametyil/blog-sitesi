import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">John Doe</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">John Doe</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">Full Stack Developer</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I build accessible, responsive, and performant web applications with modern technologies.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="John Doe"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate full-stack developer with over 5 years of experience building web applications. I
                specialize in JavaScript, TypeScript, React, and Node.js, and I'm always eager to learn new
                technologies.
              </p>
              <p className="text-muted-foreground">
                My approach to development focuses on creating clean, maintainable code that delivers exceptional user
                experiences. I'm committed to best practices, accessibility, and performance optimization.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source
                projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Senior Developer at Tech Solutions Inc.</h4>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                  <p className="text-muted-foreground mt-1">
                    Lead development of enterprise web applications using React and Node.js.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Web Developer at Digital Innovations</h4>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                  <p className="text-muted-foreground mt-1">Developed responsive websites and e-commerce solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Technologies</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1 text-sm">JavaScript</Badge>
                <Badge className="px-3 py-1 text-sm">TypeScript</Badge>
                <Badge className="px-3 py-1 text-sm">Python</Badge>
                <Badge className="px-3 py-1 text-sm">HTML</Badge>
                <Badge className="px-3 py-1 text-sm">CSS</Badge>
                <Badge className="px-3 py-1 text-sm">SQL</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1 text-sm">React</Badge>
                <Badge className="px-3 py-1 text-sm">Next.js</Badge>
                <Badge className="px-3 py-1 text-sm">Node.js</Badge>
                <Badge className="px-3 py-1 text-sm">Express</Badge>
                <Badge className="px-3 py-1 text-sm">Tailwind CSS</Badge>
                <Badge className="px-3 py-1 text-sm">Redux</Badge>
                <Badge className="px-3 py-1 text-sm">GraphQL</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="px-3 py-1 text-sm">Git</Badge>
                <Badge className="px-3 py-1 text-sm">Docker</Badge>
                <Badge className="px-3 py-1 text-sm">AWS</Badge>
                <Badge className="px-3 py-1 text-sm">Vercel</Badge>
                <Badge className="px-3 py-1 text-sm">MongoDB</Badge>
                <Badge className="px-3 py-1 text-sm">PostgreSQL</Badge>
                <Badge className="px-3 py-1 text-sm">Firebase</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Projects</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Task Management App"
                  description="A collaborative task management application with real-time updates and team workspaces."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Next.js", "TypeScript", "Firebase", "Tailwind"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Weather Dashboard"
                  description="A weather dashboard that displays current conditions and forecasts for multiple locations."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["JavaScript", "React", "Weather API", "Chart.js"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website built with modern web technologies."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Recipe Finder"
                  description="An application that helps users find recipes based on available ingredients."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["React", "Node.js", "MongoDB", "Express"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Fitness Tracker"
                  description="A mobile app for tracking workouts, nutrition, and fitness progress."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["React Native", "Firebase", "Redux"]}
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>
            <TabsContent value="web" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Task Management App"
                  description="A collaborative task management application with real-time updates and team workspaces."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Next.js", "TypeScript", "Firebase", "Tailwind"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Weather Dashboard"
                  description="A weather dashboard that displays current conditions and forecasts for multiple locations."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["JavaScript", "React", "Weather API", "Chart.js"]}
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Fitness Tracker"
                  description="A mobile app for tracking workouts, nutrition, and fitness progress."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["React Native", "Firebase", "Redux"]}
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>
            <TabsContent value="other" className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Portfolio Website"
                  description="A responsive portfolio website built with modern web technologies."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
                  demoUrl="#"
                  codeUrl="#"
                />
                <ProjectCard
                  title="Recipe Finder"
                  description="An application that helps users find recipes based on available ingredients."
                  image="/placeholder.svg?height=200&width=300"
                  tags={["React", "Node.js", "MongoDB", "Express"]}
                  demoUrl="#"
                  codeUrl="#"
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t">
          <h2 className="text-3xl font-bold tracking-tighter mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm currently open to freelance opportunities and interesting projects. If you have a project that needs
                my expertise, or if you just want to chat, feel free to reach out!
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:john.doe@example.com" className="text-primary hover:underline">
                  john.doe@example.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <Button asChild variant="outline" size="icon">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  codeUrl: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={demoUrl}>Live Demo</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={codeUrl}>View Code</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
