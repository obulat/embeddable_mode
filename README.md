# openverse-frontend

![openverse-frontend-ci](https://github.com/wordpress/openverse-frontend/workflows/openverse-frontend-ci/badge.svg)

This repository is the frontend UI for accessing and exploring the openly-licensed content provided by the [Openverse API](https://github.com/wordpress/openverse-api).

The application is live at its previous home: [search.creativecommons.org](https://search.creativecommons.org/).

## Technology

The frontend app is built using [Vue.js](https://vuejs.org/) and [Nuxt.js](https://nuxtjs.org). You can [learn more about the migration to Nuxt.js here](/CODEBASE.md).

## Local Development

Run the following commands in order to have the code up and running on your machine:

```bash
# installs dependencies
npm install

# Builds and serves assets with hot-reload
npm run dev
```

### Docker setup

Alternatively, you can use Docker to build and run the application. You just have to run:

```bash
docker-compose up
```

You should now have the application running and accessible at http://localhost:8443.

You don't need to have the Openverse API running locally to be able to run the frontend application. It's configured to communicate, by default, with the [API](https://api.creativecommons.engineering) that's already publicly available. If you wish, you can change the URL of the API that's used during development by setting the `API_URL` environment variable.

### Standalone and embedded modes

The application can run in two modes. By default, it runs in embedded mode, which is loaded in an iframe on [WordPress.org/openverse](https://make.wordpress.org/openverse). It has a small header without logo and no footer.
The standalone mode which has a large header with logo and a footer, can be enabled by adding `?embedded=false` query parameter to the URL. For example, when running locally, you can go to [http://localhost:8443?embedded=false](http://localhost:8443?embedded=false) to view the standalone application.

### Running tests

You can run the unit tests by executing:

```bash
npm run test
```

### localhost tunneling

If you want to make your local development server accessible to the internet (for testing or showing someone something you're working on), you can use [`ngrok`](https://ngrok.com/). Follow the documentation on the `ngrok` site to install it and set it up. Once you have it installed, get the development server for Openverse running and in a separate window/tab, run:

```
# The extra parameters are required to ensure that ngrok redirects to the HTTPS version of the site
# and that the host header matches one that is accepted by the server
# (ngrok's default hostname is randomly generated and is not whitelisted).
ngrok http http://localhost:8443 -host-header="localhost:8443"
```

If you need to run an HTTP version (for example, if you're testing against third-party websites that do not accept the self-signed certificate generated by the dev server), run the dev server using `npm run dev` and use the following command to start `ngrok`:

```
ngrok http 8443 -host-header="localhost:8443"
```

## Formatting and Linting

The code in this repository is formatted using `prettier`. If you have prettier setup in your code editor it should work out of the box; otherwise you can use the `npm run lintfix` script to format and fix lint errors in your code. Checks are run to lint your code and validate the formatting on git precommit using [husky](https://github.com/typicode/husky).

You will need to fix any linting issues before committing. We recommend formatting your JavaScript files on save in your text editor. You can learn how to do this in Visual Studio Code [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#format-on-save).

## Versioning

Openverse uses [CalVer](https://calver.org/) for version numbering, in the `YYYY.M.Micro` format. This format is intentionally compatiable with NPM's `semver` parser. `Micro` is bumped whenever there are multiple releases in a month, for example `2020.07.1` is the first release in July 2020, while `2020.07.2` is the second.

## Contributing

Pull requests are welcome! Feel free to [join us on Slack](https://make.wordpress.org/chat/) and discuss the project with the engineers and community members on #openverse.

You are welcome to take any open issue in the tracker labeled [`help wanted`](https://github.com/wordpress/openverse-frontend/labels/help%20wanted) or [`good first issue`](https://github.com/wordpress/openverse-frontend/labels/good%20first%20issue); **there's no need to ask for permission in advance**. Other issues are open for contribution as well, but may be less accessible or well defined in comparison to those that are explicitly labeled.

## Acknowledgments

Openverse, previously known as CC Search, was concieved and built at [Creative Commons](https://creativecommons.org). We thank them for their commitment to open source and openly licensed content, with particular thanks to original team members @kgodey, @annatuma, @mathemancer, @aldenstpage, @brenoferreira, and @sclachar, along with their [community of volunteers](https://opensource.creativecommons.org/community/community-team/).
