This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# dev

## Routes

- `/` — portfolio home and project archive
- `/projects/[slug]` — statically generated project case studies
- `/blog` and `/blog/[slug]` — GitHub-Issue-backed blog
- `/private` — auth-ready private-area shell

The public site remains configured for static export. The future private area has an authentication boundary in `app/lib/auth.js` for either Amazon Cognito or Google OAuth, but it is intentionally not secure until a provider, callback handling, session validation, and deployment secrets are connected.

## Build modes

Local development uses the normal Next.js server:

```bash
npm run dev
```

For the live static deployment, set `NEXT_OUTPUT=export` in the deployment environment before running the build. See `.env.example` for the available variables. Do not commit `.env` or provider secrets.

## Blog publishing

Blog posts are authored as Issues in this private repository. Use the `Blog post` issue form, keep drafts labeled `draft`, and add the `published` label when a post is ready. The `Sync blog issues` workflow reads published issues and generates `app/data/blog.generated.js`; edit the issue rather than the generated file.

Before enabling the sync workflow, recreate the existing posts as published Issues so the first sync does not remove them. The `Deploy Next.js site to Pages` workflow builds the static export and deploys it after generated blog data is committed. Enable GitHub Pages in repository settings with `GitHub Actions` as the source before the first deployment.
