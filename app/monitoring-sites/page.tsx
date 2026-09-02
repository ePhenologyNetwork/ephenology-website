import Image from "next/image";
import { ContactFooter } from "../contact-footer";
import { homeContent } from "../content";
import { InteractiveSitesMap } from "./interactive-map";
import { MonitoringSite, SiteDataType, SitesExplorer } from "./sites-explorer";

const ecosystemImages: Record<string, string> = {
  Cerrado: "/home/tower-pe-do-gigante.jpg",
  Caatinga: "/network/caatinga-phenocamera.png",
  "Atlantic Forest": "/home/seasons/atlantic-wet.jpg",
  "Amazon rainforest": "/home/panorama.jpg",
  "Campo rupestre": "/network/serra-do-cipo-study-area.jpg",
};

const siteImageOverrides: Record<string, string> = {
  CORE: "/monitoring-sites/core.jpg",
  PEG: "/monitoring-sites/peg.jpg",
  CAAT: "/monitoring-sites/pet.jpg",
  ITP: "/monitoring-sites/itp.jpg",
  SVG: "/monitoring-sites/svg.jpg",
  ZF2: "/monitoring-sites/amzfc.jpg",
  STA: "/monitoring-sites/sta.jpg",
  CGR: "/monitoring-sites/cgr.jpg",
  SJO: "/monitoring-sites/sjo.jpg",
  FLO: "/monitoring-sites/flo.jpg",
  LCA: "/monitoring-sites/lca.jpg",
  SAL: "/monitoring-sites/sal.jpg",
  MAN: "/monitoring-sites/man.jpg",
  SCI: "/monitoring-sites/sci.jpg",
  "CRSC-Q16": "/monitoring-sites/crsc-q16.jpg",
  "CRSC-AP": "/monitoring-sites/crsc-alto-palacio.jpg",
  "CRSC-ELE": "/monitoring-sites/crsc-elefante.jpg",
  "CRSC-CED": "/monitoring-sites/crsc-cedro.jpg",
  "CRSC-RV1": "/monitoring-sites/crsc-rv1.jpg",
  "CRSC-IBAMA": "/monitoring-sites/crsc-ibama.jpg",
  "CRSC-RV2": "/monitoring-sites/crsc-rv2.jpg",
  "CRSC-SM": "/monitoring-sites/crsc-serra-morena.jpg",
  "CRSC-USI": "/monitoring-sites/crsc-usina.jpg",
};

const siteDataOverrides: Record<string, SiteDataType[]> = {
  CORE: ["Phenocamera", "Climate data", "Drone imagery"],
  PEG: ["Phenocamera", "Climate data", "Flux data"],
  CAAT: ["Phenocamera", "Climate data", "Flux data", "Drone imagery"],
  ITP: ["Phenocamera", "Climate data", "Drone imagery"],
  ZF2: ["Phenocamera", "Climate data", "Drone imagery"],
  STA: ["Phenocamera", "Climate data", "Flux data"],
  CGR: ["Phenocamera", "Climate data", "Flux data"],
  FLO: ["Phenocamera", "Climate data", "Flux data"],
  SCI: ["Phenocamera", "Climate data"],
  "CRSC-Q16": ["Phenocamera", "Climate data"],
  "CRSC-AP": ["Phenocamera", "Climate data"],
  "CRSC-ELE": ["Phenocamera", "Climate data"],
  "CRSC-CED": ["Phenocamera", "Climate data"],
  "CRSC-RV1": ["Phenocamera", "Climate data"],
  "CRSC-IBAMA": ["Phenocamera", "Climate data"],
  "CRSC-SM": ["Phenocamera", "Climate data"],
  "CRSC-USI": ["Phenocamera", "Climate data"],
};

