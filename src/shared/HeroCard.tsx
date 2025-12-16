import "./HeroCard.css";

type CTA =
  | {label: string; href: string; kind?: "primary" | "ghost"}
  | {label: string; onClick: () => void; kind?: "primary" | "ghost"};

type HeroCardProps = {
  title: string;
  subtitle: string;
  ctas?: CTA[];
};

function isLinkCta(cta: CTA): cta is {label: string; href: string; kind?: "primary" | "ghost"} {
  return "href" in cta;
}

function HeroCard({title, subtitle, ctas = []}: HeroCardProps) {
  return (
    <section className="hero-card">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {ctas.length ? (
        <div className="cta-row">
          {ctas.map((cta) =>
            isLinkCta(cta) ? (
              <a key={cta.label} className={`button ${cta.kind ?? "primary"}`} href={cta.href}>
                {cta.label}
              </a>
            ) : (
              <button
                key={cta.label}
                className={`button ${cta.kind ?? "primary"}`}
                type="button"
                onClick={cta.onClick}
              >
                {cta.label}
              </button>
            )
          )}
        </div>
      ) : null}
    </section>
  );
}

export default HeroCard;

