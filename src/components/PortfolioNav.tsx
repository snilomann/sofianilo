import { Link } from "@tanstack/react-router";

export function PortfolioNav() {
  return (
    <div className="flex items-center gap-6 border-b border-border pb-4">
      <span className="eyebrow text-muted-foreground">Categorías</span>
      <Link
        to="/portafolio/grafico"
        className="font-display text-2xl text-foreground/40 transition-colors hover:text-foreground"
        activeProps={{ className: "font-display text-2xl text-foreground italic" }}
      >
        Diseño Gráfico
      </Link>
      <Link
        to="/portafolio/ux-ui"
        className="font-display text-2xl text-foreground/40 transition-colors hover:text-foreground"
        activeProps={{ className: "font-display text-2xl text-foreground italic" }}
      >
        UX / UI
      </Link>
    </div>
  );
}
