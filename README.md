# Les Capsules

<p align="center">
  <a href="https://lgtm.com/projects/g/LesCapsules/lescapsules-web/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/github/LesCapsules/lescapsules-web?logo=lgtm&logoColor=white&style=flat-square" alt="Total alerts">
  </a>
  <a href="https://david-dm.org/LesCapsules/lescapsules-web">
    <img src="https://img.shields.io/david/LesCapsules/lescapsules-web?logo=npm&logoColor=white&style=flat-square" alt="dependencies Status"/>
  </a>
  <a href="https://github.com/LesCapsules/lescapsules-web/actions?query=workflow%3ALint">
    <img alt="Linting Workflow status" src="https://img.shields.io/github/workflow/status/LesCapsules/lescapsules-web/Lint/master?label=Lint&logo=github&logoColor=white&style=flat-square">
  </a>
  <a href="https://github.com/LesCapsules/lescapsules-web/actions">
    <img src="https://img.shields.io/github/workflow/status/LesCapsules/lescapsules-web/Lighthouse%20Prod/master?label=Lighthouse&logo=github&logoColor=white&style=flat-square" alt="Lighthouse"/>
  </a>
  <a href="https://app.netlify.com/sites/chez-nicole/deploys">
    <img src="https://img.shields.io/netlify/4b203ef5-3ac6-4b51-afcb-564239b2ef86?label=Netlify&logo=netlify&logoColor=white&style=flat-square" alt="Deployed on Netlify"/>
  </a>
</p>

This site is built using [GatsbyJS](https://www.gatsbyjs.org/), a static code generator using [React](https://reactjs.org/) & [GraphQL](https://graphql.org/). It is deployed on [Netlify](https://www.netlify.com/) and the domain is coming from [Cloudflare](https://www.cloudflare.com/). Dependencies are kept up to date using the excellent [Renovate Bot](https://renovatebot.com/).

## Development 

It uses yarn to manage dependencies, so getting started should be easy:

```bash
# Install deps
$ yarn
# Start the development server
$ yarn run develop
# Build production
$ yarn run build
```

## Git flow

1. Create a branch from `master` for the change with a meaningful name
2. Make the required change, test locally, then commit
3. Create a pull request, which triggers tests, static code analysis and a deploy preview on Netlify.
