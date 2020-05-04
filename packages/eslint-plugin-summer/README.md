# eslint-plugin-summer

The never ending summer plugin of lint.

## Install

> npm

```console
$ npm install --save-dev eslint eslint-plugin-summer
```

> yarn

```console
$ yarn add -D eslint eslint-plugin-summer
```

## usage

Setup `.eslintrc`

```json
{
  "plugins": ["summer"],
  "rules": {
    "summer/no-eqeqeq-null-undefined": "error",
    "summer/no-let": "error",
    "summer/no-plain-new-date": "error"
  }
}
```

## Recommended config

This plugin exports a [`recommended` config](src/index.ts) that enforces good practices.

Setup on your `.eslintrc` with the `extends` option:

```json
{
  "extends": ["plugin:summer/recommended"]
}
```

See the [ESLint docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending config files.

**Note**: This config will also enable the correct [parser options](https://eslint.org/docs/user-guide/configuring#specifying-parser-options) and [environment](https://eslint.org/docs/user-guide/configuring#specifying-environments).
