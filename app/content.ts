/*
 * CONTEÚDO EDITÁVEL DA HOME
 *
 * Este é o arquivo principal para editar os textos da página.
 * Altere apenas o conteúdo que está entre aspas, preservando aspas,
 * vírgulas e nomes como "title" e "description".
 */

export const homeContent = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "The Network", href: "/network" },
    { label: "Monitoring Sites", href: "/monitoring-sites" },
    { label: "People", href: "/people" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/#contact" },
  ],

  hero: {
    eyebrow: "A tropical phenology monitoring network",
    title: "Watching tropical vegetation",
    highlightedTitle: " change.",
    description:
      "Through a growing network of phenocameras, drones and satellite observations, e-Phenology reveals how tropical vegetation responds to seasons, climate variability and environmental change.",
    linkLabel: "Explore the network",
  },

  introduction: {
    sectionLabel: "What is phenology?",
    title: "The living calendar of tropical vegetation.",
    description:
      "Phenology is the study of when plants produce new leaves, flowers and fruits — and how these recurring cycles respond to seasons and climate.",
    impactTitle: "Why these observations matter",
    impactDescription:
      "Following these changes over many years helps reveal how tropical ecosystems respond to drought, warming and other environmental pressures, supporting biodiversity research and conservation.",
    stats: [
      { value: "2010", label: "continuous observations since" },
      { value: "23", label: "monitoring sites" },
      { value: "4", label: "tropical biomes" },
      { value: "44", label: "phenocameras in the field" },
    ],
  },

  monitoring: {
    sectionLabel: "Long-term monitoring",
    title: "A decade of continuous observation.",
    description:
      "For more than ten years, the e-Phenology Network has monitored seasonal changes in tropical vegetation using phenocameras.",
    supportingText:
      "Many of these cameras operate alongside ecosystem flux measurements, connecting changes observed in plant canopies with the exchange of carbon, water and energy between vegetation and the atmosphere.",
  },

  environments: {
    sectionLabel: "Tropical environments",
    title: "From seasonally dry vegetation to tropical rainforests.",
    description:
      "Our monitoring network spans a remarkable diversity of tropical ecosystems, including dry tropical forests, savannas, rainforests and tropical mountains.",
    supportingText:
      "Through repeated images, we observe how different ecosystems respond to climate variability.",
  },

  multiscale: {
    sectionLabel: "Multiscale observations and computational tools",
    title: "Connecting canopy change from local observations to tropical landscapes.",
    description:
      "We combine near-surface phenocameras, drone surveys and satellite observations to follow vegetation dynamics across multiple spatial and temporal scales.",
    supportingText:
      "Computational tools transform this continuous stream of imagery into comparable time series, helping us detect seasonal patterns and understand how tropical ecosystems respond to environmental change.",
  },

  seasonalStory: {
    sectionLabel: "What the cameras reveal",
    title: "The same landscape, a different season.",
    description:
      "Repeated photographs make seasonal change visible. Monitoring ecosystems over time at a daily time scale allows researchers to measure when canopies lose leaves, recover their greenness, and respond to the environment, as the onset of the rainfall season.",
    ecosystems: [
      { name: "Caatinga", dry: "/home/seasons/caatinga-dry.jpg", wet: "/home/seasons/caatinga-wet.jpg" },
      { name: "Cerrado", dry: "/home/seasons/cerrado-dry.jpg", wet: "/home/seasons/cerrado-wet.jpg" },
      { name: "Atlantic Forest", dry: "/home/seasons/atlantic-dry.jpg", wet: "/home/seasons/atlantic-wet.jpg" },
    ],
  },

  funding: {
    sectionLabel: "Support and collaboration",
    title: "Science built through long-term partnerships.",
    description:
      "The e-Phenology Network has grown through sustained scientific collaboration and the support of research institutions and funding partners.",
    partners: [
      { name: "FAPESP", fullName: "São Paulo Research Foundation", logo: "/funding/fapesp-horizontal.png" },
      {
        name: "CBioClima",
        fullName: "Center for Research on Biodiversity Dynamics and Climate Change",
        logo: "/funding/cbioclima.avif",
      },
    ],
  },

  footer: {
    text: "Official website of the e-Phenology Network · Under development",
  },
};
