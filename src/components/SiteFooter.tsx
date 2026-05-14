import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-6 w-6 items-center justify-center border border-foreground">
                <div className="h-1.5 w-1.5 bg-foreground" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
                Netltool<span className="text-muted-foreground">/Labs</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Building the operating soul of autonomous machines. Modular hardware,
              open robotic OS, and sensor-driven health intelligence — engineered
              for every sector that demands precision without human risk.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/projects" className="hover:text-foreground text-muted-foreground">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-foreground text-muted-foreground">Field Notes</Link></li>
              <li><Link to="/community" className="hover:text-foreground text-muted-foreground">Community</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Lab</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground text-muted-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Netltool Labs — All systems reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Lat 12.97°N · Long 77.59°E · Build 0.1.4
          </p>
        </div>
      </div>
    </footer>
  );
}
