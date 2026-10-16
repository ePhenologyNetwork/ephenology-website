"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { homeContent } from "./content";

export function ScrollNavigation() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const original = document.querySelector("main nav.nav");
      setVisible(Boolean(original && original.getBoundingClientRect().bottom < 0));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="scroll-navigation">
      <nav aria-label="Persistent navigation" className="scroll-navigation-inner">
        <Link href="/" aria-label="Home" onClick={() => setOpen(false)}>
          {/* Same brand asset as the original header. */}
          <img src="/brand/ephenology-logo.png" alt="e-Phenology" width="2104" height="565" />
        </Link>
        <button className="scroll-menu-toggle" aria-expanded={open} aria-controls="scroll-menu" onClick={() => setOpen(!open)}>Menu {open ? "×" : "☰"}</button>
        <div id="scroll-menu" className={`nav-links scroll-navigation-links${open ? " is-open" : ""}`}>
          {homeContent.navigation.map((item) => item.label === "The Network" ? (
            <div className="nav-menu" key={item.label}>
              <Link className="nav-menu-trigger" href="/network">The Network<span className="nav-menu-icon" aria-hidden="true" /></Link>
              <div className="nav-submenu" aria-label="The Network sections">
                <Link href="/network#foundation" onClick={() => setOpen(false)}>Foundation</Link>
                <Link href="/network#network-growth" onClick={() => setOpen(false)}>What do we monitor</Link>
                <Link href="/network#participate" onClick={() => setOpen(false)}>How to Participate</Link>
              </div>
            </div>
          ) : item.href ? <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link> : null)}
        </div>
      </nav>
    </div>
  );
}
