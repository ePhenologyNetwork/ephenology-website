import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "../contact-footer";
import { homeContent } from "../content";
import publicationData from "./publications.json";
import { Publication, PublicationsExplorer } from "./publications-explorer";

const publications = publicationData as Publication[];

export default function PublicationsPage() {
  return (
    <main className="publications-page">
      <header className="publications-header">
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
        <div className="publications-hero">
          <p className="eyebrow">Publications</p>
          <h1>Research across ecosystems, scales and disciplines.</h1>
          <p>Explore scientific publications produced through the e-Phenology Network and its collaborations in ecology, remote sensing and computational science.</p>
        </div>
      </header>

      <section className="publications-catalogue">
        <div className="publications-introduction">
          <p className="section-number">Scientific production</p>
          <div><h2>Browse the network’s publications.</h2><p>Search the catalogue or filter it by biome, year and access status. Select “Read summary” to see the main contribution and associated monitoring sites.</p></div>
        </div>
        <PublicationsExplorer publications={publications} />
      </section>
      <ContactFooter />
    </main>
  );
}
