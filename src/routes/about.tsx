import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Netltool Labs" },
      { name: "description", content: "Netltool Labs is a robotics research and development studio building modular autonomous machines and the operating system that runs them." },
      { property: "og:title", content: "About — Netltool Labs" },
      { property: "og:description", content: "Robotics R&D studio building modular autonomous machines." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionLabel code="04 / Origin">The Lab</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-light leading-[1] tracking-tight md:text-7xl">
            We build the<br />machines that<br />work where humans<br /><em className="not-italic font-mono italic text-muted-foreground">shouldn't have to</em>.
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <SectionLabel code="01">Thesis</SectionLabel>
            <h2 className="mt-6 text-3xl font-light tracking-tight">Modular. Autonomous. Sector-agnostic.</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Netltool Labs is a robotics research and development studio. We
              design autonomous machines that are modular at every layer —
              hardware, firmware, and operating system — so a single platform
              can serve warehouses, farms, disaster zones and defense alike.
            </p>
            <p>
              Underneath every chassis is NLOS, our Linux-based robotic
              operating system. It is the soul of the robot: scheduling motion
              in microseconds, fusing sensor data, and continuously reporting
              the health of every joint, motor and chip on board.
            </p>
            <p>
              We believe the next decade of automation will be defined not by
              bigger robots, but by simpler, repairable, sensor-aware ones.
              That is what we are building.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <SectionLabel code="02">Sectors</SectionLabel>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {[
              ["Logistics", "Autonomous handling, picking and patrol."],
              ["Agriculture", "Sensor-rich field robots for precision farming."],
              ["Defense", "Reconnaissance and EOD-class autonomous units."],
              ["Inspection", "Hazardous-site and infrastructure surveys."],
            ].map(([t, d]) => (
              <div key={t} className="bg-background p-8">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">// Sector</div>
                <h3 className="mt-4 text-xl font-medium">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
