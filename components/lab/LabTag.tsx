/** Small corner label naming the sketchbook idea a section demonstrates. */
export function LabTag({ n, name, dark = false }: { n: string; name: string; dark?: boolean }) {
  return (
    <span className={`lab-tag${dark ? " lab-tag--dark" : ""}`}>
      <b>{n}</b> {name}
    </span>
  );
}
