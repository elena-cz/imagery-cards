module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    fetch: false,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'no-use-before-define': 0,
    'react/jsx-filename-extension': 0,
    'react/no-did-mount-set-state': 0, // https://github.com/yannickcr/eslint-plugin-react/issues/1110
    'react/no-typos': 0, // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'arrow-parens': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        "alias": {
          "@app": "./app",
          "@assets": "./app/assets",
          "@components": "./app/components",
          "@screens": "./app/screens",
          "@store": "./app/store",
          "@actions": "./app/store/actions",
          "@reducers": "./app/store/reducers",
          "@styles": "./app/styles"
        },
      },
    },
  },
};
