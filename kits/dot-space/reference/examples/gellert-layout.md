# Gellért: how it is wired into Next.js (App Router)

`app/layout.tsx` (excerpt): the dark theme class is in the server-rendered `<html>`, and the
background is rendered once, first in `<body>`:

```tsx
import { SpaceBackground } from "@/components/space/SpaceBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className="space" suppressHydrationWarning>
      <body>
        <SpaceBackground />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

`components/space/SpaceBackground.tsx`: the homepage gets the steps, other pages the quiet
field; `key` remounts the field when you move between them. `gellert-config.ts` is the
choreography, `gellert-space.css` the site's side of the theme.

In the Gellért repo the kit lives in `kits/dot-space/` and is imported from there, so the site
and this package are the same code.
