import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Field Notes — Netltool Labs" },
      { name: "description", content: "Engineering essays, build logs and research notes from the Netltool Labs robotics team." },
      { property: "og:title", content: "Field Notes — Netltool Labs" },
      { property: "og:description", content: "Engineering essays and build logs from the lab." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    date: "2026.04.18",
    cat: "Build Log",
    title: "Why we wrote our own scheduler instead of using ROS2",
    excerpt: "Microsecond determinism matters when you're closing a torque loop on a 12kg arm. Here's what we learned shipping a custom scheduler.",
    read: "8 min",
  },
  {
    date: "2026.03.30",
    cat: "Research",
    title: "Sensor health as a first-class signal",
    excerpt: "Predicting motor failure 12 hours before it happens — the telemetry mesh that became the core of NLOS.",
    read: "11 min",
  },
  {
    date: "2026.03.12",
    cat: "Manifesto",
    title: "Modularity is not a feature. It is a worldview.",
    excerpt: "Most robots ship as monoliths. Ours snap together. A short essay on why field-serviceability beats integration.",
    read: "5 min",
  },
  {
    date: "2026.02.25",
    cat: "Build Log",
    title: "The first walk of Quad Sentinel",
    excerpt: "Photos, code, failures. The 47-day journey from CAD file to first autonomous lap of the warehouse.",
    read: "14 min",
  },
];

function Blog() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionLabel code="02 / Signal">Field Notes</SectionLabel>
          <h1 className="mt-6 text-5xl font-light tracking-tight md:text-7xl">Notes from<br />the lab.</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-5 md:px-10">
          <div className="divide-y divide-border">
            {posts.map((p, i) => (
              <a key={i} href="#" className="group block py-10 transition-colors hover:bg-card/40">
                <div className="grid grid-cols-12 gap-6 px-2">
                  <div className="col-span-12 md:col-span-3">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.date}</div>
                    <div className="mt-2 inline-block border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
                      {p.cat}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h2 className="text-2xl font-light leading-snug tracking-tight transition-colors md:text-3xl group-hover:text-foreground">
                      {p.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>{p.read} read</span>
                      <span className="h-px w-6 bg-border transition-all group-hover:w-12 group-hover:bg-foreground" />
                      <span className="transition-colors group-hover:text-foreground">Read →</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="py-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">// More entries logging soon</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
