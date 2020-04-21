# Les Capsules

<p align="center">
  <a href="https://lgtm.com/projects/g/LesCapsules/lescapsules-web/alerts/">
    <img src="https://img.shields.io/lgtm/alerts/g/LesCapsules/lescapsules-web.svg?logo=lgtm&logoWidth=18"/ alt="Total alerts">
  </a>
  <a href="https://david-dm.org/LesCapsules/lescapsules-web">
    <img src="https://david-dm.org/LesCapsules/lescapsules-web/status.svg" alt="dependencies Status"/>
  </a>
  <a href="https://travis-ci.com/LesCapsules/lescapsules-web">
    <img src="https://travis-ci.com/LesCapsules/lescapsules-web.svg?branch=master"/>
  </a>
  <a href="https://lescapsules.netlify.app">
    <img src="https://img.shields.io/badge/deployed-netlify-00c7b7.svg" alt="Deployed on Netlify"/>
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
