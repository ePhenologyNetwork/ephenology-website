import Image from "next/image";
import Link from "next/link";
import { homeContent } from "./content";
import { ContactFooter } from "./contact-footer";

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
          <Link className="brand" href="/" aria-label="Go to the e-Phenology home page" title="Home">
            <BrandLogo />
          </Link>

          <div className="nav-links">
              {homeContent.navigation.map((item) =>
                item.label === "The Network" ? (
                  <div className="nav-menu" key={item.label}>
                    <a className="nav-menu-trigger" href={item.href}>
                      {item.label}<span className="nav-menu-icon" aria-hidden="true" />
                    </a>
                    <div className="nav-submenu" aria-label="The Network sections">
                      <a href="/network#foundation">Foundation</a>
                      <a href="/network#network-growth">Network Growth</a>
                      <a href="/network#participate">How to Participate</a>
                    </div>
                  </div>
                ) : item.href ? (
                  <a key={item.label} href={item.href}>{item.label}</a>
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

      <section className="editorial-section monitoring-environments" id="monitoring">
        <div className="combined-topics">
          <article>
            <p className="section-number">{homeContent.monitoring.sectionLabel}</p>
            <h2>{homeContent.monitoring.title}</h2>
            <p>{homeContent.monitoring.description}</p>
            <p>{homeContent.monitoring.supportingText}</p>
          </article>
          <article id="environments">
            <p className="section-number">{homeContent.environments.sectionLabel}</p>
            <h2>{homeContent.environments.title}</h2>
            <p>{homeContent.environments.description}</p>
            <p>{homeContent.environments.supportingText}</p>
          </article>
        </div>
        <figure className="monitoring-panel">
          <div className="monitoring-marquee">
            <div className="monitoring-marquee-track">
              <Image
                src="/home/long-term-monitoring-panel.png"
                alt="Phenological and flux towers equipped with cameras above tropical vegetation"
                width={2400}
                height={1000}
                sizes="(max-width: 760px) 900px, 1200px"
              />
              <Image
                src="/home/long-term-monitoring-panel.png"
                alt=""
                aria-hidden="true"
                width={2400}
                height={1000}
                sizes="(max-width: 760px) 900px, 1200px"
              />
            </div>
          </div>
          <figcaption>
            Phenological and flux towers support continuous, long-term observations of tropical vegetation canopies.
          </figcaption>
        </figure>
      </section>

      <section className="seasonal-story" id="seasonal-story">
        <div className="seasonal-story-heading">
          <p className="section-number">{homeContent.seasonalStory.sectionLabel}</p>
          <div>
            <h2>{homeContent.seasonalStory.title}</h2>
            <p>{homeContent.seasonalStory.description}</p>
          </div>
        </div>
        <div className="seasonal-comparisons">
          {homeContent.seasonalStory.ecosystems.map((ecosystem) => (
            <figure className="seasonal-comparison" key={ecosystem.name}>
              <div className="seasonal-image-pair">
                <div>
                  <Image src={ecosystem.dry} alt={`${ecosystem.name} vegetation during the dry season`} fill sizes="(max-width: 760px) 50vw, 17vw" />
                  <span>Dry season</span>
                </div>
                <div>
                  <Image src={ecosystem.wet} alt={`${ecosystem.name} vegetation during the wet season`} fill sizes="(max-width: 760px) 50vw, 17vw" />
                  <span>Wet season</span>
                </div>
              </div>
              <figcaption>{ecosystem.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="multiscale-section" id="multiscale">
        <div className="multiscale-layout">
          <article className="multiscale-copy">
            <p className="section-number">{homeContent.multiscale.sectionLabel}</p>
            <h2>{homeContent.multiscale.title}</h2>
            <p>{homeContent.multiscale.description}</p>
            <p>{homeContent.multiscale.supportingText}</p>
          </article>
          <figure className="multiscale-figure">
            <Image
              src="/home/multiscale-observations.png"
              alt="Multiscale monitoring approach combining on-the-ground observations, phenocameras, drones and satellites"
              width={1726}
              height={911}
              sizes="(max-width: 760px) calc(100vw - 32px), 56vw"
            />
            <figcaption>
              From individual plants to tropical landscapes: complementary observations connect processes across scales.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="explore-network-section" id="explore-network">
        <div className="explore-network-heading">
          <p className="section-number">Explore the network</p>
          <div>
            <h2>Where would you like to begin?</h2>
            <p>Choose a path to understand the science, explore the monitoring network, or take part in its next chapter.</p>
          </div>
        </div>

        <div className="explore-network-grid">
          <article className="explore-network-card community-callout-card">
            <div className="community-preview">
              <Image src="/home/seasons/cerrado-wet.jpg" alt="A green Cerrado canopy observed during the wet season" fill sizes="(max-width: 760px) 100vw, 33vw" />
            </div>
            <div className="explore-network-copy">
              <p className="explore-card-label">What do we monitor?</p>
              <h3>Understand the rhythm of tropical vegetation.</h3>
              <p>See how repeated images turn seasonal change into scientific evidence.</p>
              <a href="#seasonal-story">Discover phenology <span aria-hidden="true">↓</span></a>
            </div>
          </article>

          <article className="explore-network-card map-callout-card">
            <div className="home-map-preview">
              <Image
                src="/home/monitoring-sites-map-thumbnail.jpg"
                alt="Map of e-Phenology monitoring sites across Brazil"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <div className="home-map-stat"><strong>23</strong><span>monitoring sites</span></div>
            </div>
            <div className="explore-network-copy">
              <p className="explore-card-label">Meet our monitoring sites</p>
              <h3>A network across tropical ecosystems.</h3>
              <p>Explore the locations, ecosystems and observations that shape our tropical phenology monitoring network.</p>
              <a href="/monitoring-sites">Explore the map <span aria-hidden="true">↗</span></a>
            </div>
          </article>

          <article className="explore-network-card participate-callout-card">
            <div className="participate-image-pair">
              <Image src="/home/how-to-participate-field-installation.jpg" alt="Researchers installing monitoring equipment in a campo rupestre site" fill sizes="(max-width: 760px) 100vw, 25vw" />
              <Image src="/home/how-to-participate-tower.jpg" alt="Researchers collecting data from a monitoring tower in the Cerrado" fill sizes="(max-width: 760px) 100vw, 25vw" />
            </div>
            <div className="explore-network-copy">
              <p className="explore-card-label">For institutions and collaborators</p>
              <h3>Build the next chapter with us.</h3>
              <p>Researchers and institutions can contribute observations, establish new monitoring sites and collaborate on the analysis of tropical vegetation dynamics.</p>
              <a href="/network#participate">How to participate <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
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

      <ContactFooter />
    </main>
  );
}
