import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Phone } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tenisziskola",
  description:
    "Gellért Tenisziskola Szegeden: csoportos teniszedzések 5–17 éves gyerekeknek és felnőtteknek, hobbi és versenyző csoportokkal. Ütőt, labdát biztosítunk.",
  alternates: { canonical: "/tenisziskola" },
};

const levels = [
  {
    name: "Piros",
    color: "#c8412f",
    age: "4–8 év",
    t: "11 × 5–6 m-es pálya, 80 cm-es háló, szivacs vagy 25%-os nyomású labda, 41–53 cm-es ütő.",
  },
  {
    name: "Narancs",
    color: "#e0893a",
    age: "7–11 év",
    t: "18 × 6,5–8,23 m-es pálya, 80 cm-es háló, 50%-os nyomású labda, 53–63 cm-es ütő.",
  },
  {
    name: "Zöld",
    color: "#7aa33b",
    age: "8+ év, kezdő felnőttek",
    t: "Teljes méretű pálya, normál háló, 75%-os nyomású labda, 63–68 cm-es ütő.",
  },
];

const results = [
  { y: "2021", t: "Bíró Melinda egyetlen magyarként kvalifikálta magát a Tennis Europe Junior Masters Monte-Carlói év végi tornájára." },
  { y: "2021", t: "Bíró Melinda párosban második a TE14 Super Category Christmas Cupon, Moszkvában." },
  { y: "2021", t: "A Gellért SE női I. osztályú csapata győzelemmel zárta az MTSZ csapatbajnokságot." },
  { y: "2021", t: "Kis-Czakó Eszter a legjobb négy közé jutott U16 párosban Bad Waltersdorfban (Tennis Europe)." },
  { y: "2004", t: "A Gellért Tenisziskola a vidék legeredményesebb utánpótlás-nevelő egyesülete." },
];

const faq = [
  {
    q: "Mit hozzon a gyerek az első edzésre?",
    a: [
      "Teniszcipőt (vagy sima talpú sportcipőt), kényelmes, időjárásnak megfelelő sportruházatot és kulacsot. Ha van saját teniszütő, hozza — ha nincs, az sem baj. Minden mást mi adunk.",
    ],
  },
  {
    q: "Miért kell teniszcipő?",
    a: [
      "A teniszre az előre, hátra és oldalirányú mozgás, a gyors elindulás és a hirtelen megállás jellemző. A teniszcipő orra és oldala ezért megerősített, a talpa rendkívül tartós.",
      "Vásárlásnál érdemes figyelni a pálya típusára is: van salakpályás, keménypályás és „allcourt” teniszcipő. A salakra futó- vagy stoplis cipővel nem lehet rálépni.",
    ],
  },
  {
    q: "Esőben is van edzés?",
    a: [
      "Igen, időjárástól függetlenül mindig van edzés. Van állandó fedett pálya és tornacsarnok, és más fedett termek is — ilyenkor lehet, hogy rendhagyó az edzés, de mindig hasznos.",
    ],
  },
  {
    q: "Mennyibe kerülnek az edzések?",
    a: [
      "Az egyesületnél havi tagdíjat kell fizetni, mindig az adott hónap 10. napjáig. Az összeg attól függ, hogy hobbi vagy versenyző csoportról van szó, és hogy heti hány alkalommal jár a teniszező edzésre.",
      `Az aktuális díjakról a Szabadidőközpont recepcióján tájékoztatnak: ${site.phone}.`,
    ],
  },
  {
    q: "Nyáron és az iskolai szünetekben is van edzés?",
    a: [
      "Igen. Az iskolai és óvodai szünetektől függetlenül van edzés, kivéve ünnepnapokon és az előre kijelölt nyári és téli teniszszünetekben. Nyáron tenisz- és sporttáborokba is várjuk a tagokat.",
    ],
  },
  {
    q: "Felnőttként is lehet csatlakozni?",
    a: [
      "Igen, a tenisziskola a sportolni vágyó felnőtteket is várja. A Gellért SE ráadásul díjmentes tagfelvételt hirdetett az amatőr szinten teniszező vendégeknek: a tagság kötelezettséggel nem jár, jelentkezni a recepción, jelentkezési lappal lehet.",
    ],
  },
];