const siteProfileDetails: Record<string, Partial<MonitoringSite>> = {
  CORE: { vegetationType: "Cerrado sensu stricto", cameraCount: 1, cameraType: "IP hemispheric-lens camera", towerType: "Phenological tower", institution: "Unesp / CBioClima" },
  PEG: { vegetationType: "Dense Cerrado", cameraCount: 1, cameraType: "IP hemispheric-lens camera", towerType: "Flux tower", institution: "Unesp / CBioClima" },
  CAAT: { vegetationType: "Caatinga", cameraCount: 5, cameraType: "IP hemispheric-lens and time-lapse cameras", towerType: "Flux tower", institution: "EMBRAPA Semiárido" },
  ITP: { vegetationType: "Cerrado campo sujo", cameraCount: 2, cameraType: "IP hemispheric-lens and time-lapse cameras", towerType: "Meteorological tower", institution: "Unesp / CBioClima" },
  SVG: { cameraType: "IP hemispheric-lens camera" },
  ZF2: { vegetationType: "Terra firme forest", cameraCount: 6, cameraType: "IP hemispheric-lens cameras", towerType: "Meteorological and phenological towers", institution: "Unicamp / INPA" },
  STA: { vegetationType: "Caatinga", cameraCount: 2, cameraType: "IP hemispheric-lens and time-lapse cameras", towerType: "Flux tower", institution: "UFRPE" },
  CGR: { vegetationType: "Caatinga", cameraCount: 7, cameraType: "IP hemispheric-lens and time-lapse cameras", towerType: "Flux tower", institution: "UFCG" },
  SJO: { vegetationType: "Caatinga", cameraCount: 2, cameraType: "IP hemispheric-lens and time-lapse cameras", institution: "UFAPE" },
  FLO: { vegetationType: "Caatinga", cameraCount: 1, cameraType: "IP hemispheric-lens camera", towerType: "Flux tower", institution: "UFRPE" },
  LCA: { vegetationType: "Caatinga", cameraCount: 2, cameraType: "IP hemispheric-lens and time-lapse cameras", towerType: "Phenological tower" },
  SAL: { vegetationType: "Caatinga", cameraCount: 3, cameraType: "Time-lapse cameras" },
  MAN: { vegetationType: "Caatinga", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unimontes" },
  SCI: { vegetationType: "Cerrado sensu stricto", cameraCount: 2, cameraType: "Time-lapse cameras", institution: "Unesp / UFMG" },
  "CRSC-Q16": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-AP": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-ELE": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-CED": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-RV1": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-IBAMA": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-RV2": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-SM": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
  "CRSC-USI": { vegetationType: "Campo rupestre", cameraCount: 1, cameraType: "Time-lapse camera", institution: "Unesp / UFMG" },
};

const siteRows: Omit<MonitoringSite, "image" | "dataTypes">[] = [
  { id: "CORE", name: "CORE Cerrado", acronym: "CORE", status: "Active", startYear: 2011, ecosystem: "Cerrado", location: "Itirapina, São Paulo, Brazil", latitude: -22.180328, longitude: -47.871261, ready: true },
  { id: "PEG", name: "Pé-de-Gigante", acronym: "PEG", status: "Active", startYear: 2013, ecosystem: "Cerrado", location: "Santa Rita do Passa Quatro, São Paulo, Brazil", latitude: -21.619167, longitude: -47.632778, ready: true },
  { id: "CAAT", name: "Petrolina", acronym: "PET", status: "Active", startYear: 2013, ecosystem: "Caatinga", location: "Petrolina, Pernambuco, Brazil", latitude: -9.046389, longitude: -40.321111, ready: true },
  { id: "ITP", name: "Itirapina", acronym: "ITP", status: "Active", startYear: 2013, ecosystem: "Cerrado", location: "Itirapina, São Paulo, Brazil", latitude: -22.226425, longitude: -47.883447, ready: true },
  { id: "SVG", name: "Núcleo Santa Virgínia", acronym: "SVG", status: "Inactive", startYear: 2013, ecosystem: "Atlantic Forest", latitude: -23.214794, longitude: -45.386889, ready: false },
  { id: "ZF2", name: "AmazonFACE ZF2", acronym: "AMZFC", status: "Active", startYear: 2015, ecosystem: "Amazon rainforest", location: "Manaus, Amazonas, Brazil", latitude: -2.985, longitude: -60.335556, ready: true },
  { id: "STA", name: "Serra Talhada", acronym: "STA", status: "Active", startYear: 2017, ecosystem: "Caatinga", location: "Serra Talhada, Pernambuco, Brazil", latitude: -7.968172, longitude: -38.383892, ready: true },
  { id: "CGR", name: "Campina Grande", acronym: "CGR", status: "Active", startYear: 2018, ecosystem: "Caatinga", location: "Campina Grande, Paraíba, Brazil", latitude: -7.280389, longitude: -35.977142, ready: true },
  { id: "SJO", name: "São João", acronym: "SJO", status: "Active", startYear: 2017, ecosystem: "Caatinga", location: "São João, Pernambuco, Brazil", latitude: -8.809972, longitude: -36.405639, ready: true },
  { id: "FLO", name: "Floresta", acronym: "FLO", status: "Active", startYear: 2017, ecosystem: "Caatinga", location: "Floresta, Pernambuco, Brazil", latitude: -8.308611, longitude: -38.526944, ready: true },
  { id: "LCA", name: "Lagoa do Cajueiro", acronym: "CAJ", status: "Active", startYear: 2017, ecosystem: "Caatinga", location: "Cajueiro, Minas Gerais, Brazil", latitude: -14.931, longitude: -43.922019, ready: true },
  { id: "SAL", name: "Reserva Natural Serra das Almas", acronym: "SAL", status: "Active", startYear: 2018, ecosystem: "Caatinga", location: "Crateús, Ceará, Brazil", latitude: -5.146539, longitude: -40.928131, ready: false },
  { id: "MAN", name: "PE Mata Seca", acronym: "MAN", status: "Active", startYear: 2018, ecosystem: "Caatinga", location: "Manga, Minas Gerais, Brazil", latitude: -14.848319, longitude: -43.98785, ready: false },
  { id: "SCI", name: "PARNA Sete Cidades", acronym: "SCI", status: "Active", startYear: 2018, ecosystem: "Cerrado", location: "Piripiri, Piauí, Brazil", latitude: -4.136619, longitude: -41.7201, ready: false },
  { id: "CRSC-Q16", name: "Quadrante 16", acronym: "Q16", status: "Active", startYear: 2013, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.296667, longitude: -43.590833, ready: true },
  { id: "CRSC-AP", name: "Alto Palácio", acronym: "Alto Palácio", status: "Active", startYear: 2014, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.268333, longitude: -43.535, ready: false },
  { id: "CRSC-ELE", name: "Elefante", acronym: "Elefante", status: "Active", startYear: 2014, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.294167, longitude: -43.555278, ready: false },
  { id: "CRSC-CED", name: "Cedro", acronym: "Cedro", status: "Active", startYear: 2014, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.232778, longitude: -43.579167, ready: false },
  { id: "CRSC-RV1", name: "Reserva Vellozia I", acronym: "RV I", status: "Active", startYear: 2014, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.280833, longitude: -43.594167, ready: false },
  { id: "CRSC-IBAMA", name: "Ibama", acronym: "Ibama", status: "Active", startYear: 2014, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.359167, longitude: -43.608056, ready: false },
  { id: "CRSC-RV2", name: "Reserva Vellozia II", acronym: "RV II", status: "Active", startYear: 2021, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.281389, longitude: -43.591828, ready: false },
  { id: "CRSC-SM", name: "Serra Morena", acronym: "Serra Morena", status: "Active", startYear: 2021, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.262006, longitude: -43.586072, ready: true },
  { id: "CRSC-USI", name: "Usina", acronym: "Usina", status: "Inactive", startYear: 2021, ecosystem: "Campo rupestre", location: "Santana do Riacho, Minas Gerais, Brazil", latitude: -19.270206, longitude: -43.605967, ready: true },
];

const sites: MonitoringSite[] = siteRows.map((site) => ({
  ...site,
  ...siteProfileDetails[site.id],
  image: siteImageOverrides[site.id] ?? ecosystemImages[site.ecosystem],
  dataTypes: siteDataOverrides[site.id] ?? ["Phenocamera"],
}));

const georeferencedSites = sites.filter(
  (site): site is MonitoringSite & { latitude: number; longitude: number } =>
    site.latitude !== undefined && site.longitude !== undefined,
);

export default function MonitoringSitesPage() {
  const phenocameraCount = 44;
  const biomeCount = 4;
  const firstMonitoringYear = Math.min(...sites.map((site) => site.startYear));

  return (
    <main className="monitoring-sites-page">
      <header className="sites-header">
        <video className="sites-hero-video" autoPlay loop muted playsInline preload="metadata" poster="/home/tropical-environments-panel.png" aria-hidden="true">
          <source src="/monitoring-sites-hero.m4v" type="video/mp4" />
        </video>
        <div className="sites-hero-overlay" aria-hidden="true" />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="/" aria-label="Go to the e-Phenology home page" title="Home">
            <Image className="brand-logo" src="/brand/ephenology-logo.png" alt="e-Phenology" width={2104} height={565} priority />
          </a>
          <div className="nav-links">
            {homeContent.navigation.map((item) =>
              item.label === "The Network" ? (
                <div className="nav-menu" key={item.label}>
                  <a className="nav-menu-trigger" href={item.href}>{item.label}<span className="nav-menu-icon" aria-hidden="true" /></a>
                  <div className="nav-submenu" aria-label="The Network sections">
                    <a href="/network#foundation">Foundation</a>
                    <a href="/network#network-growth">Network Growth</a>
                    <a href="/network#participate">How to Participate</a>
                  </div>
                </div>
              ) : item.href ? <a key={item.label} href={item.href}>{item.label}</a> :
              <span className="nav-placeholder" key={item.label} aria-disabled="true">{item.label}</span>
            )}
          </div>
        </nav>
        <div className="sites-hero">
          <p className="eyebrow">Monitoring sites</p>
          <h1>A growing observatory of tropical vegetation.</h1>
          <p>Explore the ecosystems, locations and long-term observations that form the e-Phenology Network.</p>
        </div>
      </header>

      <section className="sites-overview">
        <div className="sites-stat"><strong>{sites.length}</strong><span>sites listed</span></div>
        <div className="sites-stat"><strong>{phenocameraCount}</strong><span>phenocameras</span></div>
        <div className="sites-stat"><strong>{biomeCount}</strong><span>biomes</span></div>
        <div className="sites-stat"><strong>{firstMonitoringYear}</strong><span>first monitoring year</span></div>
      </section>

      <section className="sites-map-section">
        <div className="sites-section-heading">
          <p className="section-number">Network map</p>
          <div>
            <h2>From local observations to a continental network.</h2>
            <p>Navigate the map, filter sites by ecosystem and select a marker to learn more about each monitoring location.</p>
          </div>
        </div>
        <InteractiveSitesMap sites={georeferencedSites} />
      </section>

      <section className="sites-catalogue">
        <div className="sites-section-heading">
          <p className="section-number">Site catalogue</p>
          <div><h2>Explore monitoring locations.</h2><p>Filter this catalogue by selecting the type of vegetation you want.</p></div>
        </div>
        <SitesExplorer sites={sites} />
      </section>

      <ContactFooter />
    </main>
  );
}
