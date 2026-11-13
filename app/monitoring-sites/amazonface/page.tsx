import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "../../contact-footer";
import { homeContent } from "../../content";
import { amazonFaceArea, amazonFacePlots, amazonFaceUnderstory } from "./data";

export const metadata: Metadata = {
  title: "AmazonFACE Monitoring | e-Phenology",
  description: "Explore canopy and understory phenology monitoring across the AmazonFACE experimental plots near Manaus, Brazil.",
};

export default function AmazonFacePage() {
  return (
    <main className="study-area-page amazonface-page">
      <header className="study-area-header amazonface-header">
        <Image className="study-area-hero-image" src={amazonFaceArea.image} alt="Aerial view of the AmazonFACE experiment in the Amazon rainforest" fill sizes="100vw" priority />
        <div className="sites-hero-overlay" aria-hidden="true" />
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Go to the e-Phenology home page" title="Home">
            <Image className="brand-logo" src="/brand/ephenology-logo.png" alt="e-Phenology" width={2104} height={565} priority />
          </Link>
          <div className="nav-links">
            {homeContent.navigation.map((item) =>
              item.label === "The Network" ? (
                <div className="nav-menu" key={item.label}>
                  <a className="nav-menu-trigger" href={item.href}>{item.label}<span className="nav-menu-icon" aria-hidden="true" /></a>
                  <div className="nav-submenu" aria-label="The Network sections">
                    <a href="/network#foundation">Foundation</a><a href="/network#network-growth">What do we monitor</a><a href="/network#participate">How to Participate</a>
                  </div>
                </div>
              ) : item.href ? <a key={item.label} href={item.href}>{item.label}</a> : <span className="nav-placeholder" key={item.label} aria-disabled="true">{item.label}</span>
            )}
          </div>
        </nav>
        <div className="study-area-hero">
          <Link className="study-area-back" href="/monitoring-sites">← All monitoring sites</Link>
          <p className="eyebrow">Amazon rainforest study area</p>
          <h1>AmazonFACE</h1>
          <p>Canopy and understory monitoring within a unique tropical forest experiment.</p>
        </div>
      </header>

      <section className="sites-overview study-area-overview" aria-label="AmazonFACE monitoring summary">
        <div className="sites-stat"><strong>6</strong><span>experimental plots</span></div>
        <div className="sites-stat"><strong>6</strong><span>canopy phenocameras</span></div>
        <div className="sites-stat"><strong>2015</strong><span>first monitoring year</span></div>
        <div className="sites-stat"><strong>2</strong><span>forest observation levels</span></div>
      </section>

      <section className="study-area-intro amazonface-intro">
        <div className="study-area-intro-layout">
          <div className="study-area-program amazonface-partner" aria-label="AmazonFACE partner program">
            <Image className="amazonface-logo" src="/brand/amazonface-logo.png" alt="AmazonFACE" width={500} height={331} />
            <div><span>Research partnership</span><strong>AmazonFACE</strong><p>Amazon Free-Air CO₂ Enrichment</p></div>
          </div>
          <div className="study-area-intro-copy">
            <p><strong>AmazonFACE</strong> is an experimental research program in the central Amazon that investigates how a mature tropical forest may respond to future atmospheric conditions.</p>
            <p>The e-Phenology Network collaboration adds continuous image-based observations across the experimental plots, connecting changes in the forest canopy with monitoring inside the vegetation.</p>
          </div>
        </div>
        <div className="study-area-intro-copy">
          <dl className="study-area-facts">
            <div><dt>Ecosystem</dt><dd>Terra firme Amazon rainforest</dd></div>
            <div><dt>Region</dt><dd>Manaus, Amazonas, Brazil</dd></div>
            <div><dt>Research program</dt><dd>AmazonFACE</dd></div>
            <div><dt>Partner institutions</dt><dd>Unicamp / INPA</dd></div>
            <div><dt>Monitoring system</dt><dd>Canopy phenocameras and understory camera traps</dd></div>
          </dl>
        </div>
      </section>

      <section className="amazonface-plots-section">
        <div className="sites-section-heading">
          <p className="section-number">Canopy monitoring</p>
          <div><h2>Six views across the AmazonFACE experiment.</h2><p>Phenocameras provide repeated views of canopy dynamics within each experimental plot.</p></div>
        </div>
        <div className="amazonface-plots-grid">
          {amazonFacePlots.map((plot) => (
            <figure className={`amazonface-plot-card${plot.image ? "" : " is-placeholder"}`} key={plot.number}>
              <div className="amazonface-plot-image">
                {plot.image ? <Image src={plot.image} alt={`Canopy phenocamera view from AmazonFACE Plot ${plot.number}`} fill sizes="(max-width: 760px) 100vw, 33vw" /> : <div className="amazonface-image-placeholder"><span>03</span><p>Image coming soon</p></div>}
              </div>
              <figcaption><span>Monitoring plot</span><strong>Plot {plot.number}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="amazonface-understory-section">
        <div className="sites-section-heading">
          <p className="section-number">Inside the forest</p>
          <div><h2>Understory camera monitoring.</h2><p>Camera traps extend observations below the canopy, documenting conditions and biological activity within the forest interior.</p></div>
        </div>
        <div className="amazonface-understory-grid">
          {amazonFaceUnderstory.map((item) => (
            <figure className="amazonface-understory-card" key={`${item.plot}-${item.camera}`}>
              <div><Image src={item.image} alt={`Understory camera ${item.camera} in AmazonFACE Plot ${item.plot}`} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <figcaption>Plot {item.plot} · Camera {item.camera}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
