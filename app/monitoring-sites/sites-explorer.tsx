"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export type SiteDataType = "Phenocamera" | "Climate data" | "Flux data" | "Drone imagery";

export type MonitoringSite = {
  id: string;
  name: string;
  acronym: string;
  status: "Active" | "Inactive";
  startYear: number;
  ecosystem: string;
  location?: string;
  image: string;
  ready: boolean;
  latitude?: number;
  longitude?: number;
  dataTypes: SiteDataType[];
  vegetationType?: string;
  cameraCount?: number;
  cameraType?: string;
  towerType?: string;
  institution?: string;
};

export type StudyArea = {
  id: string;
  name: string;
  subtitle: string;
  ecosystem: string;
  location: string;
  startYear: number;
  siteCount: number;
  cameraCount: number;
  siteIds: string[];
  image: string;
  href: string;
};

export function SiteDataIcon({ type }: { type: SiteDataType }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  if (type === "Phenocamera") return <svg {...common}><path d="M4 7.5h3l1.4-2h7.2l1.4 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>;
  if (type === "Climate data") return <svg {...common}><path d="M8 15.5a4 4 0 1 0 3.8-5.2A5.5 5.5 0 0 0 1.5 12.8 3.2 3.2 0 0 0 4.7 16H8"/><path d="M14 16h7M16 20h3M17.5 12h2"/></svg>;
  if (type === "Flux data") return <svg {...common}><path d="M5 19V8M5 8l-3 3M5 8l3 3M12 5v11M12 16l-3-3M12 16l3-3M19 19V8M19 8l-3 3M19 8l3 3"/></svg>;
  return <svg {...common}><path d="M9 10h6l2 3-5 3-5-3z"/><path d="M12 16v3M5 7l4 3M19 7l-4 3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/></svg>;
}

