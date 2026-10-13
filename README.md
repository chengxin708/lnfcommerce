# lnfcommerce.com

Company site for LNF COMMERCE INC: the apps and games catalog plus the Privacy Policy,
Terms of Service, Support and data-deletion pages that store listings link to.

- Company details: `lib/site.ts`
- Apps and games: `lib/products.ts` — one entry per product; its page is `/apps/<slug>`
- Deploys to Vercel (project `lnfcommerce`) on push to `main`

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```
