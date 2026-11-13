import type { StudyArea } from "../sites-explorer";

export const amazonFaceArea: StudyArea = {
  id: "amazonface",
  name: "AmazonFACE",
  subtitle: "Amazon rainforest experimental monitoring network",
  ecosystem: "Amazon rainforest",
  location: "Manaus, Amazonas, Brazil",
  startYear: 2015,
  siteCount: 6,
  cameraCount: 6,
  siteIds: ["ZF2"],
  image: "/monitoring-sites/amazonface/main.webp",
  href: "/monitoring-sites/amazonface",
};

export const amazonFacePlots = [
  { number: 1, image: "/monitoring-sites/amazonface/Plot1.jpg" },
  { number: 2, image: "/monitoring-sites/amazonface/Plot2.jpg" },
  { number: 3, image: null },
  { number: 4, image: "/monitoring-sites/amazonface/Plot4.jpeg" },
  { number: 5, image: "/monitoring-sites/amazonface/Plot5.jpeg" },
  { number: 6, image: "/monitoring-sites/amazonface/Plot6.jpeg" },
] as const;

export const amazonFaceUnderstory = [
  { plot: 1, camera: 1, image: "/monitoring-sites/amazonface/understory/plot1/P1_C1.JPG" },
  { plot: 1, camera: 2, image: "/monitoring-sites/amazonface/understory/plot1/P1_C2.JPG" },
  { plot: 1, camera: 3, image: "/monitoring-sites/amazonface/understory/plot1/P1_C3.JPG" },
  { plot: 2, camera: 5, image: "/monitoring-sites/amazonface/understory/plot2/P2_C5.JPG" },
  { plot: 2, camera: 7, image: "/monitoring-sites/amazonface/understory/plot2/P2_C7.JPG" },
  { plot: 2, camera: 8, image: "/monitoring-sites/amazonface/understory/plot2/P2_C8.JPG" },
] as const;
