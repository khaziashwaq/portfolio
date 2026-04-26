import { FileText, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    title:
      "Reciprocal Rank Fusion Based Hybrid Dense–Sparse Information Retrieval on Code-Mixed Banglish Social Media Text",
    venue: "CEUR Workshop Proceedings",
    date: "Dec 12, 2025",
    tags: ["NLP", "Information Retrieval", "Code-Mixed Text"],
    link: "https://ceur-ws.org/Vol-4173/T3-7.pdf",
  },
];

export function Publications() {
  return (
    <section
      id="publications"
      className="py-24 px-6"
      aria-labelledby="publications-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Research
          </p>
          <h2
            id="publications-heading"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Publications
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-border hover:bg-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                  <FileText className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-snug sm:text-lg">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {pub.venue} &middot; {pub.date}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
