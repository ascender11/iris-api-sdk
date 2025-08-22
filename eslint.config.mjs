// @ts-check

import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(globalIgnores(['node_modules/', 'dist/', 'build/']), {
  extends: [eslint.configs.recommended, tseslint.configs.recommended, prettierConfig],
  plugins: {
    import: importPlugin,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
        pathGroups: [
          { pattern: 'client/**', group: 'parent', position: 'before' },
          { pattern: 'constants/**', group: 'parent', position: 'before' },
          { pattern: 'errors/**', group: 'parent', position: 'before' },
          { pattern: 'modules/**', group: 'parent', position: 'before' },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        warnOnUnassignedImports: true,
      },
    ],
  },
});
