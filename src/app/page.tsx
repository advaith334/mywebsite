import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, User, Mic, ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import Spacer from "@/components/ui/spacer";
import TextAnimation from "@/components/ui/txt-animation";

export default function Home() {
  // output
  return (
    <div className="container py-12 md:py-20">
      {/* Hero Section */}
      <section className="text-center mb-16 md:mb-24">
        <Image
          src={"/images/Advaith_image_2.jpg"}
          alt="Background Picture"
          width={1500}
          height={400}
          className="mx-auto mb-6 shadow-lg"
          data-ai-hint="profile picture"
        />
        < Spacer size="50px" />
        {/* <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I am Advaith.
        </h1> */}
        < TextAnimation />
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Welcome to my website?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resume">View Resume</Link>
          </Button>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <Code className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Discover a collection of my work, showcasing my skills and passion for building innovative solutions.
            </p>
            <Button variant="link" asChild className="px-0 text-primary">
              <Link href="/projects">
                See Projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <User className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Resume / About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Learn more about my professional journey, skills, and experiences.
            </p>
            <Button variant="link" asChild className="px-0 text-primary">
              <Link href="/resume">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <Mic className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Follow my thoughts, insights, and reflections on technology, life, and everything in between.
            </p>
            <Button variant="link" asChild className="px-0 text-primary">
              <Link href="/blog">
                Visit Blog <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
