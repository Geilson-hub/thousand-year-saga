import { useState } from "react";
import { cours, type Episode } from "@/data/bleach";
import { Play, Download, X, Film, ExternalLink } from "lucide-react";

export function EpisodeList() {
  const [active, setActive] = useState(cours[0]!.id);
  const [selectedVideo, setSelectedVideo] = useState<Episode | null>(null);

  const cour = cours.find((c) => c.id === active) ?? cours[0]!;

  return (
    <div>
      {/* COUR SELECTOR TABS */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cours.map((c) => {
          const isActive = c.id === active;
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`group relative rounded-sm border px-4 py-3 text-left transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/15 shadow-[var(--shadow-blood)] ring-1 ring-primary/50"
                  : "border-border bg-card hover:border-primary/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl tracking-widest text-accent">
                  {c.label}
                </span>
                {c.episodes.some((e) => e.videoUrl) && (
                  <span className="inline-flex items-center gap-1 rounded bg-primary/30 px-1.5 py-0.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                    <Film className="h-3 w-3" /> Player
                  </span>
                )}
              </div>
              <span className="block text-sm font-semibold truncate">{c.name}</span>
              <span className="block text-xs text-muted-foreground">{c.year}</span>
            </button>
          );
        })}
      </div>

      {/* EPISODES LIST */}
      <ol className="mt-8 space-y-4">
        {cour.episodes.map((ep, i) => (
          <li
            key={ep.n}
            className="surface-card animate-rise grid grid-cols-1 gap-4 rounded-sm p-4 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-5"
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <div className="flex items-center justify-between sm:flex-col sm:items-start sm:justify-start">
              <span className="font-display text-4xl leading-none text-blood-gradient sm:text-5xl">
                {String(ep.n).padStart(2, "0")}
              </span>
              {ep.videoUrl && (
                <span className="mt-1 rounded bg-accent/20 px-2 py-0.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                  1080p HD
                </span>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl tracking-wide font-semibold text-foreground">
                    {ep.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {ep.date}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ep.synopsis}
                </p>
              </div>

              {/* ACTION BUTTONS */}
              {ep.videoUrl && (
                <div className="mt-4 flex flex-wrap items-center gap-3 pt-2 border-t border-border/40">
                  <button
                    onClick={() => setSelectedVideo(ep)}
                    className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/80 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    Assistir Episódio {ep.n}
                  </button>

                  <a
                    href={ep.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-1.5 rounded border border-accent/40 bg-accent/10 px-3 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent/20"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download MP4
                  </a>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* VIDEO PLAYER MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-border bg-background/60 px-6 py-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Bleach TYBW — Episódio {selectedVideo.n}
                </span>
                <h3 className="text-2xl font-display tracking-wider text-foreground">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Fechar player"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="h-full w-full object-contain"
              >
                Seu navegador não suporta a exibição de vídeos HTML5.
              </video>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-background/40 p-4 text-xs text-muted-foreground">
              <p>{selectedVideo.synopsis}</p>
              <a
                href="https://archive.org/details/bleachsystem.-com-bleach-sennen-kessen-hen-episodio-44-legendado-1080-p"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                Fonte: Internet Archive <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

