// Shared look, ported from lnfitservices.com so both company sites read as one family:
// ink primary button, outlined secondary, white hairline cards, mono "NN — LABEL" folios.

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
const btnBase = `inline-flex items-center justify-center gap-1.5 rounded-lg font-medium no-underline transition-colors duration-150 ${focusRing}`;

export const btnPrimary = `${btnBase} bg-ink text-on-ink hover:bg-ink/90 px-3.5 py-2 text-sm shadow-card`;
export const btnSecondary = `${btnBase} border border-line-strong bg-surface text-ink hover:bg-muted px-3.5 py-2 text-sm shadow-card`;
export const cardCls = "rounded-xl border border-line bg-surface shadow-card";
export const monoLabel = "font-mono text-[11px] uppercase tracking-wider";
export const navLink = `${monoLabel} text-ink-2 no-underline transition-colors hover:text-ink`;

/** "01 — APPS" on the left, a quiet tag on the right, hairline rule under both. */
export function Folio({ left, right }: { left: string; right: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className={`${monoLabel} text-ink-2`}>{left}</span>
        <span className={`${monoLabel} text-ink-2`}>{right}</span>
      </div>
      <div className="mt-3 h-px w-full bg-line" />
    </div>
  );
}
