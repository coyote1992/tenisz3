"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Brand } from "./Brand";
import { Phone } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const overlay = pathname === "/" || pathname === "/lab";
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href || pathname.startsWith(href + "/");

  const cls = ["header", overlay && "header--overlay", pathname === "/lab" && "header--lab", solid && "header--solid", open && "header--open"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <div className="container header__inner">
          <Brand />
          <nav className="nav" aria-label="Fő navigáció">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header__cta">
            <a className="header__phone num" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="btn btn--ink" href={site.phoneHref}>
              <Phone size={16} />
              Pályafoglalás
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="mobile-menu__links" aria-label="Mobil navigáció">
          <Link href="/">
            Főoldal <small>Tenisz</small>
          </Link>
          {nav.map((item, i) => (
            <Link key={item.href} href={item.href}>
              {item.label} <small>0{i + 1}</small>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <p className="small muted">
            Pályafoglalás telefonon, a recepción. {site.hours.reception.days}: {site.hours.reception.time}
          </p>
          <a className="btn btn--clay" href={site.phoneHref}>
            <Phone size={16} /> {site.phone}
          </a>
          <a className="btn btn--ghost" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
            Útvonal: {site.address.street}
          </a>
        </div>
      </div>
    </>
  );
}
