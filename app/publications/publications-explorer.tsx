"use client";

import { useMemo, useState } from "react";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  year: number;
  type: string;
  journal: string;
  volume: string | number | null;
  issue: string | number | null;
  pages: string | number | null;
  doi: string | null;
  url: string | null;
  openAccess: string;
  openAccessUrl: string | null;
  topics: string[];
  biomes: string[];
  sites: string[];
  projects: string[];
  summary: string | null;
};

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function PublicationsExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [biome, setBiome] = useState("All biomes");
  const [year, setYear] = useState("All years");
  const [access, setAccess] = useState("All access");

  const biomes = useMemo(() => [...new Set(publications.flatMap((publication) => publication.biomes))].sort(), [publications]);
  const years = useMemo(() => [...new Set(publications.map((publication) => publication.year))].sort((a, b) => b - a), [publications]);

  const filtered = useMemo(() => publications.filter((publication) => {
    const searchable = normalize([
      publication.title,
      publication.authors,
      publication.journal,
      ...publication.topics,
      ...publication.biomes,
      ...publication.sites,
    ].join(" "));
    return (!query || searchable.includes(normalize(query)))
      && (biome === "All biomes" || publication.biomes.includes(biome))
      && (year === "All years" || publication.year === Number(year))
      && (access === "All access" || publication.openAccess === access);
  }), [access, biome, publications, query, year]);

  const resetFilters = () => {
    setQuery("");
    setBiome("All biomes");
    setYear("All years");
    setAccess("All access");
  };

  return (
    <div className="publications-explorer">
      <div className="publication-tools">
        <label className="publication-search">
          <span>Search publications</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, author, topic or site" />
        </label>
        <label><span>Biome</span><select value={biome} onChange={(event) => setBiome(event.target.value)}><option>All biomes</option>{biomes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span>Year</span><select value={year} onChange={(event) => setYear(event.target.value)}><option>All years</option>{years.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span>Access</span><select value={access} onChange={(event) => setAccess(event.target.value)}><option>All access</option><option>Yes</option><option>No</option><option>Unknown</option></select></label>
      </div>

      <div className="publication-results">
        <p><strong>{filtered.length}</strong> {filtered.length === 1 ? "publication" : "publications"}</p>
        {(query || biome !== "All biomes" || year !== "All years" || access !== "All access") && <button type="button" onClick={resetFilters}>Clear filters</button>}
      </div>

      <div className="publication-list">
        {filtered.map((publication) => (
          <article className="publication-card" key={publication.id}>
            <div className="publication-year">{publication.year}</div>
            <div className="publication-card-content">
              <div className="publication-labels">
                <span>{publication.type}</span>
                {publication.openAccess === "Yes" && <span className="open-access-label">Open access</span>}
              </div>
              <h2>{publication.title}</h2>
              <p className="publication-authors">{publication.authors}</p>
              <p className="publication-citation"><em>{publication.journal}</em>{publication.volume ? `, ${publication.volume}` : ""}{publication.issue ? `(${publication.issue})` : ""}{publication.pages ? `, ${publication.pages}` : ""}.</p>
              <div className="publication-tags">{publication.biomes.map((item) => <span key={item}>{item}</span>)}{publication.topics.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div>
              {publication.summary && <details><summary>Read summary</summary><p>{publication.summary}</p>{publication.sites.length > 0 && <p className="publication-sites"><strong>Monitoring sites:</strong> {publication.sites.join(" · ")}</p>}</details>}
              <div className="publication-links">
                {publication.url && <a href={publication.url} target="_blank" rel="noreferrer">View publication <span aria-hidden="true">↗</span></a>}
                {publication.doi && <a href={publication.doi.startsWith("http") ? publication.doi : `https://doi.org/${publication.doi}`} target="_blank" rel="noreferrer">DOI <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
        {filtered.length === 0 && <div className="publication-empty"><h2>No publications found.</h2><p>Try removing one of the filters or using a broader search term.</p><button type="button" onClick={resetFilters}>Show all publications</button></div>}
      </div>
    </div>
  );
}
