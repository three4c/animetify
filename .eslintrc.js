module.exports = {
  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /** propsに対してPropTypesを指定しない */
    'react/prop-types': 'off',
    /** 関数の返り値の型の明記を必須にしない */
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    /** シングルクォーテーション（''）とセミコロン（;）が無ければエラー */
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
  },
};
