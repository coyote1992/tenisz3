import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container final">
        <div className="ball-big" aria-hidden>
          <span className="ball" />
        </div>
        <p className="eyebrow">404</p>
        <h1 className="h1">
          Ez a labda <em>kiment.</em>
        </h1>
        <p className="lead">A keresett oldal nem található. Innen biztosan visszatalálsz a pályára.</p>
        <div className="final__actions">
          <Link className="btn btn--ink" href="/">
            Főoldal
          </Link>
          <a className="btn btn--ghost" href={site.phoneHref}>
            Pályafoglalás: {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
