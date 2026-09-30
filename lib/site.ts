/**
 * Minden tény a gellert.szeged.hu (tenisz, tenisziskola, kapcsolat, árjegyzék)
 * és a gellertse.hu oldalakról származik. Új adatot csak forrással vegyünk fel.
 */

export const site = {
  name: "Gellért Szabadidőközpont",
  short: "Gellért Tenisz",
  url: "https://gellert.szeged.hu",
  phone: "+36 70 686 5124",
  phoneHref: "tel:+36706865124",
  email: "szabadidokozpont@gellertesfiai.hu",
  address: {
    street: "Derkovits fasor 113.",
    zip: "6726",
    city: "Szeged",
    district: "Újszeged",
  },
  mapsUrl: "https://maps.app.goo.gl/2Promqf6wFUueNJ78",
  mapsEmbed:
    "https://www.google.com/maps?q=Gell%C3%A9rt+Szabadid%C5%91k%C3%B6zpont,+Szeged,+Derkovits+fasor+113&output=embed",
  hours: {
    courts: { label: "Pályák", days: "Hétfő – Vasárnap", time: "07:00 – 22:00" },
    reception: { label: "Recepció", days: "Hétfő – Vasárnap", time: "08:00 – 20:00" },
  },
  social: {
    facebook: "https://www.facebook.com/gellertszabadidokozpont/",
    instagram: "https://www.instagram.com/gellert_szabadidokozpont/",
    instagramTennis: "https://www.instagram.com/gellerttenisz",
    youtube: "https://www.youtube.com/channel/UCcza_Cp5GwkgBM16M12W9XQ",
  },
  club: {
    name: "Gellért Szabadidőközpont Sportegyesület",
    shortName: "Gellért SE",
    url: "https://gellertse.hu/",
    headCoach: "Kiss György",
    headCoachRole: "a tenisz szakosztály vezetője",
    headCoachPhone: "+36 70 457 9133",
    headCoachPhoneHref: "tel:+36704579133",
  },
  operator: {
    name: "Gellért és Fiai Consulting Kft.",
    address: "6724 Szeged, Kossuth Lajos sgt. 109.",
    phone: "+36 62 556 700",
    email: "info@gellertesfiai.hu",
    taxId: "11093565-2-06",
  },
  legacy: {
    legal: "https://gellert.szeged.hu/jogi-nyilatkozat/",
    grants: "https://gellert.szeged.hu/palyazatok/",
    privacy: "https://gellert.szeged.hu/adatvedelmi-es-felhasznalasi-feltetelek/",
    virtualTour: "https://magicview.hu/virtualtour/gellert",
  },
} as const;

export const nav = [
  { href: "/#palyak", label: "Pályák" },
  { href: "/arak", label: "Árak" },
  { href: "/tenisziskola", label: "Tenisziskola" },
  { href: "/kapcsolat", label: "Kapcsolat" },
] as const;

/* ------------------------------------------------------------------ */
/* Árak – 2025. nyári szezon (2025.04.14 – 10.19.) hivatalos árjegyzéke */
/* ------------------------------------------------------------------ */

export const priceSeason = {
  label: "2025-ös nyári szezon",
  range: "2025. április 14. – október 19.",
  source: "/docs/gellert-arjegyzek-2025-nyar.jpg",
};

export type PriceRow = { time: string; season?: string; ten?: string; single: string };

export const tennisPrices: {
  weekday: PriceRow[];
  weekend: PriceRow[];
  covered: PriceRow[];
} = {
  weekday: [
    { time: "07:00 – 14:00", season: "2 000", ten: "24 000", single: "3 200" },
    { time: "14:00 – 19:00", season: "2 900", ten: "35 000", single: "4 400" },
    { time: "19:00 – 21:00", season: "3 400", ten: "40 000", single: "5 200" },
  ],
  weekend: [
    { time: "07:00 – 19:00", season: "2 200", ten: "24 000", single: "3 200" },
    { time: "19:00 – 21:00", season: "2 500", ten: "30 000", single: "4 000" },
  ],
  covered: [{ time: "07:00 – 21:00", single: "4 800" }],
};

