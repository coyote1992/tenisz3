import Image from "next/image";
import Link from "next/link";
import { CourtPlan } from "@/components/CourtPlan";
import { PriceTable } from "@/components/PriceTable";
import { MapEmbed } from "@/components/MapEmbed";
import { ArrowRight, ArrowUpRight, Check, Phone } from "@/components/Icons";
import { history, site, tennisPrices } from "@/lib/site";

/** The homepage content; app/page.tsx sets it over the dot-field background (SpaceField). */
export function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Image
            src="/img/hero-serve.jpg"
            alt="Teniszezők a Gellért Szabadidőközpont salakpályáján"
            fill
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="hero__shade" aria-hidden />
        <svg className="hero__lines" viewBox="0 0 900 520" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <rect x="40" y="40" width="820" height="440" pathLength="1" />
          <line x1="40" y1="95" x2="860" y2="95" pathLength="1" />
          <line x1="40" y1="425" x2="860" y2="425" pathLength="1" />
          <line x1="260" y1="95" x2="260" y2="425" pathLength="1" />
          <line x1="640" y1="95" x2="640" y2="425" pathLength="1" />
          <line x1="260" y1="260" x2="640" y2="260" pathLength="1" />
          <line x1="450" y1="30" x2="450" y2="490" pathLength="1" strokeWidth="2.4" />
        </svg>

        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow reveal">Gellért Szabadidőközpont · Újszeged</p>
            <h1 id="hero-title" className="h1 reveal" style={{ ["--d" as string]: "80ms" }}>
              Salakon játszunk.
              <em>Egész évben.</em>
            </h1>
            <p className="hero__lead reveal" style={{ ["--d" as string]: "160ms" }}>
              12 szabadtéri salakpálya, egész évben fedett pályák, egy Davis Kupát is látott centerpálya és
              tenisziskola 5 éves kortól, 8 hektár zöld közepén.
            </p>
            <div className="paths reveal" style={{ ["--d" as string]: "240ms" }}>
              <a className="path path--primary" href={site.phoneHref}>
                <span className="path__title">
                  Pályát foglalnék <ArrowRight />
                </span>
                <span className="path__text">Telefonon, a recepción. Egy óra, tíz alkalom vagy egész szezon.</span>
                <span className="path__meta num">{site.phone}</span>
              </a>
              <Link className="path" href="/tenisziskola">
                <span className="path__title">
                  Tanulni szeretnék <ArrowRight />
                </span>
                <span className="path__text">Tenisziskola 5–17 éveseknek, felnőtteknek is. Ütőt, labdát adunk.</span>
                <span className="path__meta">Gellért SE Tenisziskola</span>
              </Link>
            </div>
            <div className="hero__facts reveal" style={{ ["--d" as string]: "320ms" }}>
              <span>
                <strong>Pályák</strong> minden nap 7–22
              </span>
              <span>
                <strong>Recepció</strong> 8–20
              </span>
              <span>
                <strong>Derkovits fasor 113.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Courts */}
      <section className="section" id="palyak" aria-labelledby="palyak-title">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow reveal">A pályák</p>
              <h2 id="palyak-title" className="h2 reveal">
                Szeged zöld szélén, <em>a tenisz</em> az első.
              </h2>
            </div>
            <p className="lead reveal">
              A Gellért Szabadidőközpont fő profilja a tenisz. Salakpályák fasorok és sövények között, öltözők,
              büféterasz és saját parkoló — Újszegeden, a Tisza túlpartján.
            </p>
          </div>

          <div className="facts reveal">
            <div className="fact">
              <div className="fact__num num">12</div>
              <p className="fact__label">szabadtéri salakpálya a nyári szezonban</p>
            </div>
            <div className="fact">
              <div className="fact__num num">5</div>
              <p className="fact__label">világítással, este 10 óráig játszható</p>
            </div>
            <div className="fact">
              <div className="fact__num num">
                3<sup>+2</sup>
              </div>
              <p className="fact__label">állandóan fedett pálya, télen még kettő sátorban</p>
            </div>
            <div className="fact">
              <div className="fact__num num">8</div>
              <p className="fact__label">hektár zöldterület, tóval és játszótérrel</p>
            </div>
          </div>

          <CourtPlan />
        </div>
      </section>

      {/* ------------------------------------------------ Proflex */}
      <section className="section section--paper2" aria-labelledby="proflex-title">
        <div className="container split">
          <div className="split__media">
            <div className="frame frame--tall reveal-img">
              <Image src="/img/proflex-court.jpg" alt="A Proflex borítású multifunkciós pálya kosárpalánkokkal" fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
            <div className="stamp reveal" style={{ ["--d" as string]: "300ms" }}>
              <div className="stamp__k">ITF-minősítés</div>
              <div className="stamp__v">Ugyanaz a borítás, mint a US Openen és az Australian Openen.</div>
            </div>
          </div>
          <div>
            <p className="eyebrow reveal">Nem csak salak</p>
            <h2 id="proflex-title" className="h2 reveal">
              Grand Slam-borítás, <em>Újszegeden.</em>
            </h2>
            <div className="prose reveal" style={{ marginTop: 28 }}>
              <p>
                2013-ban uniós és állami támogatással épült meg a Proflex borítású multifunkciós pálya. A borítás
                megegyezik a US Open és az Australian Open pályáiéval, és ITF-minősítéssel rendelkezik.
              </p>
              <p>
                Egy teniszpálya, egy röplabdapálya, négy streetball- és egy kézilabdapálya fér el rajta. Szabad
                időpontokban bérelhető — szintén a recepción.
              </p>
            </div>
            <ul className="checklist reveal">
              <li>
                <Check /> Kemény pálya a salak mellé: más ritmus, más labdamenet
              </li>
              <li>
                <Check /> Tenisz, röplabda, streetball, kézilabda és lábtenisz
              </li>
              <li>
                <Check /> Foglalás ugyanúgy: {site.phone}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Booking */}
      <section className="section section--dark" id="foglalas" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow reveal">Pályafoglalás</p>
              <h2 id="foglalas-title" className="h2 reveal">
                Egy telefon, <em>és már játszol.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Nincs regisztráció és nincs app. A recepció foglal, a recepción fizetsz — pontosan tudod, melyik pályán
              és mikor játszol.
            </p>
          </div>

          <div className="booking">
            <ol className="steps">
              <li className="step reveal">
                <span className="step__n">01</span>
                <div>
                  <h3 className="step__title">Hívd a recepciót</h3>
                  <p className="step__text">
                    <a href={site.phoneHref}>{site.phone}</a> — minden nap 8 és 20 óra között. Mondd meg, mikor és
                    hányan jönnétek, a recepció megmondja, melyik pálya szabad.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step__n">02</span>
                <div>
                  <h3 className="step__title">Fizess a főépületben</h3>
                  <p className="step__text">
                    Játék előtt a recepción (főépület) kell kifizetni a pályadíjat, vagy kezeltetni a tízes kártyát.
                    Készpénz, bankkártya, SZÉP-kártya és AYCM Sportpass is jó. Szezonbérlettel ez a lépés kimarad.
                  </p>
                </div>
              </li>
              <li className="step reveal">
                <span className="step__n">03</span>
                <div>
                  <h3 className="step__title">Irány a salak</h3>
                  <p className="step__text">
                    A pályák 7-től 22 óráig nyitva vannak. Este 7 után a világítással rendelkező pályákon automatikusan
                    felkapcsoljuk a lámpákat. Ütőt 600 Ft-ért kölcsönzünk, labdát a recepción veszel.
                  </p>
                </div>
              </li>
            </ol>

            <aside className="callcard reveal" aria-label="Pályafoglalás telefonon">
              <p className="callcard__k">Pályafoglalás</p>
              <a className="callcard__phone num" href={site.phoneHref}>
                {site.phone}
              </a>
              <p className="small" style={{ color: "rgba(245,240,230,.7)" }}>
                A Szabadidőközpont recepciója foglal minden pályát.
              </p>
              <dl className="callcard__hours">
                <div>
                  <dt>{site.hours.reception.label}</dt>
                  <dd className="num">{site.hours.reception.time}</dd>
                </div>
                <div>
                  <dt>{site.hours.courts.label}</dt>
                  <dd className="num">{site.hours.courts.time}</dd>
                </div>
                <div>
                  <dt>Napok</dt>
                  <dd>Hétfő – Vasárnap</dd>
                </div>
              </dl>
              <a className="btn btn--lime" href={site.phoneHref}>
                <Phone size={16} /> Hívás most
              </a>
            </aside>
          </div>

          <div className="rules">
            <div className="rule reveal">
              <h3>Szezonbérlet</h3>
              <p>
                A teljes nyári szezonra szól, április közepétől október közepéig. A szezonbérletek egyeztetése a
                recepción történik.
              </p>
            </div>
            <div className="rule reveal" style={{ ["--d" as string]: "80ms" }}>
              <h3>Lemondás</h3>
              <p>
                Bérletes pályát a játék előtt 24 órával lehet lemondani. A lemondott órák a szezonon belül
                lejátszhatók.
              </p>
            </div>
            <div className="rule reveal" style={{ ["--d" as string]: "160ms" }}>
              <h3>Tízes kártya</h3>
              <p>Tíz alkalom kedvezőbb áron, a választott idősávban. Játék előtt a recepción kell kezeltetni.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Prices */}
      <section className="section" id="arak" aria-labelledby="arak-title">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow reveal">Árak</p>
              <h2 id="arak-title" className="h2 reveal">
                Salakpálya <em>3 200 forinttól.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Minél korábban játszol, annál kedvezőbb. Rendszeres játékosoknak a tízes kártya és a szezonbérlet éri meg
              igazán.
            </p>
          </div>

          <div className="price-shell">
            <div className="reveal">
              <PriceTable />
            </div>
            <div className="price-side">
              <div className="mini mini--dark reveal">
                <p className="mini__k">Fedett pálya</p>
                <p className="mini__v num">
                  {tennisPrices.covered[0].single}
                  <small>Ft / alkalom</small>
                </p>
                <p className="mini__t">Hétfőtől vasárnapig, 7 és 21 óra között. Eső idején is biztos.</p>
              </div>
              <div className="mini reveal" style={{ ["--d" as string]: "80ms" }}>
                <p className="mini__k">Ütőkölcsönzés</p>
                <p className="mini__v num">
                  600<small>Ft / db</small>
                </p>
                <p className="mini__t">Labda a recepción vásárolható. Nem kell saját felszerelés az első órához.</p>
              </div>
              <div className="mini reveal" style={{ ["--d" as string]: "160ms" }}>
                <p className="mini__k">Fizetés</p>
                <p className="mini__t" style={{ marginTop: 10, color: "var(--ink)" }}>
                  Készpénz · bankkártya · SZÉP-kártya · AYCM Sportpass
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Heritage */}
      <section className="heritage" id="tortenet" aria-labelledby="tortenet-title">
        <div className="heritage__bg">
          <Image src="/img/stadium-court.jpg" alt="" fill sizes="100vw" quality={80} />
        </div>
        <div className="heritage__shade" aria-hidden />
        <div className="container">
          <div className="heritage__top">
            <p className="eyebrow eyebrow--light reveal">Versenytenisz</p>
            <h2 id="tortenet-title" className="heritage__quote reveal">
              Itt <em>Davis Kupát</em> játszottak.
            </h2>
            <p className="lead reveal" style={{ color: "rgba(245,240,230,.8)", marginTop: 28 }}>
              A pályák és az infrastruktúra a Nemzetközi Tenisz Szövetség minden feltételének megfelelnek. Korosztályos
              válogatott és országos bajnok játékosok edzenek itt napi rendszerességgel.
            </p>
          </div>
          <ol className="timeline">
            {history.map((h, i) => (
              <li key={h.year} className="reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
                <p className="timeline__y num">{h.year}</p>
                <p className="timeline__t">{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------ School */}
      <section className="section" id="tenisziskola" aria-labelledby="iskola-title">
        <div className="container school-grid">
          <div>
            <p className="eyebrow reveal">Gellért Tenisziskola</p>
            <h2 id="iskola-title" className="h2 reveal">
              Első ütőtől <em>az első versenyig.</em>
            </h2>
            <div className="prose reveal" style={{ marginTop: 28 }}>
              <p>
                A Gellért SE tenisziskolája 5–17 éves gyerekeket és sportolni vágyó felnőtteket vár. Csoportos
                edzéseken, kor és tudás szerint beosztva, szakképzett edzőkkel.
              </p>
            </div>
            <ul className="checklist reveal">
              <li>
                <Check /> Hétköznap délutánonként, 1–1,5 órás edzések
              </li>
              <li>
                <Check /> Hobbiként heti 1–4 alkalom, vagy versenyzői pálya
              </li>
              <li>
                <Check /> Esőben is van edzés: fedett pálya és tornacsarnok
              </li>
              <li>
                <Check /> Csak teniszcipő és sportruha kell — ütőt, labdát mi adunk
              </li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }} className="reveal">
              <Link href="/tenisziskola" className="btn btn--ink">
                A tenisziskoláról <ArrowRight />
              </Link>
              <a href={site.phoneHref} className="btn btn--ghost">
                Jelentkezés: {site.phone}
              </a>
            </div>
          </div>
          <div className="collage">
            <div className="frame reveal-img">
              <Image src="/img/junior-forehand.jpg" alt="Fiatal játékos tenyeres ütése salakon" fill sizes="(max-width: 960px) 60vw, 34vw" />
            </div>
            <div className="frame reveal-img" style={{ ["--d" as string]: "120ms" }}>
              <Image src="/img/playstay-2.jpg" alt="Kislány a Play & Stay programban" fill sizes="(max-width: 960px) 40vw, 24vw" />
            </div>
            <div className="frame reveal-img" style={{ ["--d" as string]: "220ms" }}>
              <Image src="/img/between-points.jpg" alt="Két játékos beszélget a pályán" fill sizes="(max-width: 960px) 40vw, 24vw" />
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: "clamp(56px, 8vw, 96px)" }}>
          <div className="results">
            <article className="result reveal">
              <div className="frame">
                <Image src="/img/womens-team.jpg" alt="A Gellért SE női csapata" fill sizes="(max-width: 900px) 40vw, 30vw" />
              </div>
              <div className="result__body">
                <p className="result__k">2021 · MTSZ csapatbajnokság</p>
                <h3 className="result__t">Bajnok a női I. osztályú csapat</h3>
                <p className="result__d">A Gellért SE női csapata győzelemmel zárta az országos bajnokságot.</p>
              </div>
            </article>
            <article className="result reveal" style={{ ["--d" as string]: "80ms" }}>
              <div className="frame">
                <Image src="/img/forehand.jpg" alt="Versenyző tenyeres ütés közben" fill sizes="(max-width: 900px) 40vw, 30vw" />
              </div>
              <div className="result__body">
                <p className="result__k">2004</p>
                <h3 className="result__t">A vidék legeredményesebb utánpótlás-egyesülete</h3>
                <p className="result__d">Versenyzőik azóta is több korosztályban a magyar élmezőnyhöz tartoznak.</p>
              </div>
            </article>
            <article className="result reveal" style={{ ["--d" as string]: "160ms" }}>
              <div className="frame">
                <Image src="/img/volley-lunge.jpg" alt="Játékos kitörésből üt röptét a hálónál" fill sizes="(max-width: 900px) 40vw, 30vw" />
              </div>
              <div className="result__body">
                <p className="result__k">Tennis Europe · 2021</p>
                <h3 className="result__t">Egyetlen magyarként Monte-Carlóban</h3>
                <p className="result__d">Bíró Melinda kvalifikálta magát a Tennis Europe Junior Masters év végi tornájára.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Centre */}
      <section className="section section--paper2" aria-labelledby="kozpont-title">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow reveal">A Szabadidőközpontban</p>
              <h2 id="kozpont-title" className="h2 reveal">
                Meccs után <em>is marad program.</em>
              </h2>
            </div>
            <p className="lead reveal">
              A Gellért 1996 óta működik Újszegeden. A tenisz mellett ütős-, labda- és ügyességi sportok, nyári
              tábor és rendezvények.
            </p>
          </div>
          <div className="rail reveal">
            {[
              { img: "/img/beach-volley.jpg", t: "Strandröplabda", d: "Homokpályák, este 9 óráig bérelhetők.", alt: "Strandröplabda mérkőzés" },
              { img: "/img/climbing-hall.jpg", t: "Falmászás és sportcsarnok", d: "Mászófal, kosárlabda, foci, kézilabda, tollaslabda.", alt: "A sportcsarnok mászófallal" },
              { img: "/img/squash.jpg", t: "Squash és Sqasket", d: "Fallabda — és a Sqasket, a kosaras változata.", alt: "Sqasket a squash pályán" },
              { img: "/img/ninja-fit.jpg", t: "NINJA-FIT akadálypálya", d: "Szeged első kültéri akadálypályája, csapatoknak is.", alt: "Mászás a NINJA-FIT akadálypályán" },
            ].map((x) => (
              <article className="tile" key={x.t}>
                <div className="frame">
                  <Image src={x.img} alt={x.alt} fill sizes="(max-width: 1000px) 72vw, 25vw" />
                </div>
                <div className="tile__body">
                  <h3 className="tile__t">{x.t}</h3>
                  <p className="tile__d">{x.d}</p>
                </div>
              </article>
            ))}
          </div>
          <ul className="also reveal">
            {["Pickleball", "Lábtenisz", "Asztalitenisz", "Sportbár és terasz", "Csónakázótó", "Nyári sporttábor", "Céges és családi rendezvények"].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------ Visit */}
      <section className="section" id="latogatas" aria-labelledby="latogatas-title">
        <div className="container visit">
          <div>
            <p className="eyebrow reveal">Látogatás</p>
            <h2 id="latogatas-title" className="h2 reveal">
              Derkovits fasor <em>113.</em>
            </h2>
            <p className="lead reveal" style={{ marginTop: 20 }}>
              Újszegeden, a Tisza bal partján, saját parkolóval.
            </p>
            <dl className="info-list reveal">
              <div className="info-row">
                <dt>Cím</dt>
                <dd>
                  {site.address.zip} {site.address.city}, {site.address.street}
                </dd>
              </div>
              <div className="info-row">
                <dt>Foglalás</dt>
                <dd>
                  <a href={site.phoneHref} className="num">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="info-row">
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`} style={{ wordBreak: "break-all" }}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="info-row">
                <dt>Pályák</dt>
                <dd className="num">Hétfő – Vasárnap, {site.hours.courts.time}</dd>
              </div>
              <div className="info-row">
                <dt>Recepció</dt>
                <dd className="num">Hétfő – Vasárnap, {site.hours.reception.time}</dd>
              </div>
            </dl>
            <a className="link-arrow reveal" href={site.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 28 }}>
              Útvonal a Google Térképen <ArrowUpRight />
            </a>
          </div>
          <div className="reveal">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Final CTA */}
      <section className="section section--tight section--paper2">
        <div className="container final">
          <div className="ball-big reveal" aria-hidden>
            <span className="ball" />
          </div>
          <h2 className="h2 reveal">
            Ma este <em>szabad egy pálya?</em>
          </h2>
          <p className="lead reveal">Hívd a recepciót, pár perc alatt kiderül.</p>
          <div className="final__actions reveal">
            <a className="btn btn--clay" href={site.phoneHref}>
              <Phone size={16} /> {site.phone}
            </a>
            <Link className="btn btn--ghost" href="/arak">
              Árak megtekintése
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
