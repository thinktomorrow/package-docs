## Package docs

## Contribute to the docs
The docs are build with vuepress. You can visit the static version of the docs by going into the `docs` folder. Just spin up a server like for instance:
`php -S localhost:8081 -t .vuepress/dist`.

Install vuepress in this project by going into the docs folder and running `yarn install`.
This requires at least node v8.0.

To run the dev server:
```bash
./node_modules/vuepress/bin/vuepress.js dev
```

To finalise your changes and build the static site:
```bash
./node_modules/vuepress/bin/vuepress.js build
```
