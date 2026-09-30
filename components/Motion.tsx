"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Phone, Pin } from "./Icons";

/** One observer for every .reveal / .reveal-img element on the page. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in), .reveal-img:not(.is-in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

/** Sticky call / directions bar for phones, shown once the visitor starts scrolling. */
export function ActionBar() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`actionbar${shown ? " actionbar--shown" : ""}`} aria-hidden={!shown} inert={!shown}>
      <a className="btn btn--clay" href={site.phoneHref}>
        <Phone size={16} /> Pályafoglalás
      </a>
      <a className="btn btn--ghost" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
        <Pin size={16} /> Útvonal
      </a>
    </div>
  );
}
