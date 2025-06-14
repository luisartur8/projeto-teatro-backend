// eslint.config.js
import { config } from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default config(
  {
    ignores: ['eslint.config.mjs'],
  },
  ...config.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        sourceType: 'commonjs',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
);
