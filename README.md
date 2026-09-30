# Gellért Tenisz — gellert.szeged.hu/tenisz újratervezése

Next.js 16 (App Router) + TypeScript. Nincs UI-könyvtár; saját, token-alapú CSS (`app/globals.css`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Oldalak

| Útvonal         | Tartalom                                                                 |
| --------------- | ------------------------------------------------------------------------ |
| `/`             | Tenisz főoldal: pályák (nyár/tél pályatérkép), Proflex, foglalás, árak, versenytenisz-történet, tenisziskola, a központ többi sportja, megközelítés |
| `/arak`         | A teljes 2025-ös nyári árjegyzék (tenisz, squash, strandröplabda, lábtenisz, sportcsarnok, tollaslabda, asztalitenisz) és a tudnivalók |
| `/tenisziskola` | Gellért SE Tenisziskola: edzések, Play & Stay szintek, eredmények, nyári tábor, GYIK |
| `/kapcsolat`    | Elérhetőségek, térkép (kattintásra töltődik), rendezvények, üzemeltető |

## Tartalom és források

Minden tény a `lib/site.ts`-ben van, egy helyen. Források:

- gellert.szeged.hu: `/tenisz/`, `/tenisz-iskola/`, `/kapcsolat/`, `/rendezveny/` és a hírek (archivált másolatok, 2025 nyara)
- a 2025-ös nyári árjegyzék (`public/docs/gellert-arjegyzek-2025-nyar.jpg`, érvényes 2025.04.14–10.19.)
- gellertse.hu: bemutatkozás, GYIK, nyári tábor, hírek és eredmények

A fotók a két oldal saját képei (sok közülük Karnok Csaba felvétele). A logó labdamotívumát
(`public/brand/ball-mask.png`) a meglévő kerek logóból vágtuk ki; a logót nem terveztük újra.

## A tulajdonossal egyeztetendő

- **Árak:** a 2025-ös nyári árjegyzéket mutatjuk. A téli és a 2026-os árakat kell frissíteni a `lib/site.ts`-ben.
- **Szezonbérlet oszlop:** az árjegyzék nem írja ki, mire vonatkozik az összeg; alkalmankénti díjként jelenítjük meg.
- **Pályatérkép:** sematikus ábra (a pályák száma pontos, az elrendezés nem). Melyik öt pályán van világítás,
  és melyik két pálya kerül télen sátor alá, ezt nem tudjuk; az ábrán csak illusztráció.
- **Eredmények:** a gellertse.hu 2021-es híreiből vannak. Érdemes frissebb eredményekre cserélni.
- **Recepció nyitvatartása:** 08:00–20:00-t mutatjuk (a tenisz oldal és a 2024-es közlemény alapján).
