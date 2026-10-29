"use client";

import { useState } from "react";

// Internal status page: the content ships only as ciphertext (public/status.enc.json, made by
// a local encrypt script) and is decrypted in the browser with the password.
// PBKDF2-SHA256 → AES-256-GCM; parameters are stored next to the ciphertext.
type Enc = { v: number; iter: number; salt: string; iv: string; data: string };

const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function decrypt(enc: Enc, pass: string): Promise<string> {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: fromB64(enc.salt), iterations: enc.iter, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: fromB64(enc.iv) }, key, fromB64(enc.data));
  return new TextDecoder().decode(plain);
}

export function StatusGate() {
  const [pass, setPass] = useState("");
  const [html, setHtml] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "busy" | "wrong">("idle");

  async function open(e: React.FormEvent) {
    e.preventDefault();
    setState("busy");
    try {
      const enc = (await (await fetch("/status.enc.json", { cache: "no-store" })).json()) as Enc;
      setHtml(await decrypt(enc, pass));
    } catch {
      setState("wrong");
      return;
    }
    setState("idle");
  }

  if (html) return <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <form onSubmit={open} className="flex max-w-sm flex-col gap-3">
      <h1>Internal</h1>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        autoFocus
        className="rounded border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-[var(--ink)]"
      />
      <button
        type="submit"
        disabled={!pass || state === "busy"}
        className="rounded bg-[var(--cobalt)] px-3 py-2 font-semibold text-white disabled:opacity-50"
      >
        {state === "busy" ? "Opening…" : "Open"}
      </button>
      {state === "wrong" && <p className="text-sm text-[var(--muted)]">Wrong password.</p>}
    </form>
  );
}
