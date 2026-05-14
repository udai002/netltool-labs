import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionLabel } from "@/components/PageShell";
import projectArm from "@/assets/project-arm.jpg";
import projectQuad from "@/assets/project-quad.jpg";
import projectSensor from "@/assets/project-sensor.jpg";
import heroRobot from "@/assets/hero-robot.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Netltool Labs" },
      { name: "description", content: "Active robotic prototypes from Netltool Labs — modular arms, autonomous quadrupeds, sensor meshes and more." },
      { property: "og:title", content: "Projects — Netltool Labs" },
      { property: "og:description", content: "Active robotic prototypes and field experiments." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    img: heroRobot,
    id: "NL-CORE-00",
    title: "Cortex Unit",
    tag: "Compute",
    status: "Field testing",
    body: "Modular humanoid head housing the NLOS kernel, perception stack and primary sensor array.",
  },
  {
    img: projectArm,
    id: "NL-ARM-04",
    title: "Atlas Arm",
    tag: "Manipulator",
    status: "Prototype v4",
    body: "Six-axis manipulator with hot-swappable end effectors and integrated torque telemetry.",
  },
  {
    img: projectQuad,
    id: "NL-QUAD-02",
    title: "Quad Sentinel",
    tag: "Locomotion",
    status: "Stress testing",
    body: "Autonomous four-legged platform engineered for warehouse patrol and rough-terrain inspection.",
  },
  {
    img: projectSensor,
    id: "NL-SENS-01",
    title: "Pulse Mesh",
    tag: "Telemetry",
    status: "v1.2 deployed",
    body: "Distributed sensor fabric monitoring temperature, current, vibration and joint health across the chassis.",
  },
];

function Projects() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <SectionLabel code="01 / Lab">Active Prototypes</SectionLabel>
          <h1 className="mt-6 text-5xl font-light tracking-tight md:text-7xl">Projects.</h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Every machine here is a working prototype. Each one tests a piece of
            the larger thesis — that autonomous robotics belongs in every sector,
            not just the lab.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {projects.map((p, i) => (
              <article key={p.id} className="group relative bg-background p-6 md:p-10">
                <div className="relative aspect-[4/3] overflow-hidden border border-border">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-3 top-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-foreground/80">
                    <span>{p.id}</span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground blink" /> {p.status}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <h2 className="text-2xl font-medium">{p.title}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
