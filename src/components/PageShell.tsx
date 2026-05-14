import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-px scan-line scan" />
      <SiteHeader />
      <main className="relative pt-14">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionLabel({ code, children }: { code: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className="text-foreground/40">{code}</span>
      <span className="h-px w-8 bg-border" />
      <span>{children}</span>
    </div>
  );
}
