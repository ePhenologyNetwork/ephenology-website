import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "../../contact-footer";
import { homeContent } from "../../content";
import { InteractiveSitesMap } from "../interactive-map";
import { SitesExplorer } from "../sites-explorer";
import { serraDoCipoArea, serraDoCipoSites } from "./data";

export const metadata: Metadata = {
  title: "Serra do Cipó Monitoring Sites | e-Phenology",
  description: "Explore the campo rupestre monitoring locations of the e-Phenology Network in Serra do Cipó, Minas Gerais, Brazil.",
};

export default function SerraDoCipoPage() {
  return (
    <main className="study-area-page">
      <header className="study-area-header">
        <Image
          className="study-area-hero-image"
          src={serraDoCipoArea.image}
          alt="Campo rupestre vegetation in Serra do Cipó"
          fill
          sizes="100vw"
          priority
        />
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
                    <a href="/network#foundation">Foundation</a>
                    <a href="/network#network-growth">What do we monitor</a>
                    <a href="/network#participate">How to Participate</a>
                  </div>
                </div>
              ) : item.href ? <a key={item.label} href={item.href}>{item.label}</a> :
              <span className="nav-placeholder" key={item.label} aria-disabled="true">{item.label}</span>
            )}
          </div>
        </nav>
        <div className="study-area-hero">
          <Link className="study-area-back" href="/monitoring-sites">← All monitoring sites</Link>
          <p className="eyebrow">Campo rupestre study area</p>
          <h1>Serra do Cipó</h1>
          <p>{serraDoCipoArea.subtitle}</p>
        </div>
      </header>

      <section className="sites-overview study-area-overview" aria-label="Serra do Cipó monitoring summary">
        <div className="sites-stat"><strong>{serraDoCipoArea.siteCount}</strong><span>monitoring locations</span></div>
        <div className="sites-stat"><strong>{serraDoCipoArea.cameraCount}</strong><span>phenocameras</span></div>
        <div className="sites-stat"><strong>{serraDoCipoArea.startYear}</strong><span>first monitoring year</span></div>
        <div className="sites-stat"><strong>1</strong><span>regional study network</span></div>
      </section>

      <section className="study-area-intro">
        <div className="study-area-intro-layout">
          <div className="study-area-program" aria-label="PELD-CRSP research program">
            <Image
              className="study-area-program-logo"
              src="/brand/peld-crsc-logo.jpeg"
              alt="PELD-CRSP — Campos Rupestres da Serra do Cipó"
              width={440}
              height={440}
            />
            <div>
              <span>Long-term ecological research program</span>
              <strong>PELD-CRSP</strong>
              <p>Campos Rupestres da Serra do Cipó</p>
            </div>
          </div>
          <div className="study-area-intro-copy">
            <p>The <strong>campos rupestres of Serra do Cipó</strong> are a unique montane ecosystem located in the southern portion of the <strong>Espinhaço Mountain Range</strong> in Minas Gerais, Brazil, characterized by hardy vegetation growing over shallow, rocky soils. It occurs primarily above 900 to 1,000 meters (2,950–3,280 ft), reaching up to the region&apos;s highest peaks at around 1,687 meters.</p>
            <p>Despite covering a small area, this environment is a global biodiversity hotspot with exceptionally high rates of plant endemism.</p>
            <p>The network is a collaboration with the Long-term Ecological Research program &quot;Campos rupestres da Serra do Cipó&quot; (PELD-CRSP).</p>
          </div>
        </div>
        <div className="study-area-intro-copy">
          <dl className="study-area-facts">
            <div><dt>Ecosystem</dt><dd>Campo rupestre</dd></div>
            <div><dt>Region</dt><dd>Santana do Riacho, Minas Gerais, Brazil</dd></div>
            <div><dt>Research program</dt><dd>PELD-CRSP</dd></div>
            <div><dt>Partner institutions</dt><dd>Unesp / UFMG</dd></div>
            <div><dt>Monitoring system</dt><dd>Time-lapse phenocameras</dd></div>
          </dl>
        </div>
      </section>

      <section className="sites-map-section study-area-map-section">
        <div className="sites-section-heading">
          <p className="section-number">Local network map</p>
          <div>
            <h2>Monitoring across Serra do Cipó.</h2>
            <p>Select a marker to identify each camera location within the regional study area.</p>
          </div>
        </div>
        <InteractiveSitesMap
          sites={serraDoCipoSites}
          maxZoom={12}
          showFilters={false}
          message="Select a marker to identify a monitoring location"
        />
      </section>

      <section className="sites-catalogue study-area-catalogue">
        <div className="sites-section-heading">
          <p className="section-number">Monitoring locations</p>
          <div>
            <h2>Explore the Serra do Cipó sites.</h2>
            <p>Open each profile to view its monitoring period, camera system and coordinates.</p>
          </div>
        </div>
        <SitesExplorer sites={serraDoCipoSites} showFilters={false} />
      </section>

      <ContactFooter />
    </main>
  );
}