export default function SchoolPage() {
  return (
    <>
      <section className="phero" style={{ borderBottom: 0 }}>
        <div className="container">
          <nav className="crumbs" aria-label="Morzsamenü">
            <Link href="/">Főoldal</Link> <span aria-hidden>/</span> <span>Tenisziskola</span>
          </nav>
          <div className="phero__grid">
            <div>
              <p className="eyebrow">Gellért SE · Tenisziskola</p>
              <h1 className="h1">
                Tenisz 5 éves kortól. <em>Felnőtteknek is.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                Csoportos edzések kor és tudás szerint, szakképzett edzőkkel, jól felszerelt salakpályákon. Hobbiként
                heti egyszer, vagy versenyzői csoportban.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
                <a className="btn btn--clay" href={site.phoneHref}>
                  <Phone size={16} /> Jelentkezés: {site.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="wide-media">
            <div className="frame reveal-img">
              <Image
                src="/img/school-group-court.jpg"
                alt="A Gellért Tenisziskola növendékei a salakpályán"
                fill
                priority
                sizes="100vw"
                style={{ objectPosition: "center 60%" }}
              />
            </div>
            <p className="caption">A Gellért Tenisziskola növendékei. Fotó: Karnok Csaba</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="edzesek">
        <div className="container split">
          <div>
            <p className="eyebrow reveal">Az edzésekről</p>
            <h2 id="edzesek" className="h2 reveal">
              Csoportban tanulni <em>jobb.</em>
            </h2>
            <div className="prose reveal" style={{ marginTop: 24 }}>
              <p>
                A Gellért Szabadidőközpont Sportegyesület 2002 óta működik, tenisz szakosztálya a Gellért Tenisziskola.
                A fiatal tehetségek gondozására nagy hangsúlyt fektet: versenyzői több korosztályban is a magyar tenisz
                élmezőnyéhez tartoznak.
              </p>
            </div>
            <ul className="checklist reveal">
              <li>
                <Check /> Csoportos oktatás, életkor és tudás szerinti beosztással
              </li>
              <li>
                <Check /> Hétköznap délutánonként, 1–1,5 órás edzések
              </li>
              <li>
                <Check /> Hobbisportként akár heti 1–4 alkalommal
              </li>
              <li>
                <Check /> Versenyzési lehetőség, háziversenyek és Gellért Kupa
              </li>
              <li>
                <Check /> Ütőt, labdát és minden eszközt mi biztosítunk
              </li>
            </ul>
          </div>
          <div className="split__media">
            <div className="frame frame--tall reveal-img">
              <Image src="/img/playstay-1.jpg" alt="Kislány a Play & Stay versenyen, narancs labdával" fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
            <div className="stamp reveal" style={{ ["--d" as string]: "300ms" }}>
              <div className="stamp__k">Amit hozz</div>
              <div className="stamp__v">Teniszcipő, sportruha, kulacs. A többit mi adjuk.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper2" aria-labelledby="playstay">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow reveal">Play & Stay</p>
              <h2 id="playstay" className="h2 reveal">
                Kisebb pálya, <em>lassabb labda.</em>
              </h2>
            </div>
            <p className="lead reveal">
              Az ITF 2007-ben indította a Play and Stay programot: lassabb labdákkal és kisebb pályán a kezdők hamarabb
              jutnak el a valódi játékig. A tenisziskola növendékei Play & Stay csapatversenyeken is játszanak.
            </p>
          </div>
          <div className="levels" style={{ marginTop: 0 }}>
            {levels.map((l, i) => (
              <div className="level reveal" key={l.name} style={{ ["--level" as string]: l.color, ["--d" as string]: `${i * 90}ms` }}>
                <p className="level__name">{l.name}</p>
                <p className="level__age">{l.age}</p>
                <p className="level__t">{l.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="eredmenyek">
        <div className="container split split--reverse">
          <div>
            <p className="eyebrow reveal">Eredmények</p>
            <h2 id="eredmenyek" className="h2 reveal">
              Gellértes <em>versenyzők.</em>
            </h2>
            <ol className="yearlist reveal">
              {results.map((r) => (
                <li key={r.t}>
                  <span className="yearlist__y num">{r.y}</span>
                  <span>{r.t}</span>
                </li>
              ))}
            </ol>
            <p className="small muted reveal" style={{ marginTop: 16 }}>
              Forrás: a Gellért SE hírei. Friss eredmények a{" "}
              <a className="text-link" href={site.social.instagramTennis} target="_blank" rel="noopener noreferrer">
                Gellért Tenisz Instagram-oldalán
              </a>
              .
            </p>
          </div>
          <div className="split__media">
            <div className="frame frame--wide reveal-img">
              <Image src="/img/womens-team.jpg" alt="A Gellért SE női csapata a bajnoki cím után" fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="tabor">
        <div className="container split">
          <div className="split__media">
            <div className="frame frame--square reveal-img">
              <Image src="/img/camp.jpg" alt="Gyerekek ügyességi játéka a Gellért nyári sporttáborában" fill sizes="(max-width: 860px) 100vw, 50vw" />
            </div>
          </div>
          <div>
            <p className="eyebrow reveal">Nyári sporttábor</p>
            <h2 id="tabor" className="h2 reveal">
              Hét hét nyár, <em>nyolc hektáron.</em>
            </h2>
            <div className="prose reveal" style={{ marginTop: 24 }}>
              <p>
                A Gellért SE több mint 15 éve rendez nyári gyerektábort. A tenisz mellett labdajátékok, vízi és
                ügyességi sportok várják a gyerekeket — Szegedről és az ország minden pontjáról.
              </p>
            </div>
            <ul className="checklist reveal">
              <li>
                <Check /> 5–13 éveseknek, korcsoportokra bontva
              </li>
              <li>
                <Check /> Napközis rendszerben, 8 és 16 óra között
              </li>
              <li>
                <Check /> Napi háromszori étkezéssel, pedagógusok vezetésével
              </li>
              <li>
                <Check /> Zárt, biztonságos területen, csónakázótóval és játszótérrel
              </li>
            </ul>
            <a className="link-arrow reveal" href={`${site.club.url}nyari-tabor/`} target="_blank" rel="noopener noreferrer" style={{ marginTop: 28 }}>
              Turnusok és jelentkezés a Gellért SE oldalán <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="gyik">
        <div className="container school-grid">
          <div>
            <p className="eyebrow">Kérdések</p>
            <h2 id="gyik" className="h2">
              Amit a szülők <em>kérdezni szoktak.</em>
            </h2>
            <div className="ccard" style={{ marginTop: 36 }}>
              <p className="ccard__k">Tenisz szakosztály</p>
              <p className="ccard__v">{site.club.headCoach}</p>
              <p className="ccard__t">A Gellért SE {site.club.headCoachRole}.</p>
              <a className="link-arrow num" href={site.club.headCoachPhoneHref}>
                <Phone size={16} /> {site.club.headCoachPhone}
              </a>
            </div>
          </div>
          <div className="faq">
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>
                  {f.q}
                  <span className="plus" aria-hidden />
                </summary>
                <div className="faq__a">
                  {f.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--paper2">
        <div className="container final">
          <div className="ball-big" aria-hidden>
            <span className="ball" />
          </div>
          <h2 className="h2">
            Kezdjük <em>az első edzéssel.</em>
          </h2>
          <p className="lead">Hívd a recepciót, és megmondjuk, melyik csoport illik hozzád vagy a gyerekedhez.</p>
          <div className="final__actions">
            <a className="btn btn--clay" href={site.phoneHref}>
              <Phone size={16} /> {site.phone}
            </a>
            <a className="btn btn--ghost" href={site.club.url} target="_blank" rel="noopener noreferrer">
              A Gellért SE oldala <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
