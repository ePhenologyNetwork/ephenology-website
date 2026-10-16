import Image from "next/image";
import Link from "next/link";
import { homeContent } from "../content";
import { ContactFooter } from "../contact-footer";
import { networkContent } from "./content";

export default function NetworkPage() {
  return (
    <main className="network-page">
      <div className="network-top">
        <header className="inner-header">
          <nav className="nav" aria-label="Main navigation">
            <Link className="brand" href="/" aria-label="Go to the e-Phenology home page" title="Home">
              <Image className="brand-logo" src="/brand/ephenology-logo.png" alt="e-Phenology" width={2104} height={565} priority />
            </Link>
            <div className="nav-links">
              {homeContent.navigation.map((item) =>
                item.label === "The Network" ? (
                  <div className="nav-menu" key={item.label}>
                    <a className="nav-menu-trigger" href={item.href}>
                      {item.label}<span className="nav-menu-icon" aria-hidden="true" />
                    </a>
                    <div className="nav-submenu" aria-label="The Network sections">
                      <a href="#foundation">Foundation</a>
                      <a href="#network-growth">What do we monitor</a>
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
          </div>
        </section>
      </div>

      <section className="network-history" aria-label="History of the e-Phenology Network">
        {networkContent.milestones.slice(0, 2).map((milestone) => (
          <article
            className="network-milestone"
            id={
              milestone.year === "2010–2011" ? "foundation" :
              milestone.year === "2013–2015" ? "network-growth" : undefined
            }
            key={milestone.year}
          >
            <div className="milestone-year">
              {milestone.year === "2010–2011" ? "Foundation" :
                milestone.year === "2013–2015" ? "What do we monitor" : milestone.year}
            </div>
            <div className="milestone-copy">
              <h2>{milestone.title}</h2>
              {milestone.year === "2010–2011" ? (
                <div className="foundation-intro-grid">
                  <div>
                    {milestone.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <div className="foundation-video-stack">
                    <NetworkVideo
                      videoId="xIOXb9-__Fc"
                      title="About the e-Phenology Network"
                      caption="Discover the origins and scientific vision of the e-Phenology Network."
                    />
                    <NetworkVideo
                      videoId="9foSxoI25Pg"
                      title="Research developed by the e-Phenology Network"
                      caption="Learn more about the research and monitoring developed by the e-Phenology Network."
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="monitoring-intro-layout">
                    <div>
                      {milestone.paragraphs.slice(0, 3).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <figure className="monitoring-methods-figure">
                      <Image
                        src="/network/phenology-monitoring-methods.png"
                        alt="Diagrams and photographs of phenocamera monitoring above tree canopies and tropical mountain grasslands"
                        width={477}
                        height={328}
                        sizes="(max-width: 760px) calc(100vw - 32px), 42vw"
                      />
                      <figcaption>
                        Brazilian sites from e-phenology network and their different phenology monitoring setups for woody and open vegetation: (A) sketch of the hemispherical lens camera mounting design for forest canopy; (B) camera set up in the field; (C) sample image captured by the hemispherical lens digital camera in the cerrado sensu stricto vegetation (Itirapina, SP); (D) sketch of the camera mounting design for a landscape perspective; (E) camera set up in the field, (F) sample image of the heterogeneous landscape in the Serra do Cipó mountain range (Santana do Riacho, Minas Gerais State, Brazil). For more details, see: {" "}
                        <a href="https://www.sciencedirect.com/science/article/pii/S2530064417300019" target="_blank" rel="noreferrer">Alberton et al., 2017</a>.
                      </figcaption>
                    </figure>
                  </div>
                  <h3 className="monitoring-scales-title">Monitoring tropical mountains and post-fire recovery</h3>
                  {milestone.paragraphs.slice(3).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <GrasslandsMedia />
                  <p className="monitoring-sites-invitation">
                    Discover the ecosystems and locations that make up our monitoring network. {" "}
                    <a className="inline-external-link" href="/monitoring-sites">Explore all monitoring sites →</a>
                  </p>
                  <h3 className="monitoring-scales-title">Connecting observations across scales</h3>
                  <p>We combine near-surface phenocameras, drone surveys, and satellite imagery to connect changes in individual plants and canopies with patterns across tropical landscapes. Each approach provides a complementary perspective: phenocameras record daily canopy dynamics and allow the identification of biological events, drones reveal spatial variation, and satellites extend observations across larger areas.</p>
                  <p>At sites where cameras operate alongside flux towers and meteorological sensors, these observations help connect vegetation change with climate and the exchange of carbon, water and energy. Computational tools turn repeated imagery into time series that can be compared across sites, ecosystems and observation scales.</p>
                  <div className="multiscale-network-panels">
                    <CaatingaPanel />
                    <DryForestPanel />
                  </div>
                </>
              )}
              {milestone.year === "2010–2011" && <AlgorithmPanel />}
            </div>
          </article>
        ))}
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

function NetworkVideo({ videoId, title, caption }: { videoId: string; title: string; caption: string }) {
  return (
    <figure className="foundation-video">
      <div className="foundation-video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption>{caption}</figcaption>
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
        <figcaption className="algorithm-panel-caption">
          Machine learning techniques for species identification based on phenocamera time series. For more details, see: {" "}
          <a
            href="https://www.sciencedirect.com/science/article/pii/S1574954113000654"
            target="_blank"
            rel="noreferrer"
          >
            Almeida et al., 2014
          </a>.
        </figcaption>
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
  return (
    <figure className="dry-forest-panel">
      <Image src="/network/caatinga-flux-tower.png" alt="Flux tower above Caatinga vegetation" width={1808} height={1017} sizes="(max-width: 900px) 100vw, 45vw" />
      <figcaption>Flux tower in the Caatinga.</figcaption>
    </figure>
  );
}

function DryForestPanel() {
  return (
    <figure className="dry-forest-panel drone-seasonal-panel">
      <div className="drone-season-labels"><span>Dry season</span><span>Wet season</span></div>
      <div className="drone-seasonal-image">
      <Image
        src="/network/tropical-dry-forest-seasonal-panel.png"
        alt="Aerial comparison of a tropical dry forest during the dry and wet seasons"
        width={2344}
        height={1596}
        sizes="(max-width: 760px) 100vw, 760px"
      />
      </div>
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
