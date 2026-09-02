import Image from "next/image";
import { homeContent } from "../content";
import { ContactFooter } from "../contact-footer";
import { networkContent } from "./content";

export default function NetworkPage() {
  return (
    <main className="network-page">
      <div className="network-top">
        <header className="inner-header">
          <nav className="nav" aria-label="Main navigation">
            <a className="brand" href="/" aria-label="Go to the e-Phenology home page" title="Home">
              <Image className="brand-logo" src="/brand/ephenology-logo.png" alt="e-Phenology" width={2104} height={565} priority />
            </a>
            <div className="nav-links">
              {homeContent.navigation.map((item) =>
                item.label === "The Network" ? (
                  <div className="nav-menu" key={item.label}>
                    <a className="nav-menu-trigger" href={item.href}>
                      {item.label}<span className="nav-menu-icon" aria-hidden="true" />
                    </a>
                    <div className="nav-submenu" aria-label="The Network sections">
                      <a href="#foundation">Foundation</a>
                      <a href="#network-growth">Network Growth</a>
                      <a href="#participate">How to Participate</a>
                    </div>
                  </div>
                ) : item.href ? <a key={item.label} href={item.href}>{item.label}</a> :
                <span className="nav-placeholder" key={item.label} aria-disabled="true">{item.label}</span>
              )}
            </div>
          </nav>
        </header>

        <section className="network-hero">
          <p className="eyebrow">{networkContent.hero.eyebrow}</p>
          <h1>{networkContent.hero.title}</h1>
          <div className="network-introduction">
            <p>{networkContent.hero.introduction}</p>
            <p>{networkContent.hero.supportingText}</p>
          </div>
        </section>
      </div>

      <section className="network-history" aria-label="History of the e-Phenology Network">
        {networkContent.milestones.map((milestone) => (
          <article
            className="network-milestone"
            id={
              milestone.year === "2010–2011" ? "foundation" :
              milestone.year === "2013–2015" ? "network-growth" : undefined
            }
            key={milestone.year}
          >
            <div className="milestone-year">{milestone.year}</div>
            <div className="milestone-copy">
              <h2>{milestone.title}</h2>
              {milestone.year === "2010–2011" ? (
                <div className="foundation-intro-grid">
                  <div>
                    {milestone.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <NetworkVideo />
                </div>
              ) : milestone.paragraphs.map((paragraph, index) => (
                  <div className="milestone-content" key={paragraph}>
                    {milestone.year === "2022" ? (
                      <LinkedParagraph text={paragraph} linkText="PhenoChange" href="https://kyledexter.github.io/PhenoChange/about/" />
                    ) : (
                      <p>{paragraph}</p>
                    )}
                    {milestone.year === "2013–2015" && index === 1 && <GrasslandsMedia />}
                    {milestone.year === "2013–2015" && index === milestone.paragraphs.length - 1 && <CaatingaPanel />}
                    {milestone.year === "2019" && index === milestone.paragraphs.length - 1 && <DryForestPanel />}
                    {milestone.year === "2022" && index === milestone.paragraphs.length - 1 && <AfricaSites />}
                  </div>
                ))}
              {milestone.year === "2010–2011" && <AlgorithmPanel />}
            </div>
          </article>
        ))}
      </section>

      <section className="network-present">
        <p className="section-number">{networkContent.present.label}</p>
        <div>
          <h2>{networkContent.present.title}</h2>
          {networkContent.present.paragraphs.map((paragraph) => (
            <LinkedParagraph
              key={paragraph}
              text={paragraph}
              linkText={networkContent.present.linkText}
              href={networkContent.present.linkHref}
            />
          ))}
        </div>
      </section>

      <section className="network-participate" id="participate">
        <p className="section-number">How to participate</p>
        <div>
          <h2>Become part of the e-Phenology Network</h2>
          <p>
            We welcome researchers and institutions interested in tropical phenology,
            long-term ecological monitoring and collaborative data initiatives. Details
            on participation, site integration and data collaboration will be added here.
          </p>
          <a className="participate-link" href="#contact">Contact the network</a>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

function NetworkVideo() {
  return (
    <figure className="foundation-video">
      <div className="foundation-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/xIOXb9-__Fc"
          title="About the e-Phenology Network"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption>Discover the origins and scientific vision of the e-Phenology Network.</figcaption>
    </figure>
  );
}

function AlgorithmPanel() {
  const steps = [
    { number: "01", title: "Canopy selection", image: "/network/algorithm-step-1.png", alt: "Phenocamera image with a selected tree crown" },
    { number: "02", title: "Species annotation", image: "/network/algorithm-step-2.png", alt: "Tree crowns of species of interest marked in a phenocamera image" },
    { number: "03", title: "Pattern detection", image: "/network/algorithm-step-3.png", alt: "Computational classification of vegetation patterns across the image" },
  ];

  return (
    <figure className="algorithm-panel">
      <div className="core-tower-image">
        <Image src="/network/core-tower.png" alt="Phenocamera tower at the CORE woodland savanna site" width={388} height={472} />
        <figcaption>CORE site phenocamera tower</figcaption>
      </div>
      <div className="algorithm-sequence">
        <h3>From canopy selection to pattern detection.</h3>
        <div className="algorithm-steps">
          {steps.map((step) => (
            <div className="algorithm-step" key={step.number}>
              <Image src={step.image} alt={step.alt} width={764} height={578} sizes="(max-width: 760px) 100vw, 22vw" />
              <figcaption><span>{step.number}</span>{step.title}</figcaption>
            </div>
          ))}
        </div>
      </div>
    </figure>
  );
}

function GrasslandsMedia() {
  return (
    <figure className="grasslands-media">
      <div>
        <Image
          src="/network/serra-do-cipo-study-area.jpg"
          alt="Campo rupestre study area in Serra do Cipó, Minas Gerais, Brazil"
          width={2048}
          height={1283}
          sizes="(max-width: 760px) 100vw, 40vw"
        />
        <figcaption>Study area in Serra do Cipó, Minas Gerais, Brazil.</figcaption>
      </div>
      <div>
        <video autoPlay controls loop muted playsInline preload="metadata" aria-label="Time-lapse of campo rupestre vegetation recovering after fire">
          <source src="/network/campo-rupestre-post-fire-timelapse.mp4" type="video/mp4" />
        </video>
        <figcaption>Phenocamera time-lapse showing post-fire recovery in a campo rupestre grassland.</figcaption>
      </div>
    </figure>
  );
}

function CaatingaPanel() {
  const sites = [
    { name: "Cajueiro", image: "/network/caatinga-cajueiro.jpg" },
    { name: "Campina Grande", image: "/network/caatinga-campina-grande.jpg" },
    { name: "Floresta", image: "/network/caatinga-floresta.jpg" },
  ];

  return (
    <figure className="caatinga-panel">
      <div className="caatinga-panel-heading">
        <h3>Monitoring the Caatinga across Northeast Brazil.</h3>
      </div>
      <div className="caatinga-infrastructure">
        <div>
          <Image src="/network/caatinga-flux-tower.png" alt="Flux tower above Caatinga vegetation" width={1808} height={1017} sizes="(max-width: 760px) 100vw, 36vw" />
          <figcaption>Flux tower in the Caatinga</figcaption>
        </div>
        <div>
          <Image src="/network/caatinga-phenocamera.png" alt="Phenocamera view of seasonal Caatinga vegetation" width={802} height={613} sizes="(max-width: 760px) 100vw, 30vw" />
          <figcaption>Phenocamera observation of the Caatinga canopy</figcaption>
        </div>
      </div>
      <div className="caatinga-sites">
        {sites.map((site) => (
          <div key={site.name}>
            <Image src={site.image} alt={`Hemispherical phenocamera image from the ${site.name} site`} width={1280} height={960} sizes="(max-width: 760px) 100vw, 22vw" />
            <figcaption>{site.name}</figcaption>
          </div>
        ))}
      </div>
    </figure>
  );
}

function DryForestPanel() {
  return (
    <figure className="dry-forest-panel">
      <Image
        src="/network/tropical-dry-forest-seasonal-panel.png"
        alt="Aerial comparison of a tropical dry forest during the dry and wet seasons"
        width={2344}
        height={1596}
        sizes="(max-width: 760px) 100vw, 760px"
      />
      <figcaption>Drone observations of the seasonal changes in the canopy during dry and wet seasons, Petrolina, PE. Photos: Magna S.B. Moura.</figcaption>
    </figure>
  );
}

function AfricaSites() {
  const sites = [
    { name: "Ongava, Namibia", image: "/network/phenochange-ongava-namibia.jpg" },
    { name: "Bicuar, Angola", image: "/network/phenochange-bicuar-angola.jpg" },
  ];

  return (
    <figure className="africa-sites">
      <h3>PhenoChange monitoring sites in southern Africa.</h3>
      <div>
        {sites.map((site) => (
          <div key={site.name}>
            <Image src={site.image} alt={`Phenocamera view from ${site.name}`} width={2304} height={1296} sizes="(max-width: 760px) 100vw, 36vw" />
            <figcaption>{site.name}</figcaption>
          </div>
        ))}
      </div>
    </figure>
  );
}

function LinkedParagraph({ text, linkText, href }: { text: string; linkText: string; href: string }) {
  const [before, after] = text.split(linkText);

  if (after === undefined) return <p>{text}</p>;

  return (
    <p>
      {before}<a className="inline-external-link" href={href} target="_blank" rel="noreferrer">{linkText}</a>{after}
    </p>
  );
}
