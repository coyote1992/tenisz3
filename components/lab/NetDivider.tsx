import { NetDivider as Net } from "@/components/NetDivider";
import { LabTag } from "./LabTag";

/** 12 · The net as divider, with its sketchbook label. */
export function NetDivider({ tone = "paper", tag = true }: { tone?: "paper" | "dark"; tag?: boolean }) {
  return <Net tone={tone}>{tag && <LabTag n="12" name="Net divider" dark={tone === "dark"} />}</Net>;
}
