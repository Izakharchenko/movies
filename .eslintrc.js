module.exports = {
    extends: [
      'react-app',
      'prettier/react',
      'plugin:prettier/recommended',
    ],
    plugins: ['react-hooks', 'fp'],
    rules: {
      // General
      'comma-dangle': ['warn', 'always-multiline'],
      'global-require': 'warn',
      'key-spacing': 'off',
      'max-len': ['warn', 80, 4],
      'no-else-return': ['error', { allowElseIf: true }],
      'no-multi-spaces': 'off',
      'no-underscore-dangle': 'off',
      'no-var': 'error',
      'no-unused-vars': 'off',
      'no-console': 'warn',
  
      // React hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
  
      // FP
      'fp/no-arguments': 'error',
      'fp/no-class': 'off',
      'fp/no-delete': 'error',
      'fp/no-events': 'error',
      'fp/no-get-set': 'error',
      // 'fp/no-let': 'error',
      'fp/no-loops': 'off',
      'fp/no-mutating-assign': 'error',
      'fp/no-mutating-methods': 'off',
      'fp/no-mutation': 'off',
      'fp/no-nil': 'off',
      'fp/no-proxy': 'error',
      'fp/no-rest-parameters': 'off',
      'fp/no-this': 'off',
      'fp/no-throw': 'off',
      'fp/no-unused-expression': 'off',
      'fp/no-valueof-field': 'error',
  
      // Import
      'import/named': 'off',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
  };