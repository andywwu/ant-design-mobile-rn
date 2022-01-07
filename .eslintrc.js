module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 0,
    semi: [1, 'never'],
    '@typescript-eslint/no-unused-vars': 1,
  },
  env: {
    browser: true,
    node: true,
  },
}
