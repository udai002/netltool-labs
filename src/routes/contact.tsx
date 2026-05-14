import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Netltool Labs" },
      { name: "description", content: "Partner, collaborate or just say hello. Netltool Labs is open to research collaborations, pilots and conversations." },
      { property: "og:title", content: "Contact — Netltool Labs" },
      { property: "og:description", content: "Reach the Netltool Labs team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-6">
            <SectionLabel code="05 / Channel">Open Line</SectionLabel>
            <h1 className="mt-6 text-5xl font-light tracking-tight md:text-7xl">Get in touch.</h1>
            <p className="mt-8 max-w-md text-muted-foreground">
              Pilots, partnerships, press, or pure curiosity — drop us a signal.
              We respond to every transmission within 48 hours.
            </p>
            <div className="mt-12 space-y-6 font-mono text-sm">
              {[
                ["Email", "hello@netltool.labs"],
                ["Press", "press@netltool.labs"],
                ["Careers", "build@netltool.labs"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative corner-frame border border-border bg-card p-8 md:p-10"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">// New transmission</div>
              <div className="mt-6 space-y-5">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Organisation" name="org" />
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    rows={5}
                    className="mt-2 w-full border border-border bg-background px-3 py-3 font-sans text-sm focus:border-foreground focus:outline-none"
                    placeholder="What are you building?"
                  />
                </div>
                <button className="w-full border border-foreground bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background hover:bg-transparent hover:text-foreground">
                  Transmit →
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full border border-border bg-background px-3 py-3 font-sans text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}