export function SitesExplorer({
  sites,
  studyAreas = [],
  showFilters = true,
}: {
  sites: MonitoringSite[];
  studyAreas?: StudyArea[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState("All sites");
  const [selectedSite, setSelectedSite] = useState<MonitoringSite | null>(null);
  const filters = ["All sites", "Cerrado", "Caatinga", "Atlantic Forest", "Amazon rainforest", "Campo rupestre"];
  const groupedSiteIds = useMemo(() => new Set(studyAreas.flatMap((area) => area.siteIds)), [studyAreas]);
  const visibleSites = useMemo(
    () => sites.filter((site) => !groupedSiteIds.has(site.id) && (filter === "All sites" || site.ecosystem === filter)),
    [filter, groupedSiteIds, sites],
  );
  const visibleStudyAreas = useMemo(
    () => studyAreas.filter((area) => filter === "All sites" || area.ecosystem === filter),
    [filter, studyAreas],
  );
  const resultCount = visibleSites.length + visibleStudyAreas.length;

  useEffect(() => {
    if (!selectedSite) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedSite(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedSite]);

  return (
    <>
      {showFilters && (
        <div className="sites-filters" aria-label="Filter monitoring sites">
          {filters.map((item) => (
            <button className={filter === item ? "is-active" : ""} key={item} onClick={() => setFilter(item)} type="button">
              {item}
            </button>
          ))}
        </div>
      )}

      <p className="sites-result-count">Showing {resultCount} catalogue {resultCount === 1 ? "entry" : "entries"}</p>

      <div className="sites-grid">
        {visibleStudyAreas.map((area) => (
          <Link className="site-card study-area-card" href={area.href} key={area.id} aria-label={`Explore the ${area.name} study area`}>
            <div className="site-card-image">
              <Image src={area.image} alt={`Representative view of ${area.name}`} fill sizes="(max-width: 760px) 100vw, 32vw" />
              <span className="study-area-label">Study area</span>
            </div>
            <div className="site-card-copy">
              <div className="site-card-heading">
                <div>
                  <p>{area.ecosystem}</p>
                  <h3>{area.name}</h3>
                </div>
                <span>Since {area.startYear}</span>
              </div>
              <p className="study-area-subtitle">{area.subtitle}</p>
              <dl>
                <div><dt>Locations</dt><dd>{area.siteCount} monitoring sites</dd></div>
                <div><dt>Region</dt><dd>{area.location}</dd></div>
                <div><dt>Cameras</dt><dd>{area.cameraCount} phenocameras</dd></div>
              </dl>
              <span className="study-area-link">Explore study area <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
        {visibleSites.map((site) => (
          <button className="site-card" key={`${site.id}-${site.acronym}`} onClick={() => setSelectedSite(site)} type="button" aria-label={`Open profile for ${site.name}`}>
            <div className="site-card-image">
              <Image src={site.image} alt={`Representative view of ${site.ecosystem}`} fill sizes="(max-width: 760px) 100vw, 32vw" />
              <span className={`site-status ${site.status.toLowerCase()}`}>{site.status}</span>
            </div>
            <div className="site-card-copy">
              <div className="site-card-heading">
                <div>
                  <p>{site.acronym}</p>
                  <h3>{site.name}</h3>
                </div>
                <span>Since {site.startYear}</span>
              </div>
              <dl>
                <div><dt>Ecosystem</dt><dd>{site.ecosystem}</dd></div>
                <div><dt>Location</dt><dd>{site.location ?? "To be completed"}</dd></div>
              </dl>
              <div className="site-data-icons" aria-label="Data collected at this site">
                {site.dataTypes.map((type) => (
                  <span className="site-data-chip" key={type} title={type}>
                    <SiteDataIcon type={type} />
                    <span>{type}</span>
                  </span>
                ))}
              </div>
              <span className="site-card-note">{site.ready ? "Profile data available" : "Profile being completed"}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedSite && (
        <div className="site-profile-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedSite(null);
        }}>
          <section className="site-profile-dialog" role="dialog" aria-modal="true" aria-labelledby="site-profile-title">
            <button className="site-profile-close" type="button" onClick={() => setSelectedSite(null)} aria-label="Close site profile">×</button>
            <div className="site-profile-image">
              <Image src={selectedSite.image} alt={`View of ${selectedSite.name}`} fill sizes="(max-width: 760px) 100vw, 48vw" />
            </div>
            <div className="site-profile-copy">
              <p className="site-profile-eyebrow">{selectedSite.acronym} · {selectedSite.status}</p>
              <h3 id="site-profile-title">{selectedSite.name}</h3>
              <p className="site-profile-location">{selectedSite.location ?? "Location details being completed"}</p>
              <div className="site-profile-facts">
                <div><span>Monitoring period</span><strong>Since {selectedSite.startYear}</strong></div>
                <div><span>Biome / ecosystem</span><strong>{selectedSite.ecosystem}</strong></div>
                {selectedSite.vegetationType && <div><span>Vegetation type</span><strong>{selectedSite.vegetationType}</strong></div>}
                {selectedSite.cameraCount !== undefined && <div><span>Phenocameras</span><strong>{selectedSite.cameraCount}</strong></div>}
                {selectedSite.cameraType && <div><span>Camera system</span><strong>{selectedSite.cameraType}</strong></div>}
                {selectedSite.towerType && <div><span>Tower</span><strong>{selectedSite.towerType}</strong></div>}
                {selectedSite.institution && <div><span>Partner institution</span><strong>{selectedSite.institution}</strong></div>}
                {selectedSite.latitude !== undefined && selectedSite.longitude !== undefined && (
                  <div><span>Coordinates</span><strong>{selectedSite.latitude.toFixed(4)}, {selectedSite.longitude.toFixed(4)}</strong></div>
                )}
              </div>
              <div className="site-profile-data">
                <span>Available observations</span>
                <div className="site-data-icons">
                  {selectedSite.dataTypes.map((type) => <span className="site-data-chip" key={type}><SiteDataIcon type={type} /><span>{type}</span></span>)}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
