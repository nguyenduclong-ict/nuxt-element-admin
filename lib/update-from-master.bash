#!/bin/bash
git checkout master -- lib/ \
    store \
    layouts \
    static \
    .env.example \
    .eslintrc.js \
    .gitignore \
    .prettierrc \
    jsconfig.json \
    nuxt.config.js \
    package.json
