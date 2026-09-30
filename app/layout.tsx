import type { Metadata, Viewport } from "next";
import "@fontsource-variable/newsreader/standard.css";
import "@fontsource-variable/newsreader/standard-italic.css";
import "@fontsource-variable/dm-sans/index.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActionBar, RevealObserver } from "@/components/Motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tenisz Szegeden – Gellért Szabadidőközpont",
    template: "%s – Gellért Tenisz, Szeged",
  },
  description:
    "12 szabadtéri salakpálya, egész évben fedett pályák, tenisziskola 5 éves kortól. Pályafoglalás: +36 70 686 5124. Szeged, Derkovits fasor 113.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    siteName: site.name,
    title: "Tenisz Szegeden – Gellért Szabadidőközpont",
    description: "Salakpályák Újszegeden, egész évben fedett pályákkal és tenisziskolával.",
    images: [{ url: "/img/hero-serve.jpg", width: 1920, height: 1064 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2416",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.name,
  sport: "Tennis",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/img/hero-serve.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "HU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "22:00",
    },
  ],
  sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#tartalom" className="skip-link">
          Ugrás a tartalomhoz
        </a>
        <div className="announce">
          Pályafoglalás telefonon<span className="announce__sep">·</span>
          <a href={site.phoneHref}>{site.phone}</a>
          <span className="announce__extra">
            <span className="announce__sep">·</span>
            recepció minden nap 8–20
          </span>
        </div>
        <Header />
        <main id="tartalom">{children}</main>
        <Footer />
        <ActionBar />
        <RevealObserver />
      </body>
    </html>
  );
}
