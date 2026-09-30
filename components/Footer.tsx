import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Brand } from "./Brand";
import { Facebook, Instagram, Youtube } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Brand sub="Szabadidőközpont · Szeged" />
            <p className="footer__big">Salakpályák a liget szélén, Újszegeden.</p>
            <address className="footer__contact">
              <span>
                {site.address.zip} {site.address.city}, {site.address.street}
              </span>
              <a href={site.phoneHref} className="num">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
            <div className="footer__social">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook />
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>

          <div>
            <h2>Tenisz</h2>
            <ul>
              <li>
                <Link href="/#palyak">Pályák</Link>
              </li>
              <li>
                <Link href="/#foglalas">Pályafoglalás</Link>
              </li>
              <li>
                <Link href="/arak">Árak</Link>
              </li>
              <li>
                <Link href="/tenisziskola">Tenisziskola</Link>
              </li>
              <li>
                <Link href="/#tortenet">Versenytenisz</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Nyitvatartás</h2>
            <ul>
              <li>
                {site.hours.courts.label}
                <br />
                <span className="num">{site.hours.courts.time}</span>
              </li>
              <li>
                {site.hours.reception.label}
                <br />
                <span className="num">{site.hours.reception.time}</span>
              </li>
              <li className="small">Minden nap, hétfőtől vasárnapig</li>
            </ul>
          </div>

          <div>
            <h2>Információ</h2>
            <ul>
              <li>
                <Link href="/kapcsolat">Kapcsolat és megközelítés</Link>
              </li>
              <li>
                <a href={site.club.url} target="_blank" rel="noopener noreferrer">
                  Gellért SE
                </a>
              </li>
              <li>
                <a href={site.legacy.virtualTour} target="_blank" rel="noopener noreferrer">
                  Virtuális séta
                </a>
              </li>
              <li>
                <a href={site.legacy.legal} target="_blank" rel="noopener noreferrer">
                  Jogi nyilatkozat
                </a>
              </li>
              <li>
                <a href={site.legacy.privacy} target="_blank" rel="noopener noreferrer">
                  Adatvédelem
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            © {year} {site.name} · Üzemeltető: {site.operator.name}, {site.operator.address}
          </div>
          <a href={site.legacy.grants} target="_blank" rel="noopener noreferrer" className="footer__grant" aria-label="Pályázatok – Széchenyi 2020 infoblokk">
            <Image src="/brand/infoblokk-erfa.jpg" alt="Széchenyi 2020 – Európai Regionális Fejlesztési Alap" width={900} height={622} sizes="132px" />
          </a>
        </div>
      </div>
    </footer>
  );
}
