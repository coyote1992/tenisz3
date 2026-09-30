import Link from "next/link";

export function Brand({ sub = "Tenisz · Szeged" }: { sub?: string }) {
  return (
    <Link href="/" className="brand" aria-label="Gellért Szabadidőközpont – főoldal">
      <span className="brand__mark" aria-hidden>
        <span />
      </span>
      <span className="brand__text">
        <span className="brand__name">Gellért</span>
        <span className="brand__sub">{sub}</span>
      </span>
    </Link>
  );
}
