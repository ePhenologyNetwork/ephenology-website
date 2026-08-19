import Image from "next/image";
import { homeContent } from "./content";

const BrandLogo = ({ footer = false }: { footer?: boolean }) => (
  <Image
    className={footer ? "brand-logo brand-logo-footer" : "brand-logo"}
    src="/brand/ephenology-logo.png"
    alt="e-Phenology"
    width={2104}
    height={565}
    priority={!footer}
  />
);

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="e-Phenology home">
            <BrandLogo />
          </a>

          <div className="nav-links">
            {homeContent.navigation.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ) : (
                <span
                  className="nav-placeholder"
                  key={item.label}
                  aria-disabled="true"
                  title="Page in development"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </nav>

        <div className="hero-content" id="top">
          <p className="eyebrow">{homeContent.hero.eyebrow}</p>
          <h1>
            {homeContent.hero.title}
            <em>{homeContent.hero.highlightedTitle}</em>
          </h1>
          <p className="intro">{homeContent.hero.description}</p>
          <a className="primary-link" href="#monitoring">
            {homeContent.hero.linkLabel} <span aria-hidden="true">↓</span>
          </a>
        </div>

      </section>

      <section className="editorial-section" id="monitoring">
        <div className="section-copy">
          <p className="section-number">{homeContent.monitoring.sectionLabel}</p>
          <div>
            <h2>{homeContent.monitoring.title}</h2>
            <p>{homeContent.monitoring.description}</p>
            <p>{homeContent.monitoring.supportingText}</p>
          </div>
        </div>
        <figure className="monitoring-panel">
          <Image
            src="/home/long-term-monitoring-panel.png"
            alt="Phenological and flux towers equipped with cameras above tropical vegetation"
            width={2400}
            height={1000}
            sizes="(max-width: 760px) calc(100vw - 32px), 1200px"
          />
          <figcaption>
            Phenological and flux towers support continuous, long-term observations of tropical vegetation canopies.
          </figcaption>
        </figure>
      </section>

      <section className="editorial-section environments" id="environments">
        <div className="section-copy">
          <p className="section-number">{homeContent.environments.sectionLabel}</p>
          <div>
            <h2>{homeContent.environments.title}</h2>
            <p>{homeContent.environments.description}</p>
            <p>{homeContent.environments.supportingText}</p>
          </div>
        </div>
        <figure className="environments-panel">
          <Image
            src="/home/tropical-environments-panel.png"
            alt="Seasonal canopy comparison across tropical dry forest, woodland savanna and rainforest"
            width={4128}
            height={1214}
            sizes="(max-width: 760px) calc(100vw - 32px), 1200px"
          />
          <figcaption>
            Seasonal canopy variation across tropical dry forest, woodland savanna and rainforest.
          </figcaption>
        </figure>
      </section>

      <section className="multiscale-section" id="multiscale">
        <div className="section-copy">
          <p className="section-number">{homeContent.multiscale.sectionLabel}</p>
          <div>
            <h2>{homeContent.multiscale.title}</h2>
            <p>{homeContent.multiscale.description}</p>
            <p>{homeContent.multiscale.supportingText}</p>
          </div>
        </div>
        <figure className="multiscale-figure">
          <Image
            src="/home/multiscale-observations.png"
            alt="Multiscale monitoring approach combining on-the-ground observations, phenocameras, drones and satellites"
            width={1726}
            height={911}
            sizes="(max-width: 760px) calc(100vw - 32px), 1200px"
          />
          <figcaption>
            From individual plants to tropical landscapes: complementary observations connect processes across scales.
          </figcaption>
        </figure>
      </section>

      <section className="funding-section">
        <div className="section-copy">
          <p className="section-number">{homeContent.funding.sectionLabel}</p>
          <div>
            <h2>{homeContent.funding.title}</h2>
            <p>{homeContent.funding.description}</p>
          </div>
        </div>
        <div className="funders">
          {homeContent.funding.partners.map((partner) => (
            <div key={partner.name}>
              <Image
                className="funder-logo"
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={900}
                height={500}
                sizes="(max-width: 760px) 80vw, 34vw"
              />
              <span>{partner.fullName}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <a className="brand" href="#top">
          <BrandLogo footer />
        </a>
        <p>{homeContent.footer.text}</p>
      </footer>
    </main>
  );
}
