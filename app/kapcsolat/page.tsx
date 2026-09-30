import type { Metadata } from "next";
import Link from "next/link";
import { MapEmbed } from "@/components/MapEmbed";
import { ArrowUpRight, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat és megközelítés",
  description:
    "Gellért Szabadidőközpont, 6726 Szeged, Derkovits fasor 113. Pályafoglalás: +36 70 686 5124. Pályák minden nap 7–22, recepció 8–20.",
  alternates: { canonical: "/kapcsolat" },
};

export default function ContactPage() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <nav className="crumbs" aria-label="Morzsamenü">
            <Link href="/">Főoldal</Link> <span aria-hidden>/</span> <span>Kapcsolat</span>
          </nav>
          <div className="phero__grid">
            <div>
              <p className="eyebrow">Kapcsolat</p>
              <h1 className="h1">
                Hívj, írj, <em>vagy gyere ki.</em>
              </h1>
            </div>
            <p className="lead">
              Pályát a recepció foglal — telefonon vagy személyesen. Rendezvényre, csapatépítőre egyedi ajánlatot adunk.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cards-3">
            <div className="ccard">
              <p className="ccard__k">Pályafoglalás · Recepció</p>
              <p className="ccard__v num">
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
              <p className="ccard__t">
                {site.hours.reception.days}, {site.hours.reception.time}
              </p>
              <a className="btn btn--clay" href={site.phoneHref} style={{ marginTop: "auto" }}>
                <Phone size={16} /> Hívás
              </a>
            </div>
            <div className="ccard">
              <p className="ccard__k">E-mail</p>
              <p className="ccard__v email">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p className="ccard__t">Rendezvények, árajánlatkérés, általános kérdések.</p>
              <a className="link-arrow" href={`mailto:${site.email}`}>
                Levél írása <ArrowUpRight />
              </a>
            </div>
            <div className="ccard">
              <p className="ccard__k">Tenisziskola</p>
              <p className="ccard__v">{site.club.headCoach}</p>
              <p className="ccard__t">
                A Gellért SE {site.club.headCoachRole}.{" "}
                <a className="text-link num" href={site.club.headCoachPhoneHref}>
                  {site.club.headCoachPhone}
                </a>
              </p>
              <Link className="link-arrow" href="/tenisziskola">
                A tenisziskoláról <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight section--paper2" aria-labelledby="megkozelites">
        <div className="container visit">
          <div>
            <p className="eyebrow">Megközelítés</p>
            <h2 id="megkozelites" className="h2">
              Újszeged, <em>Derkovits fasor.</em>
            </h2>
            <dl className="info-list">
              <div className="info-row">
                <dt>Cím</dt>
                <dd>
                  {site.name}
                  <br />
                  {site.address.zip} {site.address.city}, {site.address.street}
                </dd>
              </div>
              <div className="info-row">
                <dt>Pályák</dt>
                <dd className="num">
                  {site.hours.courts.days}, {site.hours.courts.time}
                </dd>
              </div>
              <div className="info-row">
                <dt>Recepció</dt>
                <dd className="num">
                  {site.hours.reception.days}, {site.hours.reception.time}
                </dd>
              </div>
              <div className="info-row">
                <dt>Parkolás</dt>
                <dd>Saját parkoló</dd>
              </div>
              <div className="info-row">
                <dt>Körbenézés</dt>
                <dd>
                  <a href={site.legacy.virtualTour} target="_blank" rel="noopener noreferrer">
                    Virtuális séta a központban
                  </a>
                </dd>
              </div>
            </dl>
            <p className="small muted" style={{ marginTop: 20 }}>
              Ünnepnapokon eltérő lehet a nyitvatartás — ilyenkor érdemes előbb felhívni a recepciót.
            </p>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="uzemelteto">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow">Rendezvények</p>
              <h2 id="uzemelteto" className="h2">
                Céges nap, születésnap, <em>osztálytalálkozó.</em>
              </h2>
            </div>
            <p className="lead">
              8 hektár, sportpályák, mászófal, csónakázótó, sütögetés és bográcsozás, színpad és hangosítás, büféterasz.
              Helyszínbérlés a Szabadidőközpont nyitvatartási idejében.
            </p>
          </div>
          <div className="cards-3">
            <div className="ccard">
              <p className="ccard__k">Céges rendezvények</p>
              <p className="ccard__t">Cég- és partnertalálkozók, tanfolyamok, céges oktatások, csapatépítő programok.</p>
            </div>
            <div className="ccard">
              <p className="ccard__k">Privát rendezvények</p>
              <p className="ccard__t">
                Családi és baráti összejövetel, születésnap, névnap, ballagás, diplomaosztó, osztálytalálkozó, keresztelő.
              </p>
            </div>
            <div className="ccard">
              <p className="ccard__k">Üzemeltető</p>
              <p className="ccard__t">
                {site.operator.name}
                <br />
                {site.operator.address}
                <br />
                Tel./fax: <span className="num">{site.operator.phone}</span>
                <br />
                {site.operator.email} · Adószám: <span className="num">{site.operator.taxId}</span>
              </p>
            </div>
          </div>
          <div className="final__actions" style={{ justifyContent: "flex-start", marginTop: 32 }}>
            <a className="btn btn--ink" href={`mailto:${site.email}?subject=${encodeURIComponent("Árajánlatkérés rendezvényre")}`}>
              Árajánlatot kérek
            </a>
            <a className="btn btn--ghost" href={site.phoneHref}>
              <Phone size={16} /> {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
