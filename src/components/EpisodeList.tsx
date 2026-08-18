import { useState } from "react";
import { cours } from "@/data/bleach";

export function EpisodeList() {
  const [active, setActive] = useState(cours[0].id);
  const cour = cours.find((c) => c.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {cours.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`group rounded-sm border px-5 py-3 text-left transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/15 shadow-[var(--shadow-blood)]"
                  : "border-border bg-card hover:border-primary/60"
              }`}
            >
              <span className="block font-display text-xl tracking-widest text-accent">
                {c.label}
              </span>
              <span className="block text-sm font-semibold">{c.name}</span>
              <span className="block text-xs text-muted-foreground">{c.year}</span>
            </button>
          );
        })}
      </div>

      <ol className="mt-8 space-y-3">
        {cour.episodes.map((ep, i) => (
          <li
            key={ep.n}
            className="surface-card animate-rise grid grid-cols-[auto_1fr] gap-4 rounded-sm p-4 sm:gap-6 sm:p-5"
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <span className="font-display text-3xl leading-none text-blood-gradient sm:text-4xl">
              {String(ep.n).padStart(2, "0")}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg tracking-wide">{ep.title}</h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {ep.date}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ep.synopsis}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
