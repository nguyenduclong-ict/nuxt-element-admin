# nuxt-element-admin
Admin dashboard with nuxtjs + element ui, support ssr, reponsive mobile...

- [Demo](https://nguyenduclong-ict.github.io/nuxt-element-admin)

## Init new project

```bash
$ git clone https://github.com/nguyenduclong-ict/nuxt-element-admin.git
$ cd nuxt-element-admin
$ rm -rf .git 
$ git init

# Update core
# will update folder lib/ store/
$ yarn update:core
```

## Build Setup

```bash
# .env
$ cp .env.example .env

# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# serve mock server at localhost:3001
$ yarn mock

# develop
$ yarn dev:all

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
