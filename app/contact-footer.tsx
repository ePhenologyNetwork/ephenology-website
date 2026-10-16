import Image from "next/image";
import { homeContent } from "./content";

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="contact-logos" aria-label="Affiliated institutions">
        <Image src="/brand/phenolab-logo.png" alt="Phenology Lab" width={182} height={146} />
      </div>

      <div className="contact-information">
        <p className="contact-label">Contact</p>
        <h2>Center for Research on Biodiversity Dynamics and Climate Change</h2>
        <address>
          Department of Biodiversity, Biosciences Institute, Phenology Lab,<br />
          Unesp — São Paulo State University, São Paulo, 13506-900, Brazil
        </address>
        <div className="contact-emails">
          <span>Email:</span>
          <a href="mailto:bruna.alberton@unesp.br">bruna.alberton@unesp.br</a>
          <span>and</span>
          <a href="mailto:patricia.morellato@unesp.br">patricia.morellato@unesp.br</a>
        </div>
      </div>

      <p className="contact-footer-note">{homeContent.footer.text}</p>
    </footer>
  );
}
