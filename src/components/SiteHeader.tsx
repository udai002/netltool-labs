import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Index", code: "00" },
  { to: "/projects", label: "Projects", code: "01" },
  { to: "/blog", label: "Field Notes", code: "02" },
  { to: "/community", label: "Community", code: "03" },
  { to: "/about", label: "About", code: "04" },
  { to: "/contact", label: "Contact", code: "05" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-6 w-6 items-center justify-center border border-foreground">
            <div className="h-1.5 w-1.5 bg-foreground blink" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em]">
            Netltool<span className="text-muted-foreground">/Labs</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="group relative px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              <span className="text-foreground/30 mr-1.5">{n.code}</span>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-foreground blink" />
          <span>System Online</span>
        </div>

        <button
          className="md:hidden font-mono text-[11px] uppercase tracking-widest"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                <span className="text-foreground/30 mr-2">{n.code}</span>
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
