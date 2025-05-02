
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {currentYear} My Digital Stage. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-primary" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-primary" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
