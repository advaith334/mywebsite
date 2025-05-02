import { Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Badge } from "@/components/ui/badge";
import { notFound } from 'next/navigation';

// Sample blog post data - In a real app, fetch this based on the slug param
const blogPosts = [
  {
    slug: "first-post",
    title: "My Journey into Web Development",
    excerpt: "Exploring the challenges and triumphs of learning to code and building my first web applications.",
    content: `# My Journey into Web Development

This is the full content of the first blog post. It delves deeper into the experiences mentioned in the excerpt.

## The Beginning

It all started with a simple HTML page... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.

## Challenges Faced

Learning JavaScript was initially daunting. Debugging asynchronous code felt like navigating a maze in the dark.

\`\`\`javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

async function processData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(data);
}

processData();
\`\`\`

## Key Takeaways

*   **Persistence is key:** Don't give up when things get tough.
*   **Community matters:** Engage with other developers online.
*   **Build projects:** The best way to learn is by doing.

The journey continues!`,
    date: "2024-07-20",
    tags: ["Web Development", "Learning", "Career"],
    imageUrl: "https://picsum.photos/1200/600?random=5",
    aiHint: "laptop code editor desk wide"
  },
   {
    slug: "react-hooks-deep-dive",
    title: "Deep Dive into React Hooks",
    excerpt: "A comprehensive look at useState, useEffect, and custom hooks in React for cleaner, more efficient components.",
    content: `# Deep Dive into React Hooks

React Hooks revolutionized how we write functional components. Let's explore some core hooks.

## useState

Manages state within a component.

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect

Handles side effects like data fetching or subscriptions.

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
    }

    fetchUser();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup, like unsubscribing
    };
  }, [userId]); // Dependency array

  // ... render component
}
\`\`\`

## Custom Hooks

Encapsulate reusable logic.

\`\`\`javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
\`\`\`
`,
    date: "2024-07-15",
    tags: ["React", "JavaScript", "Frontend"],
    imageUrl: "https://picsum.photos/1200/600?random=6",
     aiHint: "react code snippet diagram wide"
  },
  // Add other posts here...
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Helper function to format date (optional)
function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  // Find the post by slug - replace with actual data fetching logic
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound(); // Trigger 404 if post not found
  }

  return (
    <article className="container max-w-3xl py-12 md:py-20">
      {/* Featured Image */}
       <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.imageUrl}
            alt={`${post.title} featured image`}
            layout="fill"
            objectFit="cover"
            className="bg-muted"
            priority // Prioritize loading the main image
            data-ai-hint={post.aiHint}
          />
       </div>

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Calendar className="mr-1.5 h-4 w-4" /> {formatDate(post.date)}
          </span>
           <div className="flex items-center flex-wrap gap-2">
             <Tag className="mr-1.5 h-4 w-4" />
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Use ReactMarkdown to render the content */}
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Back to Blog Link */}
      <div className="mt-12 border-t pt-8">
        <Link href="/blog" className="text-primary hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    </article>
  );
}

// Optional: Generate static paths if you know all slugs beforehand
// export async function generateStaticParams() {
//   // In a real app, fetch all slugs from your data source
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

