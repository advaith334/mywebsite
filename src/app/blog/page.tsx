import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";

// Sample blog post data - replace with your actual posts
const blogPosts = [
  {
    slug: "first-post",
    title: "My Journey into Web Development",
    excerpt: "Exploring the challenges and triumphs of learning to code and building my first web applications.",
    date: "2024-07-20",
    tags: ["Web Development", "Learning", "Career"],
    imageUrl: "https://picsum.photos/600/400?random=5",
    aiHint: "laptop code editor desk"
  },
  {
    slug: "react-hooks-deep-dive",
    title: "Deep Dive into React Hooks",
    excerpt: "A comprehensive look at useState, useEffect, and custom hooks in React for cleaner, more efficient components.",
    date: "2024-07-15",
    tags: ["React", "JavaScript", "Frontend"],
    imageUrl: "https://picsum.photos/600/400?random=6",
     aiHint: "react code snippet diagram"
  },
  {
    slug: "tailwind-vs-css-modules",
    title: "Tailwind CSS vs. CSS Modules: A Comparison",
    excerpt: "Comparing two popular CSS methodologies for modern web development, discussing pros and cons.",
    date: "2024-07-10",
    tags: ["CSS", "Tailwind CSS", "Web Design", "Comparison"],
    imageUrl: "https://picsum.photos/600/400?random=7",
    aiHint: "css code comparison abstract"
  },
   {
    slug: "future-of-ai",
    title: "Thoughts on the Future of AI",
    excerpt: "Speculating on the upcoming advancements in Artificial Intelligence and its potential impact on society.",
    date: "2024-07-05",
    tags: ["AI", "Technology", "Future", "Opinion"],
    imageUrl: "https://picsum.photos/600/400?random=8",
    aiHint: "futuristic ai abstract art"
  },
];

// Helper function to format date (optional)
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sharing my thoughts, learnings, and experiences.
        </p>
      </div>

       {/* Link to Create New Post Page */}
      <div className="mb-8 flex justify-end">
        <Button asChild>
          <Link href="/blog/new">
            Create New Post
          </Link>
        </Button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
             <Link href={`/blog/${post.slug}`} className="block relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={`${post.title} featured image`}
                  layout="fill"
                  objectFit="cover"
                  className="bg-muted"
                   data-ai-hint={post.aiHint}
                />
             </Link>
            <CardHeader>
              <CardTitle className="text-xl hover:text-primary">
                 <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="flex items-center text-sm text-muted-foreground pt-1">
                <Calendar className="mr-1.5 h-4 w-4" /> {formatDate(post.date)}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-3 bg-secondary/50 py-4 px-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
               <Button variant="link" size="sm" asChild className="px-0 text-primary self-end">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
