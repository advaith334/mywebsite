import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary web application built with Next.js and Tailwind CSS, focusing on user productivity.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Web App"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    githubUrl: "#",
    liveUrl: "#",
    aiHint: "tech application screenshot"
  },
  {
    title: "Project Beta",
    description: "An innovative mobile app developed using React Native, designed to streamline daily tasks.",
    tags: ["React Native", "Mobile App", "JavaScript"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    githubUrl: "#",
    liveUrl: null, // Example of no live demo
    aiHint: "mobile application screenshot"
  },
  {
    title: "Project Gamma",
    description: "An open-source library for data visualization, contributing to the developer community.",
    tags: ["Open Source", "Data Viz", "Python", "Library"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    githubUrl: "#",
    liveUrl: "#",
    aiHint: "data visualization graph"
  },
   {
    title: "Project Delta",
    description: "Exploration into machine learning for image recognition.",
    tags: ["Machine Learning", "Python", "AI", "Image Recognition"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    githubUrl: "#",
    liveUrl: null,
    aiHint: "abstract ai neural network"
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Here's a selection of projects I've worked on. Feel free to explore!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 w-full">
              <Image
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                layout="fill"
                objectFit="cover"
                className="bg-muted"
                data-ai-hint={project.aiHint}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-3 bg-secondary/50 py-3 px-6 border-t">
              {project.githubUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                     Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
