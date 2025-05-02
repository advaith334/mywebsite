import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Sample data - replace with your actual details
const resumeData = {
  name: "[Your Name]",
  title: "[Your Profession/Role]",
  location: "[Your Location]",
  email: "[your.email@example.com]",
  linkedin: "#", // Your LinkedIn profile URL
  github: "#", // Your GitHub profile URL
  avatarUrl: "https://picsum.photos/120/120",
  avatarFallback: "YN", // Your Initials
  summary: "A highly motivated and skilled [Your Profession/Role] with [X] years of experience in [mention key areas like web development, software engineering, design, etc.]. Passionate about creating efficient, scalable, and user-friendly solutions. Proven ability to work effectively in collaborative environments and deliver high-quality results.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "Jan 2020 - Present",
      description: "Led development of key features for the company's flagship product. Mentored junior engineers and contributed to architectural decisions.",
      tags: ["Leadership", "React", "Node.js", "AWS"]
    },
    {
      title: "Software Engineer",
      company: "Innovate Solutions",
      period: "Jun 2017 - Dec 2019",
      description: "Developed and maintained web applications using Python and Django. Collaborated with cross-functional teams.",
       tags: ["Python", "Django", "PostgreSQL"]
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2017",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "State College",
      period: "2011 - 2015",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "NoSQL", "Docker", "AWS", "Agile Methodologies", "Problem Solving"],
  projects: [ // Optional: highlight 1-2 key projects here too
    {
      name: "Project Alpha",
      link: "/projects#project-alpha", // Link to project detail if available
      description: "Brief description of Project Alpha's relevance."
    }
  ]
};

export default function ResumePage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <div className="flex items-center space-x-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-primary shadow-lg">
            <AvatarImage src={resumeData.avatarUrl} alt={resumeData.name} data-ai-hint="professional headshot"/>
            <AvatarFallback>{resumeData.avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{resumeData.name}</h1>
            <p className="text-xl md:text-2xl text-primary">{resumeData.title}</p>
            <p className="text-muted-foreground mt-1">{resumeData.location}</p>
            <div className="flex space-x-3 mt-3 text-muted-foreground">
              <Link href={`mailto:${resumeData.email}`} className="hover:text-primary flex items-center gap-1">
                <Mail className="h-4 w-4" /> <span className="hidden sm:inline">Email</span>
              </Link>
              <Link href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-1">
                <Linkedin className="h-4 w-4" /> <span className="hidden sm:inline">LinkedIn</span>
              </Link>
              <Link href={resumeData.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-1">
                <Github className="h-4 w-4" /> <span className="hidden sm:inline">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <Button variant="outline" size="lg" asChild>
          {/* Replace '#' with the actual path to your resume PDF */}
          <Link href="#" download>
            <Download className="mr-2 h-5 w-5" /> Download Resume (PDF)
          </Link>
        </Button>
      </div>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Summary</h2>
        <p className="text-muted-foreground">{resumeData.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Experience</h2>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                     <CardTitle className="text-lg">{exp.title}</CardTitle>
                     <p className="text-md font-medium text-primary">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap pl-4">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{exp.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {exp.tags?.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

       {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <Badge key={index} variant="default">{skill}</Badge>
          ))}
        </div>
      </section>


      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <p className="text-md text-primary">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Optional: Projects Highlight */}
      {resumeData.projects && resumeData.projects.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Key Projects</h2>
          <div className="space-y-4">
            {resumeData.projects.map((proj, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium">
                  {proj.link ? (
                    <Link href={proj.link} className="hover:text-primary hover:underline">
                      {proj.name}
                    </Link>
                  ) : (
                    proj.name
                  )}
                </h3>
                <p className="text-muted-foreground">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
