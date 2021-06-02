# Element Gaming - eslint-config

[![Build Status](https://travis-ci.org/element-gaming/eslint-config.svg?branch=main)](https://travis-ci.org/element-gaming/eslint-config)

This package provides an eslint-config with mostly recommended rules. It already includes prettier configuration.

## Installation and usage

Install with yarn or npm:

```shell
# Yarn
$ yarn add --dev @element-gaming/eslint-config

# Npm
$ npm install --save-dev @element-gaming/eslint-config
```

If you don't have those already, install peer dependencies:

```shell
# Yarn
$ yarn add --dev eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier

# Npm
$ npm install --save-dev eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

Extend this config in your `.eslintrc` file:

```json
{
  "extends": "@element-gaming/eslint-config"
}
```
