import { createFileRoute } from "@tanstack/react-router";

import banner from "@/assets/banner.jpg";
import char1 from "@/assets/char-1.jpg";
import char2 from "@/assets/char-2.jpg";
import char3 from "@/assets/char-3.jpg";
import char4 from "@/assets/char-4.jpg";
import char5 from "@/assets/char-5.jpg";
import char6 from "@/assets/char-6.jpg";
import { EpisodeList } from "@/components/EpisodeList";
import { characters, info } from "@/data/bleach";

const images: Record<string, string> = {
  "char-1": char1,
  "char-2": char2,
  "char-3": char3,
  "char-4": char4,
  "char-5": char5,
  "char-6": char6,
};

const INTRO_URL = "https://www.youtube.com/results?search_query=bleach+thousand+year+blood+war+opening";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bleach TYBW — Episódios, Personagens e Guia Completo" },
      {
        name: "description",
        content:
          "Portal de Bleach: Thousand-Year Blood War. Lista de episódios por cour, personagens, abertura e todas as informações do anime.",
      },
      { property: "og:title", content: "Bleach TYBW — Episódios, Personagens e Guia Completo" },
      {
        property: "og:description",
        content: "Lista de episódios por cour, personagens e informações do anime Bleach TYBW.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-display text-2xl tracking-[0.3em] text-blood-gradient">
            BLEACH
          </a>
          <div className="hidden gap-7 text-sm font-semibold uppercase tracking-widest text-muted-foreground sm:flex">
            <a href="#sobre" className="transition-colors hover:text-accent">Sobre</a>
            <a href="#personagens" className="transition-colors hover:text-accent">Personagens</a>
            <a href="#episodios" className="transition-colors hover:text-accent">Episódios</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={banner}
          alt="Arte do anime Bleach: Thousand-Year Blood War com um shinigami sob um céu vermelho"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
          <p className="animate-rise text-sm font-bold uppercase tracking-[0.5em] text-accent">
            Studio Pierrot • Tite Kubo
          </p>
          <h1 className="animate-rise mt-4 text-6xl leading-[0.9] sm:text-8xl lg:text-[9rem]">
            <span className="block text-bone">THOUSAND-YEAR</span>
            <span className="block text-blood-gradient">BLOOD WAR</span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mil anos depois, o Wandenreich declara guerra à Soul Society. Ichigo Kurosaki e os
            capitães do Gotei 13 encaram o imperador Quincy Yhwach na batalha final de Bleach.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-4">
            <a
              href={INTRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-blood rounded-sm bg-primary px-8 py-4 font-display text-xl tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              ▶ ASSISTIR A INTRODUÇÃO
            </a>
            <a
              href="#episodios"
              className="rounded-sm border border-accent/60 px-8 py-4 font-display text-xl tracking-[0.2em] text-accent transition-colors hover:bg-accent/10"
            >
              LISTA DE EPISÓDIOS
            </a>
          </div>
          <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
            Acesso livre — sem cadastro
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="ash-grain border-y border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-4xl sm:text-5xl">
            <span className="text-blood-gradient">SOBRE</span> O ANIME
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Bleach: Thousand-Year Blood War adapta o arco final do mangá de Tite Kubo. Depois de
                dez anos sem anime, a obra volta com direção de arte sombria, animação de alto nível
                e uma guerra que redefine o equilíbrio entre Soul Society, Hueco Mundo e o mundo dos
                vivos.
              </p>
              <p className="leading-relaxed">
                O Wandenreich, império Quincy escondido nas sombras por mil anos, ataca em ondas
                comandadas pelos Sternritter. Bankais são roubadas, capitães caem e Ichigo precisa
                encarar a verdade sobre seu próprio sangue.
              </p>
              <p className="leading-relaxed">
                A série é dividida em cours: The Blood Warfare, The Separation, The Conflict e o
                encerramento The Blood Warfare Final, somando 52 episódios.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
              {info.map((i) => (
                <div key={i.label} className="bg-card p-4">
                  <dt className="text-xs uppercase tracking-widest text-accent">{i.label}</dt>
                  <dd className="mt-1 text-sm font-semibold">{i.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* PERSONAGENS */}
      <section id="personagens" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-4xl sm:text-5xl">
          <span className="text-blood-gradient">PERSONAGENS</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Shinigami, Quincy e humanos espirituais que definem o rumo da guerra.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c, i) => (
            <article
              key={c.name}
              className="surface-card animate-rise group overflow-hidden rounded-sm"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={images[c.img]}
                  alt={`Ilustração do personagem ${c.name}`}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="-mt-14 relative p-5">
                <h3 className="text-2xl tracking-wide">{c.name}</h3>
                <p className="text-sm font-semibold text-accent">{c.role}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.power}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EPISODIOS */}
      <section id="episodios" className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-4xl sm:text-5xl">
            <span className="text-blood-gradient">EPISÓDIOS</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Selecione um cour para ver a lista completa, com data de exibição e sinopse.
          </p>
          <div className="mt-10">
            <EpisodeList />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10 text-center">
        <p className="font-display text-2xl tracking-[0.4em] text-blood-gradient">BLEACH TYBW</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
          Site de fã — Bleach © Tite Kubo / Shueisha / Studio Pierrot
        </p>
      </footer>
    </div>
  );
}
