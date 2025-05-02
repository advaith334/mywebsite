"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ReactMarkdown from 'react-markdown';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPostSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  excerpt: z.string().min(10, {
    message: "Excerpt must be at least 10 characters.",
  }).max(200, {
     message: "Excerpt must not be longer than 200 characters.",
  }),
  content: z.string().min(50, {
    message: "Content must be at least 50 characters.",
  }),
  tags: z.string().optional(), // Simple comma-separated string for now
});

type BlogPostFormValues = z.infer<typeof blogPostSchema>;

// This can come from your database or API
const defaultValues: Partial<BlogPostFormValues> = {
  title: "",
  excerpt: "",
  content: `# Start writing your blog post here...

Supports **Markdown**!

- Lists
- *Italics*
- **Bold**
- [Links](https://example.com)

\`\`\`javascript
// Code blocks too!
console.log('Hello, Markdown!');
\`\`\`
`,
  tags: ""
};

export default function NewBlogPostPage() {
  const form = useForm<BlogPostFormValues>({
    resolver: zodResolver(blogPostSchema),
    defaultValues,
    mode: "onChange",
  });

  const [markdownContent, setMarkdownContent] = React.useState(defaultValues.content || "");

  function onSubmit(data: BlogPostFormValues) {
    // TODO: Implement actual saving logic here (e.g., API call)
    console.log("Submitting blog post:", data);
    toast({
      title: "Blog Post Submitted (Simulated)",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Potentially redirect or clear form after successful submission
  }

  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Your awesome blog post title" {...field} />
                </FormControl>
                <FormDescription>
                  A catchy title for your post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="A short summary of your post (max 200 characters)"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                 <FormDescription>
                  This appears on the blog listing page.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content (Markdown)</FormLabel>
                 <Tabs defaultValue="edit" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-2">
                    <TabsTrigger value="edit">Edit</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="edit">
                    <FormControl>
                      <Textarea
                        placeholder="Write your blog post content here using Markdown..."
                        className="min-h-[400px] font-mono text-sm"
                        {...field}
                         onChange={(e) => {
                          field.onChange(e); // Update form state
                          setMarkdownContent(e.target.value); // Update local state for preview
                        }}
                      />
                    </FormControl>
                  </TabsContent>
                  <TabsContent value="preview">
                     <Card>
                       <CardHeader>
                         <CardTitle>Preview</CardTitle>
                       </CardHeader>
                      <CardContent className="prose dark:prose-invert min-h-[400px] max-w-none p-4 border rounded-md">
                          <ReactMarkdown>{markdownContent || "Start typing to see preview..."}</ReactMarkdown>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
                <FormDescription>
                  Use Markdown for formatting. Check the preview tab.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

           <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., react, typescript, webdev" {...field} />
                </FormControl>
                <FormDescription>
                  Comma-separated tags for categorization.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


          <Button type="submit">Save Post</Button>
        </form>
      </Form>
    </div>
  );
}
