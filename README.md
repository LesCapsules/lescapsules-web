# Les Capsules

<p align="center">
  <a href="https://github.com/LesCapsules/lescapsules-web/actions/workflows/ci.yml?query=branch%3Amain">
    <img alt="CI status" src="https://img.shields.io/github/actions/workflow/status/LesCapsules/lescapsules-web/ci.yml?branch=main&label=CI&logo=github&logoColor=white&style=flat-square">
  </a>
  <a href="https://app.netlify.com/sites/lescapsules/deploys">
    <img src="https://img.shields.io/netlify/4b203ef5-3ac6-4b51-afcb-564239b2ef86?label=Netlify&logo=netlify&logoColor=white&style=flat-square" alt="Deployed on Netlify"/>
  </a>
</p>

This site is built using [Next.js](https://nextjs.org/), a React framework with static site generation capabilities. It is deployed on [Netlify](https://www.netlify.com/) and the domain is coming from [Cloudflare](https://www.cloudflare.com/). Dependencies are kept up to date using the excellent [Renovate Bot](https://renovatebot.com/).

## Development

It uses npm to manage dependencies, so getting started should be easy:

```bash
# Install deps
$ npm ci
# Start the development server
$ npm run dev
# Build production
$ npm run build
```

## Content updates

Content is managed in the [Sanity studio](https://github.com/LesCapsules/sanity-studio)
and baked into the site at build time, so publishing content needs a new deploy.
A [GROQ-powered webhook](https://www.sanity.io/docs/webhooks) on the Sanity
project sends a `repository_dispatch` event of type `sanity-publish` to this
repository, which triggers the [content deploy workflow](.github/workflows/content-deploy.yml)
and deploys to production. It can also be run manually from the Actions tab.

## Git flow

1. Create a branch from `main` for the change with a meaningful name
2. Make the required change, test locally, then commit
3. Create a pull request, which triggers tests, static code analysis and a deploy preview on Netlify.
