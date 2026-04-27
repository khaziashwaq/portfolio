import { Link as LinkIcon, Mail, ArrowUpRight, GitFork } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Let&apos;s Build Something Great
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or ways to contribute to your team. Reach out and
          let&apos;s connect.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.linkedin.com/in/ashwaq-khazi/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "text-base gap-2")}
          >
            <LinkIcon className="h-5 w-5" />
            Connect on LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:ashwaqkhazi1729@gmail.com"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-base gap-2"
            )}
          >
            <Mail className="h-5 w-5" />
            Send an Email
          </a>
          <a
            href="https://github.com/khaziashwaq"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-base gap-2"
            )}
          >
            <GitFork className="h-5 w-5" />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
