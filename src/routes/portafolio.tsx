import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PortfolioNav } from "@/components/PortfolioNav";

export const Route = createFileRoute("/portafolio")({
  component: PortfolioLayout,
});

function PortfolioLayout() {
  return (
    <div className="grain min-h-screen">
      <SiteHeader />
      <main className="relative px-6 pb-24 md:px-12">
        <section className="pt-12 md:pt-24">
          <p className="eyebrow text-muted-foreground">Portafolio</p>
          <h1 className="display-xl mt-6 max-w-4xl">
            Una selección de <em className="text-accent">trabajos</em> recientes.
          </h1>
          <div className="mt-12">
            <PortfolioNav />
          </div>
        </section>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
