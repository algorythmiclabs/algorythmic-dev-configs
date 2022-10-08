# dev-configs-web

> Common configurations for building OEI web apps.

| Status | Owner                          | Help                                                                     |
| ------ | ------------------------------ | ------------------------------------------------------------------------ |
| Active | @openendurance/dev-configs-web | [New issue](https://github.com/openendurance/dev-configs-web/issues/new) |

## About this repo

The @openendurance/dev-configs-web repository is a monorepo made up of npm packages, configuration files, and documentation.

The project is structured like so:

```sh
dev-configs-web
├── documentation           # Documentation for working in the monorepo
└── packages
    ├── eslint-config		# Shared ESLint configuration
	├── jest-config 		# Shared Jest configuration
	├── prettier-config		# Shared Prettier configuration
	└── typescript-config	# Shared Prettier configuration
```

## Commands

### Install dependencies and build workspaces

```sh
yarn && yarn build
```

### Run a command

**One workspace**

Run commands from a selected workspace using [`turbo run <command> --filter=<workspace>...`](https://turborepo.org/docs/core-concepts/filtering) flag.

| Command                                        | Runs                                              |
| ---------------------------------------------- | ------------------------------------------------- |
| `yarn turbo run lint --filter=prettier-config` | Runs ESLint on the Prettier configuration project |

**All workspaces**

Run commands across all workspaces. This uses [`turbo run <command>`](https://turborepo.org/docs/reference/command-line-reference#turbo-run-task).

| Command           | Runs                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `yarn changeset`  | Adds a new [changelog entry](https://github.com/opendurance/dev-configs-web/blob/main/.github/CONTRIBUTING.md#adding-a-changeset) |
| `yarn lint`       | Lints all workspaces                                                                                                              |
| `yarn test`       | Tests all workspaces                                                                                                              |
| `yarn type-check` | Build types and check for type errors                                                                                             |
| `yarn clean`      | Remove generated files                                                                                                            |
| `yarn format`     | Format files with prettier                                                                                                        |

## Contribute to this project

We need your help! [Suggest a new feature](https://github.com/openendurance/dev-configs-web/issues/new) and pull requests are always welcome. See the [contribution guidelines](https://github.com/openendurance/dev-configs-web/blob/main/.github/CONTRIBUTING.md) for more information.

## License

Source code in this repository and related [NPM packages](https://www.npmjs.com/settings/openendurance/packages) are released under the [MIT license](https://github.com/openendurance/dev-configs-web/blob/main/LICENSE.md).

Photos used in the docs are property of their respective owners (probably [@kcargile](https://github.com/kcargile)) and are subject to copyright unless otherwise specified.

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B33512%2Fgithub.com%2Fopenendurance%2Fdev-configs-web.svg?type=small)](https://app.fossa.com/projects/custom%2B33512%2Fgithub.com%2Fopenendurance%2Fdev-configs-web?ref=badge_small)

---

<div align="center">
	⛰️⛰️ Made with 💙 in Leadville, CO ⛰️⛰️
</div>
<br />
<div align="center">
	Copyright © 2022 <a href="https://algorythmic.com">Algorythmic, LLC</a>
</div>
<br />
<div align="center">

[![Solidarity](https://github.com/jpoehnelt/in-solidarity-bot/raw/main/static//badge-flat.png)](https://github.com/apps/in-solidarity)

</div>
