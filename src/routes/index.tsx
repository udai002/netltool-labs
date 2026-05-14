import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/PageShell";
import heroRobot from "@/assets/hero-robot.jpg";
import projectArm from "@/assets/project-arm.jpg";
import projectQuad from "@/assets/project-quad.jpg";
import projectSensor from "@/assets/project-sensor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netltool Labs — Autonomous Robotics, Modular by Design" },
      { name: "description", content: "Netltool Labs builds modular autonomous robots powered by an open robotic OS and live sensor health intelligence. Research, prototypes and field notes." },
      { property: "og:title", content: "Netltool Labs" },
      { property: "og:description", content: "Modular autonomous robotics. Open robotic OS. Built for every sector." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <Pillars />
      <ProjectsPreview />
      <OSSection />
      <CTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <SectionLabel code="00 / Index">Robotics Research Lab</SectionLabel>
          <h1 className="mt-8 text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-[88px]">
            The <em className="not-italic font-mono italic text-muted-foreground">soul</em> of
            <br />autonomous
            <br />machines.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Netltool Labs designs modular robots you can rebuild like Lego —
            governed by a Linux-grade robotic operating system and a live sensor
            mesh that monitors the machine's vitals in real time.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              <span>Explore Projects</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/community"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
            >
              Join the Community
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              ["07", "Active prototypes"],
              ["12", "Modular subsystems"],
              ["∞", "Sectors served"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-3xl text-foreground">{n}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative corner-frame p-3">
            <div className="relative overflow-hidden border border-border">
              <img
                src={heroRobot}
                alt="Modular autonomous robot head designed by Netltool Labs"
                width={1536}
                height={1536}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                UNIT-NL/01 · ACTIVE
              </div>
              <div className="absolute right-3 top-3 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground blink" /> Telemetry
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/70">
                <span>CPU 41%</span>
                <span>TEMP 38°C</span>
                <span>PWR 92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Modular Hardware",
    "Open Robotic OS",
    "Sensor Health Mesh",
    "Autonomous Navigation",
    "Swarm Coordination",
    "Edge AI Inference",
    "Field-Serviceable",
  ];
  const loop = [...items, ...items];
  return (
    <section className="border-b border-border overflow-hidden bg-card">
      <div className="ticker flex whitespace-nowrap py-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center px-8">
            <span className="mr-8 text-foreground/30">◇</span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  const data = [
    {
      code: "P.01",
      title: "Modular by Design",
      body: "Swap a sensor, a limb, or an entire compute stack in minutes. Every subsystem speaks the same standardized bus.",
    },
    {
      code: "P.02",
      title: "Robotic OS",
      body: "A Linux-based operating system purpose-built for robots — the soul that orchestrates motion, perception, and decision.",
    },
    {
      code: "P.03",
      title: "Sensor Vitals",
      body: "Continuous health telemetry across every joint, motor, and chip. Predict failures before they happen.",
    },
    {
      code: "P.04",
      title: "Sector Agnostic",
      body: "From warehouses to disaster zones, defense to agriculture — one platform, infinite deployments.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel code="01 / Doctrine">Operating Principles</SectionLabel>
            <h2 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
              Engineering<br />the post-human<br />workforce.
            </h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
            {data.map((d) => (
              <div key={d.code} className="group relative bg-background p-8 transition-colors hover:bg-card">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{d.code}</div>
                <h3 className="mt-6 text-xl font-medium">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                <div className="mt-8 h-px w-8 bg-foreground transition-all group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const projects = [
    { img: projectArm, title: "Atlas Arm", id: "NL-ARM-04", tag: "Manipulator" },
    { img: projectQuad, title: "Quad Sentinel", id: "NL-QUAD-02", tag: "Locomotion" },
    { img: projectSensor, title: "Pulse Mesh", id: "NL-SENS-01", tag: "Telemetry" },
  ];
  return (
    <section className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel code="02 / Lab">Active Prototypes</SectionLabel>
            <h2 className="mt-6 text-4xl font-light tracking-tight md:text-5xl">
              From schematic<br />to substrate.
            </h2>
          </div>
          <Link to="/projects" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
            All projects →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {projects.map((p) => (
            <Link
              to="/projects"
              key={p.id}
              className="group relative bg-background p-5 transition-colors hover:bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                  {p.id}
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function OSSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-5">
          <SectionLabel code="03 / Kernel">Robotic Operating System</SectionLabel>
          <h2 className="mt-6 text-4xl font-light tracking-tight md:text-5xl">
            One kernel.<br />Every machine.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            NLOS is a Linux-based real-time operating system for robots. It abstracts
            the hardware, schedules motion in microseconds, and exposes a single
            sensor graph for every component on the chassis.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="relative corner-frame border border-border bg-card p-6 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-muted-foreground">nlos@unit-nl-01:~$</span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground blink" /> 12ms
              </span>
            </div>
            <pre className="mt-4 whitespace-pre-wrap leading-relaxed text-muted-foreground">
{`> nlos status --all
[OK]  kernel.motion        scheduler @ 1kHz
[OK]  kernel.perception    9 sensors active
[OK]  kernel.health        nominal · 42°C
[OK]  module.arm.left      torque 0.42 Nm
[OK]  module.lidar.front   range 18.4 m
[..]  module.gripper       calibrating...
> _`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="relative corner-frame border border-border bg-card p-10 md:p-20">
          <SectionLabel code="04 / Signal">Open Invitation</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
            Join the engineers building the next layer of intelligent machines.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/community"
              className="inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background hover:bg-transparent hover:text-foreground"
            >
              Enter the Lab →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] hover:border-foreground"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
