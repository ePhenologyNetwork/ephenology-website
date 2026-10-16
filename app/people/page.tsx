import Image from "next/image";
import Link from "next/link";
import { ContactFooter } from "../contact-footer";
import { homeContent } from "../content";
import peopleData from "./people.json";

type Person = {
  fullName: string;
  displayName: string;
  category: string | null;
  role: string;
  institution: string | null;
  city: string | null;
  country: string | null;
  researchAreas: string[];
  biography: string | null;
  startYear: number | null;
  email: string | null;
  orcid: string | null;
  lattes: string | null;
  personalWebsite: string | null;
  photo: string | null;
};

const people = peopleData as Person[];
const categories = [
  { key: "Coordination", label: "Coordination" },
  { key: "Researcher", label: "Researchers" },
  { key: "Collaborator", label: "Collaborators" },
  { key: "Student", label: "Students" },
  { key: "Technical team", label: "Technical Team" },
];
const initials = (name: string) => name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("");
const location = (person: Person) => [person.city, person.country].filter(Boolean).join(", ");

export default function PeoplePage() {
  return (
    <main className="people-page">
      <header className="people-header">
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
        <div className="people-hero">
          <p className="eyebrow">People</p>
          <h1>The people behind the observations.</h1>
          <p>Meet the researchers, students and technical professionals who build, maintain and expand the e-Phenology Network.</p>
        </div>
      </header>

      <section className="people-catalogue">
        {categories.map((category) => {
          const members = people.filter((person) => person.category === category.key);
          if (!members.length) return null;
          return (
            <section className="people-category" key={category.key}>
              <h2 className="people-category-title">{category.label}</h2>
              <div className="people-grid">
                {members.map((person) => (
                  <article className="person-card" key={person.fullName}>
                    <div className={`person-photo${person.photo ? "" : " person-photo-placeholder"}`}>
                      {person.photo ? <Image src={person.photo} alt={`Portrait of ${person.displayName}`} fill sizes="(max-width: 680px) 100vw, (max-width: 820px) 50vw, (max-width: 1100px) 33vw, 25vw" /> : <span aria-hidden="true">{initials(person.displayName)}</span>}
                    </div>
                    <div className="person-copy">
                      <p className="person-role">{person.role}</p>
                      <h3>{person.displayName}</h3>
                      {(person.institution || location(person)) && <p className="person-institution">{[person.institution, location(person)].filter(Boolean).join(" · ")}</p>}
                      <div className="person-topics">{person.researchAreas.slice(0, 4).map((area) => <span key={area}>{area}</span>)}</div>
                      <details>
                        <summary>View profile</summary>
                        {person.biography ? <p>{person.biography}</p> : <p>Additional profile information will be added soon.</p>}
                        {person.startYear && <p className="person-since">Member of the network since {person.startYear}.</p>}
                      </details>
                      <div className="person-links">
                        {person.email && <a href={`mailto:${person.email}`}>Email</a>}
                        {person.orcid && <a href={person.orcid} target="_blank" rel="noreferrer">ORCID ↗</a>}
                        {person.lattes && <a href={person.lattes} target="_blank" rel="noreferrer">Lattes ↗</a>}
                        {person.personalWebsite && <a href={person.personalWebsite} target="_blank" rel="noreferrer">Profile ↗</a>}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </section>
      <ContactFooter />
    </main>
  );
}