export type OtherPriceGroup = {
  sport: string;
  note?: string;
  blocks: {
    days: string;
    columns: string[];
    rows: string[][];
  }[];
};

export const otherPrices: OtherPriceGroup[] = [
  {
    sport: "Squash",
    blocks: [
      {
        days: "Hétfő – Péntek",
        columns: ["Idő", "10-es bérlet", "Alkalom"],
        rows: [
          ["08:00–14:00", "40 000 Ft", "4 400 Ft"],
          ["14:00–20:00", "48 000 Ft", "5 200 Ft"],
        ],
      },
      {
        days: "Hétvégén és ünnepnapokon",
        columns: ["Idő", "10-es bérlet", "Alkalom"],
        rows: [["08:00–20:00", "39 000 Ft", "3 900 Ft"]],
      },
    ],
  },
  {
    sport: "Strandröplabda",
    blocks: [
      {
        days: "Hétfő – Vasárnap",
        columns: ["Idő", "10-es bérlet", "Alkalom"],
        rows: [
          ["07:00–19:00", "36 000 Ft", "3 900 Ft"],
          ["19:00–21:00", "42 000 Ft", "4 500 Ft"],
        ],
      },
    ],
  },
  {
    sport: "Lábtenisz",
    blocks: [
      {
        days: "Hétfő – Vasárnap",
        columns: ["Idő", "Salakpálya, alkalom", "Salakpálya, 10-es bérlet", "Kemény pálya"],
        rows: [
          ["07:00–19:00", "3 000 Ft / óra", "28 000 Ft", "5 000 Ft / óra"],
          ["19:00–21:00", "–", "–", "5 500 Ft / óra"],
        ],
      },
    ],
  },
  {
    sport: "Sportcsarnok",
    blocks: [
      {
        days: "Hétfő – Péntek",
        columns: ["Idő", "Alkalom"],
        rows: [
          ["07:00–14:00", "14 000 Ft"],
          ["14:00–21:00", "17 000 Ft"],
        ],
      },
      {
        days: "Hétvégén és ünnepnapokon",
        columns: ["Idő", "Alkalom"],
        rows: [["07:00–21:00", "14 000 Ft"]],
      },
    ],
  },
  {
    sport: "Tollaslabda",
    blocks: [
      {
        days: "Hétvégente 10:00 – 12:00, és ünnepnapokon",
        columns: ["Díj"],
        rows: [["5 000 Ft / óra / pálya (2 pálya foglalása esetén)"]],
      },
    ],
  },
  {
    sport: "Asztalitenisz",
    blocks: [
      {
        days: "Hétfő – Vasárnap",
        columns: ["Díj"],
        rows: [["3 000 Ft / óra"]],
      },
    ],
  },
];

export const priceNotes = [
  "A szezonbérletek 27 hétre érvényesek.",
  "A bérletes pályák a játék előtt 24 órával mondhatók le; a lemondott órák a szezonban lejátszhatók.",
  "Fizetés: készpénz, bankkártya, SZÉP-kártya, AYCM Sportpass.",
  "Ütő kölcsönözhető: 600 Ft / db. Labda a recepción vásárolható.",
  "19 és 22 óra közötti foglalásnál a világítást automatikusan kapcsoljuk (a világítással rendelkező pályákon).",
  "Az árak a 27% áfát tartalmazzák. A nyitvatartás és az árváltozás jogát fenntartjuk.",
];

/* ------------------------------------------------------------------ */

export const history = [
  { year: "1996", text: "Megnyit az újszegedi Gellért Szabadidőközpont." },
  { year: "1999 · 2000", text: "Két egymást követő évben itt rendezik a magyar bajnokságot." },
  { year: "2001", text: "Davis Kupa: Magyarország – Monaco. Vidéken először rendeznek ilyen rangú nemzetközi teniszversenyt." },
  { year: "2002", text: "Fed Kupa a Gellértben — és októberben megalakul a Gellért SE." },
  { year: "2004", text: "Újra Davis Kupa, Norvégia és Szerbia-Montenegró ellen. A Gellért Tenisziskola a vidék legeredményesebb utánpótlás-nevelő egyesülete." },
  { year: "2013", text: "Elkészül az ITF-minősítésű, Proflex borítású multifunkciós pálya." },
] as const;
