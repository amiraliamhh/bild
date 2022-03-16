module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      {
        tsx: 'never',
      },
    ],
  },
}
