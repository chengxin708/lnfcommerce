"use client";

import { useRef, type MouseEvent } from "react";

// A store button that opens a small dialog with the store link as a QR code, so someone
// reading the page on a computer can scan it with their phone. On phones and tablets
// (touch screens) the button just opens the store, as a plain link would.

export function StoreButton({
  href,
  small,
  big,
  qrSvg,
}: {
  href: string;
  small: string; // "Download on the"
  big: string; // "App Store"
  qrSvg: string; // the QR code of href as an <svg> string, made on the server
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (new tab, etc.) and touch devices follow the link.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (window.matchMedia("(pointer: coarse)").matches || !dialog.current?.showModal) return;
    e.preventDefault();
    dialog.current.showModal();
  }

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="inline-flex min-w-[9.5rem] flex-1 flex-col rounded-xl bg-ink px-5 py-2 leading-tight text-on-ink no-underline shadow-card transition-colors hover:bg-ink/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:min-w-[10.5rem] sm:flex-none"
      >
        <span className="text-[11px] text-on-ink/75">{small}</span>
        <span className="text-lg font-semibold tracking-tight">{big}</span>
      </a>
      <dialog
        ref={dialog}
        aria-label={`${big} QR code`}
        // A click on the dimmed area outside the panel lands on the <dialog> itself: close.
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-line bg-surface p-0 text-ink shadow-raise backdrop:bg-ink/40"
      >
        <div className="flex flex-col items-center p-6 text-center">
          <p className="text-lg font-semibold tracking-tight">Scan with your phone</p>
          <p className="mt-1 text-sm text-ink-2">
            {small} {big}
          </p>
          <div
            className="mt-4 h-52 w-52 rounded-xl border border-line bg-white p-2 [&>svg]:h-full [&>svg]:w-full"
            role="img"
            aria-label={`QR code for ${href}`}
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <p className="mt-3 max-w-full select-all break-all font-mono text-[11px] text-ink-3">{href}</p>
          <div className="mt-5 flex w-full gap-3">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-ink px-3.5 py-2 text-sm font-medium text-on-ink no-underline hover:bg-ink/90"
            >
              Open {big}
            </a>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="flex-1 cursor-pointer rounded-lg border border-line-strong bg-surface px-3.5 py-2 text-sm font-medium text-ink hover:bg-muted"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
