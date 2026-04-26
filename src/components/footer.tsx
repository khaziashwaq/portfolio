import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-8" role="contentinfo">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8 opacity-0" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Software Engineer. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/Rugz007/glaze-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/khaziashwaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="#hero"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
