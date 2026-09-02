"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MonitoringSite, SiteDataType } from "./sites-explorer";

type GeoreferencedSite = MonitoringSite & {
  latitude: number;
  longitude: number;
};

const mapFilters = ["All sites", "Cerrado", "Caatinga", "Atlantic Forest", "Amazon rainforest", "Campo rupestre"];

const mapDataIcons: Record<SiteDataType, string> = {
  "Phenocamera": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7.5h3l1.4-2h7.2l1.4 2h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  "Climate data": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 15.5a4 4 0 1 0 3.8-5.2A5.5 5.5 0 0 0 1.5 12.8 3.2 3.2 0 0 0 4.7 16H8"/><path d="M14 16h7M16 20h3M17.5 12h2"/></svg>',
  "Flux data": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 19V8M5 8l-3 3M5 8l3 3M12 5v11M12 16l-3-3M12 16l3-3M19 19V8M19 8l-3 3M19 8l3 3"/></svg>',
  "Drone imagery": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 10h6l2 3-5 3-5-3zM12 16v3M5 7l4 3M19 7l-4 3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/></svg>',
};

export function InteractiveSitesMap({ sites }: { sites: GeoreferencedSite[] }) {
  const mapElement = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All sites");
  const filteredSites = useMemo(
    () => filter === "All sites" ? sites : sites.filter((site) => site.ecosystem === filter),
    [filter, sites],
  );

  useEffect(() => {
    if (!mapElement.current || filteredSites.length === 0) return;

    let disposed = false;
    let cleanup = () => {};

    void import("leaflet").then((leafletModule) => {
      if (disposed || !mapElement.current) return;

      const L = leafletModule.default;
      const map = L.map(mapElement.current, {
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      const bounds = L.latLngBounds([]);

      filteredSites.forEach((site) => {
        const markerIcon = L.divIcon({
          className: "site-map-marker-shell",
          html: `<span class="site-map-marker-dot"></span><span class="site-map-marker-label">${site.acronym}</span>`,
          iconAnchor: [8, 8],
          popupAnchor: [0, -12],
        });
        const marker = L.marker([site.latitude, site.longitude], {
          icon: markerIcon,
          title: `${site.acronym} — ${site.name}`,
          alt: `Open information for ${site.name}`,
        }).addTo(map);
        const popup = document.createElement("article");
        popup.className = "site-map-popup";

        const eyebrow = document.createElement("p");
        eyebrow.textContent = `${site.acronym} · ${site.ecosystem}`;
        const title = document.createElement("strong");
        title.textContent = site.name;
        const location = document.createElement("span");
        location.textContent = site.location ?? "Location details being completed";
        const year = document.createElement("small");
        year.textContent = `Monitoring since ${site.startYear}`;

        const dataList = document.createElement("div");
        dataList.className = "site-map-data-list";
        dataList.setAttribute("aria-label", "Data collected at this site");
        site.dataTypes.forEach((type) => {
          const chip = document.createElement("span");
          chip.className = "site-map-data-chip";
          chip.innerHTML = mapDataIcons[type];
          const label = document.createElement("span");
          label.textContent = type;
          chip.append(label);
          dataList.append(chip);
        });

        popup.append(eyebrow, title, location, year, dataList);
        marker.bindPopup(popup, { maxWidth: 280 });
        bounds.extend([site.latitude, site.longitude]);
      });

      map.fitBounds(bounds, { padding: [42, 42], maxZoom: 6 });
      cleanup = () => map.remove();
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, [filteredSites]);

  return (
    <div className="interactive-map-shell">
      <div className="map-filter-bar" aria-label="Filter sites shown on map">
        {mapFilters.map((item) => (
          <button className={filter === item ? "is-active" : ""} key={item} onClick={() => setFilter(item)} type="button">
            {item}
          </button>
        ))}
      </div>
      <div className="interactive-sites-map" ref={mapElement} aria-label={`Interactive map showing ${filteredSites.length} monitoring sites`} />
      <div className="map-message">
        <strong>{filteredSites.length} georeferenced {filteredSites.length === 1 ? "site" : "sites"}</strong>
        <span>Click a marker to explore its monitoring site</span>
      </div>
    </div>
  );
}
