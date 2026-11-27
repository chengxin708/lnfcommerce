"use client";

import { useRef } from "react";

// "Share QR code": opens a dialog with one QR code that works for any phone (the /get/<slug>
// link picks the App Store or Google Play by device). Made for showing your screen to a friend.

export function ShareQrButton({ name, url, qrSvg }: { name: string; url: string; qrSvg: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-5 py-2.5 text-[15px] font-medium text-ink shadow-card transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:w-auto"
      >
        {/* a small QR-like glyph */}
        <svg aria-hidden viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
          <path d="M1 1h6v6H1V1zm2 2v2h2V3H3zm6-2h6v6H9V1zm2 2v2h2V3h-2zM1 9h6v6H1V9zm2 2v2h2v-2H3zm6-2h2v2H9V9zm4 0h2v2h-2V9zm-2 2h2v2h-2v-2zm-2 2h2v2H9v-2zm4 0h2v2h-2v-2z" />
        </svg>
        Share QR code
      </button>
      <dialog
        ref={dialog}
        aria-label={`QR code to get ${name}`}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-line bg-surface p-0 text-ink shadow-raise backdrop:bg-ink/40"
      >
        <div className="flex flex-col items-center p-6 text-center">
          <p className="text-lg font-semibold tracking-tight">Scan to get the app</p>
          <p className="mt-1 text-sm text-ink-2">{name}</p>
          <div
            className="mt-4 aspect-square w-full max-w-64 rounded-xl border border-line bg-white p-2 [&>svg]:h-full [&>svg]:w-full"
            role="img"
            aria-label={`QR code for ${url}`}
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
          <p className="mt-3 text-sm text-ink-2">Opens the App Store on iPhone and Google Play on Android.</p>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="mt-5 w-full cursor-pointer rounded-lg border border-line-strong bg-surface px-3.5 py-2 text-sm font-medium text-ink hover:bg-muted"
          >
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}
