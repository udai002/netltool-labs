import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Netltool Labs" },
      { name: "description", content: "Join the Netltool Labs community of roboticists, engineers and researchers building the open future of autonomous machines." },
      { property: "og:title", content: "Community — Netltool Labs" },
      { property: "og:description", content: "An open community of roboticists building modular autonomous machines." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionLabel code="03 / Network">Open Community</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-5xl font-light tracking-tight md:text-7xl">
            Build robots<br />in the open.
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground">
            The Netltool community is an open network of roboticists, firmware
            engineers, mechanical designers and researchers. Share a build,
            crack a problem, ship a module.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
            {[
              { code: "C.01", t: "Discord", d: "Daily build chat, weekly demos, hardware swap board.", cta: "Join channel" },
              { code: "C.02", t: "GitHub", d: "Open kernel modules, schematics and reference firmware.", cta: "Browse repos" },
              { code: "C.03", t: "Lab Days", d: "Monthly in-person residencies for builders and researchers.", cta: "See schedule" },
            ].map((c) => (
              <div key={c.code} className="group relative bg-background p-10 transition-colors hover:bg-card">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.code}</div>
                <h3 className="mt-6 text-2xl font-medium">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
                <div className="mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span>{c.cta}</span>
                  <span className="h-px w-8 bg-foreground transition-all group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <div className="relative corner-frame border border-border bg-card p-10 md:p-16">
            <SectionLabel code="04 / Signal">Subscribe to dispatch</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-3xl font-light tracking-tight md:text-5xl">
              Monthly transmissions from the lab.
            </h2>
            <form className="mt-10 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="operator@domain.io"
                className="flex-1 border border-border bg-background px-4 py-3 font-mono text-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
              <button className="border border-foreground bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background hover:bg-transparent hover:text-foreground">
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
