module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
